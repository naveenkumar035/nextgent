import pandas as pd
import numpy as np
import json

# Load JSON data from file
with open('historical_data.json', 'r') as file:
    data = json.load(file)

# Extract candle data from the JSON structure
candles = data['data']['candles']

# Convert candle data to DataFrame
df = pd.DataFrame(candles, columns=["datetime", "open", "high", "low", "close", "volume", "misc"])

# Convert datetime column to datetime type
df["datetime"] = pd.to_datetime(df["datetime"])

# Calculate Bollinger Bands
def calculate_bollinger_bands(df, window=20, num_std_dev=2):
    df['SMA'] = df['close'].rolling(window=window).mean()
    df['STD'] = df['close'].rolling(window=window).std()
    df['Upper Band'] = df['SMA'] + (df['STD'] * num_std_dev)
    df['Lower Band'] = df['SMA'] - (df['STD'] * num_std_dev)
    return df

# Calculate RSI
def calculate_rsi(df, period=14):
    delta = df['close'].diff()
    gain = np.where(delta > 0, delta, 0)
    loss = np.where(delta < 0, -delta, 0)
    avg_gain = pd.Series(gain).rolling(window=period).mean()
    avg_loss = pd.Series(loss).rolling(window=period).mean()
    rs = avg_gain / avg_loss
    df['RSI'] = 100 - (100 / (1 + rs))
    return df

# Identify Support and Resistance Levels
def identify_support_resistance(df, window=20, threshold=0.02):
    df['Support'] = df['low'].rolling(window=window, min_periods=1).min()
    df['Resistance'] = df['high'].rolling(window=window, min_periods=1).max()
    
    # Filter support and resistance levels based on touches
    df['Support Valid'] = (df['low'] <= df['Support'] * (1 + threshold)) & (df['low'] >= df['Support'] * (1 - threshold))
    df['Resistance Valid'] = (df['high'] >= df['Resistance'] * (1 - threshold)) & (df['high'] <= df['Resistance'] * (1 + threshold))
    
    return df

# Calculate Fibonacci Retracements
def calculate_fibonacci_retracements(df):
    max_high = df['high'].max()
    min_low = df['low'].min()
    range = max_high - min_low
    
    # Define Fibonacci retracement levels
    retracement_levels = [0.236, 0.382, 0.618]
    
    for level in retracement_levels:
        df[f'Fibonacci Level {int(level*100)}'] = max_high - (range * level)
    
    return df

# Define backtest function for combined strategy
def backtest_combined_strategy(df):
    positions = []
    correct_signals = 0
    total_trades = 0
    profit = 0
    buy_price = None
    target_price_38 = None
    target_price_61 = None

    # Calculate indicators
    df = calculate_bollinger_bands(df)
    df = calculate_rsi(df)
    df = identify_support_resistance(df)
    df = calculate_fibonacci_retracements(df)
    
    for i in range(len(df)):
        # Check for a Buy signal (based on Support/Resistance and Fibonacci Levels only)
        if df['close'].iloc[i] <= df['Fibonacci Level 61'].iloc[i] and df['Support Valid'].iloc[i]:
            # Buy signal if the close price is near the 61.8% Fibonacci level and at a valid support level
            positions.append('Buy')
            buy_price = df['close'].iloc[i]
            # Set target prices based on Fibonacci levels
            target_price_38 = df['Fibonacci Level 38'].iloc[i]
            target_price_61 = df['Fibonacci Level 61'].iloc[i]
        
        # Check for a Sell signal (using Bollinger Bands and RSI for exit criteria)
        elif buy_price is not None and (df['close'].iloc[i] >= target_price_38 or df['RSI'].iloc[i] > 70 or df['close'].iloc[i] > df['Upper Band'].iloc[i]):
            # Sell signal if the close price reaches or exceeds the 38.2% Fibonacci level, RSI is overbought, or price is above the Upper Band
            positions.append('Sell')
            sell_price = df['close'].iloc[i]
            profit += (sell_price - buy_price)
            total_trades += 1

            # Check if the trade was profitable
            if sell_price > buy_price:
                correct_signals += 1

            buy_price = None  # Reset after a trade is executed
            target_price_38 = None
            target_price_61 = None
        
        else:
            positions.append('Hold')

    df['Combined Position'] = positions

    # Calculate profit ratio
    profit_ratio = profit / df['close'].iloc[0] * 100

    # Calculate accuracy
    accuracy_percentage = (correct_signals / total_trades * 100) if total_trades > 0 else 0

    return profit, profit_ratio, accuracy_percentage

# Backtest the combined strategy with Bollinger Bands, RSI for exit, Support/Resistance, and Fibonacci Retracements
profit, profit_ratio, accuracy_percentage = backtest_combined_strategy(df)

# Print results
print(f"Combined Strategy - Total Profit: {profit:.2f}")
print(f"Profit Ratio: {profit_ratio:.2f}%")
print(f"Accuracy Percentage: {accuracy_percentage:.2f}%")
