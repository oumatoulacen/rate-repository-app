import { useFormik } from 'formik';
import { View, StyleSheet, TextInput } from 'react-native';
import * as yup from 'yup';
import Text from './Text';

const validationSchema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().min(6).required(),
});

const SignIn = () => {
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema,
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
		<View style={styles.container}>
			<TextInput
				style={[
					styles.input,
					formik.touched.email && formik.errors.email && { borderColor: 'red' },
				]}
				placeholder="Email"
				onChangeText={formik.handleChange('email')}
				value={formik.values.email}
				autoCapitalize="none"
			/>
			{formik.touched.email && formik.errors.email ? (
				<Text style={{ color: 'red' }}>{formik.errors.email}</Text>
			) : null}
			<TextInput
				style={[
					styles.input,
					formik.touched.password &&
						formik.errors.password && { borderColor: 'red' },
				]}
				placeholder="Password"
				onChangeText={formik.handleChange('password')}
				value={formik.values.password}
				secureTextEntry
			/>
			{formik.touched.password && formik.errors.password ? (
				<Text style={{ color: 'red' }}>{formik.errors.password}</Text>
			) : null}
			<Text
				onPress={formik.handleSubmit}
				style={styles.button}
				fontWeight="bold"
				fontSize="subheading"
			>
				Sign In
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
	input: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 10,
		paddingHorizontal: 10,
	},
	button: {
		backgroundColor: '#0366d6',
		color: 'white',
		textAlign: 'center',
		padding: 10,
		borderRadius: 5,
	},
});

export default SignIn;
