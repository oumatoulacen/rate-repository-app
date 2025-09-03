// components/AppBarTab.jsx
import { TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';

import Text from './Text';

const AppBarTab = ({ to, text }) => {
	return (
		<Link to={to} component={TouchableOpacity}>
			<Text fontWeight="bold" style={{ color: 'white' }} fontSize="subheading">
				{text}
			</Text>
		</Link>
	);
};

export default AppBarTab;
