import React, { useState } from 'react';
import UserAuthService from '../../client/services/Userauth';
import { useRouter } from 'next/router';

import { Grid, TextField, Paper, Typography } from '@material-ui/core';

const register = () => {
	const router = useRouter();
	const [data, setData] = useState({
		name: '',
		email: '',
		password: '',
		error: null,
	});

	const { name, email, password, error } = data;

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		try {
			setData({ ...data, error: null });
			e.preventDefault();
			UserAuthService.create(data);
			router.push('/login');
		} catch (error) {
			setData({ ...data, error: err.response.data.error });
		}
	};

	return (
		<div>
			<h4>Create an account</h4>
			<form>
				<Paper style={{ padding: 16 }}>
					<Grid container alignItems='flex-start' spacing={2}>
						<Grid item xs={3}>
							<TextField
								id='name'
								label='name'
								name='name'
								value={name}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={3}>
							<TextField
								id='email'
								label='email'
								name='email'
								value={email}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={3}>
							<TextField
								id='password'
								label='password'
								name='password'
								value={password}
								onChange={handleChange}
							/>
						</Grid>
					</Grid>
				</Paper>
				{error ? (
					<Typography color='textPrimary' variant='subtitle1'>
						{' '}
						{error}
					</Typography>
				) : null}
				<button
					style={{ padding: 6, margin: 10, marginLeft: 300 }}
					type='submit'
					onClick={handleSubmit}
				>
					Register
				</button>
			</form>
		</div>
	);
};

export default register;
