import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { NativeRouter } from 'react-router-native';

import Main from './src/components/Main';

const App = () => {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
			<NativeRouter
				future={{
					v7_relativeSplatPath: true,
					v7_startTransition: true,
				}}
			>
				<Main />
			</NativeRouter>
			<StatusBar style="auto" />
		</SafeAreaView>
	);
};

export default App;
