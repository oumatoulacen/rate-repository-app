import { View, Image, StyleSheet, Pressable } from 'react-native';
import Text from './Text';

const formatCount = (count) => {
	return count >= 1000
		? `${(count / 1000).toFixed(1).replace(/\.0$/, '')}k`
		: String(count);
};

const RepositoryItem = ({ repository }) => {
	return (
		<View style={styles.repositoryItem}>
			<View style={styles.topSection}>
				{repository.ownerAvatarUrl && (
					<Image
						source={{ uri: repository.ownerAvatarUrl }}
						style={styles.image}
					/>
				)}
				<View style={styles.infoSection}>
					<Text style={styles.text}>{repository.fullName}</Text>
					<Text style={styles.description}>{repository.description}</Text>
					<Pressable>
						<Text style={[styles.text, styles.language]}>
							{repository.language}
						</Text>
					</Pressable>
				</View>
			</View>
			<View style={styles.statsSection}>
				<View>
					<Text style={styles.text}>
						{formatCount(repository.stargazersCount)}
					</Text>
					<Text style={styles.text}>Stars</Text>
				</View>
				<View>
					<Text style={styles.text}>{formatCount(repository.forksCount)}</Text>
					<Text style={styles.text}>Forks</Text>
				</View>
				<View>
					<Text style={styles.text}>{repository.ratingAverage}</Text>
					<Text style={styles.text}>Rating</Text>
				</View>
				<View>
					<Text style={styles.text}>{repository.reviewCount}</Text>
					<Text style={styles.text}>Review</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	repositoryItem: {
		display: 'flex',
		flexDirection: 'column',
		padding: 20,
	},
	topSection: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		gap: 16,
	},
	infoSection: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		gap: 4,
		flex: 1,
	},
	statsSection: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 16,
	},
	image: {
		width: 50,
		height: 50,
		borderRadius: 25,
		marginRight: 16,
		alignSelf: 'flex-start',
	},
	text: {
		fontSize: 16,
		lineHeight: 22,
	},
	description: {
		lineHeight: 20,
		flexShrink: 1,
	},
	language: {
		alignSelf: 'flex-start',
		paddingHorizontal: 8,
		paddingVertical: 4,
		borderRadius: 4,
		backgroundColor: '#0366d6',
		color: '#fff',
		marginBottom: 4,
	},
});

export default RepositoryItem;
