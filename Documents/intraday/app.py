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

df['RSI'] = calculate_rsi(df['close'])

# Define trading strategy
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
                
                # Check if the trade was profitable
                if sell_price > buy_price:
                    correct_signals += 1
                
                buy_price = None  # Reset after a trade is executed
        else:
            positions.append('Hold')
    
    df['Position'] = positions

    # Calculate profit ratio
    profit_ratio = profit / df['close'].iloc[0] * 100

    # Calculate accuracy
    accuracy_percentage = (correct_signals / total_trades * 100) if total_trades > 0 else 0

    return profit, profit_ratio, accuracy_percentage

# Run the backtest
profit, profit_ratio, accuracy_percentage = backtest_rsi(df)

print(f"Total Profit: {profit:.2f}")
print(f"Profit Ratio: {profit_ratio:.2f}%")
print(f"Accuracy Percentage: {accuracy_percentage:.2f}%")
