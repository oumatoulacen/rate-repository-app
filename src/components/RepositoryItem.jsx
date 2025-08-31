import { Text, View } from 'react-native-web';

const RepositoryItem = ({ repository }) => {
	return (
		<View>
			<Text> Full Name: {repository.fullName} </Text>
			<Text> Description: {repository.description} </Text>
			<Text> Language: {repository.language} </Text>
			<Text> Forks Count: {repository.forksCount} </Text>
			<Text> Stargazers Count: {repository.stargazersCount} </Text>
			<Text> Rating Average: {repository.ratingAverage} </Text>
			<Text> Review Count: {repository.reviewCount} </Text>
			{/* <Image source={{ uri: repository.ownerAvatarUrl }} /> */}
		</View>
	);
};

export default RepositoryItem;
