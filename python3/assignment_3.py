import numpy as np

# Generate synthetic football player data
np.random.seed(42)  # For reproducibility

num_players = 20
player_names = np.array([f"P{i+1}" for i in range(num_players)])

goals = np.random.randint(0, 15, num_players)
assists = np.random.randint(0, 10, num_players)
pass_accuracy = np.round(np.random.uniform(70, 95, num_players), 2)
tackles = np.random.randint(5, 30, num_players)
minutes_played = np.random.randint(500, 2000, num_players)

# Combine into a NumPy array
player_stats = np.column_stack((goals, assists, pass_accuracy, tackles, minutes_played))

# 1. Best player based on goals
best_player_index = np.argmax(player_stats[:, 0])
best_player = player_names[best_player_index]
best_player_goals = player_stats[best_player_index, 0]

# 2. Average statistics
avg_goals = np.mean(player_stats[:, 0])
avg_assists = np.mean(player_stats[:, 1])
avg_pass_accuracy = np.mean(player_stats[:, 2])

# 3. Sort players based on goals
sorted_indices = np.argsort(-player_stats[:, 0])  # Descending order
sorted_players = player_names[sorted_indices]

# 4. Players with more than 10 goals
high_scorers = player_names[player_stats[:, 0] > 10]

# 5. Correlation between minutes played and goals
correlation = np.corrcoef(player_stats[:, 0], player_stats[:, 4])[0, 1]

# Print results
print(f"Best player: {best_player} with {best_player_goals} goals")
print(f"Average Goals: {avg_goals:.2f}, Assists: {avg_assists:.2f}, Pass Accuracy: {avg_pass_accuracy:.2f}%")
print("Top players ranked by goals:", sorted_players)
print("Players with more than 10 goals:", high_scorers)
print(f"Correlation between minutes played and goals: {correlation:.2f}")
