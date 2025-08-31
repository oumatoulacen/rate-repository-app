// import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';

const styles = StyleSheet.create({
	container: {
		marginTop: 0,
		// marginLeft: 16,
		// marginRight: 16,
		flexGrow: 1,
		flexShrink: 1,
	},
});

const Main = () => {
	return (
		<View style={styles.container}>
			<RepositoryList />
		</View>
	);
};

export default Main;
