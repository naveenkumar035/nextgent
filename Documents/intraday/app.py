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

# Calculate RSI
def calculate_rsi(series, period=14):
    delta = series.diff()
    gain = (delta.where(delta > 0, 0)).rolling(window=period).mean()
    loss = (-delta.where(delta < 0, 0)).rolling(window=period).mean()
    rs = gain / loss
    rsi = 100 - (100 / (1 + rs))
    return rsi

# Identify Support and Resistance Levels
def identify_support_resistance(df, window=20, threshold=0.02):
    df['Support'] = df['low'].rolling(window=window, min_periods=1).min()
    df['Resistance'] = df['high'].rolling(window=window, min_periods=1).max()
    
    # Filter support and resistance levels based on touches
    df['Support Valid'] = (df['low'] <= df['Support'] * (1 + threshold)) & (df['low'] >= df['Support'] * (1 - threshold))
    df['Resistance Valid'] = (df['high'] >= df['Resistance'] * (1 - threshold)) & (df['high'] <= df['Resistance'] * (1 + threshold))
    
    return df

# Define backtest function for RSI
def backtest_rsi(df, lower_rsi=30, upper_rsi=70):
    positions = []
    correct_signals = 0
    total_trades = 0
    profit = 0
    buy_price = None

    for i in range(len(df)):
        if df['RSI'].iloc[i] < lower_rsi:
            positions.append('Buy')
            buy_price = df['close'].iloc[i]
        elif df['RSI'].iloc[i] > upper_rsi:
            positions.append('Sell')
            if buy_price is not None:
                sell_price = df['close'].iloc[i]
                profit += (sell_price - buy_price)
                total_trades += 1
                if sell_price > buy_price:
                    correct_signals += 1
                buy_price = None  # Reset after a trade is executed
        else:
            positions.append('Hold')
    
    df['RSI Position'] = positions

    # Calculate profit ratio
    profit_ratio = profit / df['close'].iloc[0] * 100

    # Calculate accuracy
    accuracy_percentage = (correct_signals / total_trades * 100) if total_trades > 0 else 0

    return profit, profit_ratio, accuracy_percentage

# Define backtest function for Support and Resistance
def backtest_support_resistance(df):
    positions = []
    correct_signals = 0
    total_trades = 0
    profit = 0
    buy_price = None

    for i in range(len(df)):
        if df['Support Valid'].iloc[i]:
            positions.append('Buy')
            buy_price = df['close'].iloc[i]
        elif df['Resistance Valid'].iloc[i]:
            positions.append('Sell')
            if buy_price is not None:
                sell_price = df['close'].iloc[i]
                profit += (sell_price - buy_price)
                total_trades += 1
                if sell_price > buy_price:
                    correct_signals += 1
                buy_price = None  # Reset after a trade is executed
        else:
            positions.append('Hold')

    df['Support/Resistance Position'] = positions

    # Calculate profit ratio
    profit_ratio = profit / df['close'].iloc[0] * 100

    # Calculate accuracy
    accuracy_percentage = (correct_signals / total_trades * 100) if total_trades > 0 else 0

    return profit, profit_ratio, accuracy_percentage

# Calculate RSI indicator
df['RSI'] = calculate_rsi(df['close'])

# Identify Support and Resistance levels
df = identify_support_resistance(df)

# Backtest all strategies
rsi_profit, rsi_profit_ratio, rsi_accuracy_percentage = backtest_rsi(df)
support_resistance_profit, support_resistance_profit_ratio, support_resistance_accuracy_percentage = backtest_support_resistance(df)

# Calculate combined results
combined_profit = rsi_profit + support_resistance_profit
combined_profit_ratio = (combined_profit / df['close'].iloc[0]) * 100
combined_accuracy_percentage = (rsi_accuracy_percentage + support_resistance_accuracy_percentage) / 2

# Print results
print(f"RSI - Total Profit: {rsi_profit:.2f}, Profit Ratio: {rsi_profit_ratio:.2f}%, Accuracy Percentage: {rsi_accuracy_percentage:.2f}%")
print(f"Support/Resistance - Total Profit: {support_resistance_profit:.2f}, Profit Ratio: {support_resistance_profit_ratio:.2f}%, Accuracy Percentage: {support_resistance_accuracy_percentage:.2f}%")
print(f"Combined - Total Profit: {combined_profit:.2f}, Profit Ratio: {combined_profit_ratio:.2f}%, Combined Accuracy Percentage: {combined_accuracy_percentage:.2f}%")
