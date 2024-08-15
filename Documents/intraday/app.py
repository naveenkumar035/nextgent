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
def backtest_combined_strategy(df, lower_rsi=30, upper_rsi=70, adx_threshold=25, di_diff_threshold=10):
    positions = []
    correct_signals = 0
    total_trades = 0
    profit = 0
    buy_price = None

    # Calculate indicators
    df = calculate_bollinger_bands(df)
    df = identify_support_resistance(df)
    df = calculate_fibonacci_retracements(df)
    
    for i in range(len(df)):
        if df['close'].iloc[i] < df['Lower Band'].iloc[i] and df['Support Valid'].iloc[i]:
            # Buy signal if the close price is below the Lower Band and at a valid support level
            positions.append('Buy')
            buy_price = df['close'].iloc[i]
        elif df['close'].iloc[i] > df['Upper Band'].iloc[i] and df['Resistance Valid'].iloc[i]:
            # Sell signal if the close price is above the Upper Band and at a valid resistance level
            positions.append('Sell')
            if buy_price is not None:
                sell_price = df['close'].iloc[i]
                profit += (sell_price - buy_price)
                total_trades += 1

                # Check if the trade was profitable
                if sell_price > buy_price:
                    correct_signals += 1

                buy_price = None  # Reset after a trade is executed
        else:
            positions.append('Hold')

    df['Combined Position'] = positions

    # Calculate profit ratio
    profit_ratio = profit / df['close'].iloc[0] * 100

    # Calculate accuracy
    accuracy_percentage = (correct_signals / total_trades * 100) if total_trades > 0 else 0

    return profit, profit_ratio, accuracy_percentage

# Backtest the combined strategy with Bollinger Bands, Support/Resistance, and Fibonacci Retracements
profit, profit_ratio, accuracy_percentage = backtest_combined_strategy(df)

# Print results
print(f"Combined Strategy - Total Profit: {profit:.2f}")
print(f"Profit Ratio: {profit_ratio:.2f}%")
print(f"Accuracy Percentage: {accuracy_percentage:.2f}%")
