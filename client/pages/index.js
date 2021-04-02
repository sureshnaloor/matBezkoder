import React, { useState, useEffect } from 'react';
import UserAuthService from '../../client/services/Userauth';
import {useRouter} from 'next/router'

const index = () => {
	const router = useRouter();
	const [user, setUser] = useState(null);

	const getUser = async () => {
		const res = await UserAuthService.getUser();
		setUser(res.data);
		// console.log(res.data)
	};

	useEffect(() => {
		getUser();
	}, []);	

	const logout = () => {
		localStorage.removeItem('token')
		router.push('/login')
	}

	useEffect(() => {
		if (!localStorage.getItem('token')) {
			router.push('/login');
		}
		window.onbeforeunload = () => {
			localStorage.removeItem('token')
		}
	}, [])	

	return (
		<div>
			<h2> SAP MM Portal homepage</h2>
			<h3> Welcome {user && user.name } </h3>
			<button onClick={logout}> Logout </button>
		</div>
	);
};

export default index;
