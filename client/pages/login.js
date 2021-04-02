import React, { useState } from 'react';
import UserAuthService from '../../client/services/Userauth';
import { useRouter } from 'next/router';

import { Grid, TextField, Paper, Typography } from '@material-ui/core';

const login = () => {
	const router = useRouter();
	const [data, setData] = useState({
		email: '',
		password: '',
		error: null,
	});

	const { email, password, error } = data;

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		try{
		setData({...data, error: null})
		e.preventDefault();
		const res = await UserAuthService.loginAndGetToken(data);
		console.log(res)
		localStorage.setItem('token', res.data.token);
		router.push('/')
		}
		catch(err){
			setData({...data,error: err.response.data.error})
		}
		
	};

	return (
		<div>
			<h4>Login to your account</h4>
			<form>
				<Paper style={{ padding: 16 }}>
					<Grid container alignItems='flex-start' spacing={2}>
						
						<Grid item xs={6}>
							<TextField
								id='email'
								label='email'
								name='email'
								value={email}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={6}>
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
				{error ? <Typography color='textSecondary' variant='subtitle1'> {error} </Typography>: null}
				<button
					style={{ padding: 6, margin: 10, marginLeft: 300 }}
					type='submit'
					onClick={handleSubmit}
				>
					Login
				</button>
			</form>
		</div>
	);
};

export default login;
