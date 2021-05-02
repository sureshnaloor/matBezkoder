import React, { useState, useEffect } from 'react';
import UserAuthService from '../services/Userauth';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';

import { ToptenComp } from '../components/landingpage/ToptenComp';
import { CreditsComp } from '../components/landingpage/CreditsComp';
import { ChartsComp } from '../components/landingpage/ChartsComp';

const useStyles = makeStyles((theme) => ({
	pageone: {
		width: '100%',
		height: '100vh',
		background: '#00ffcc',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	pagetwo: {
		width: '100%',
		height: '100vh',
		background: '#aaffcc',
	},
	pagethree: {
		width: '100%',
		height: '100vh',
		background: '#11ffcc',
	},
	pagefour: {
		width: '100%',
		height: '100vh',
		background: '#ffffcc',
	},
}));

const index = () => {
	const router = useRouter();
	const classes = useStyles();
	// const [user, setUser] = useState(null);

	// const getUser = async () => {
	// 	const res = await UserAuthService.getUser();
	// 	setUser(res.data);
	// 	console.log(res.data);
	// };

	// useEffect(() => {
	// 	getUser();
	// }, []);

	// const logout = () => {
	// 	localStorage.removeItem('token')
	// 	router.push('/login')
	// }

	// useEffect(() => {
	// 	if (!localStorage.getItem('token')) {
	// 		router.push('/login');
	// 	}
	// 	window.onbeforeunload = () => {
	// 		localStorage.removeItem('token')
	// 	}
	// }, [])

	return (
		<>
			<div>
				<div className={classes.pageone}>
					<h2> SAP MM Portal homepage</h2>
					<h3> Welcome Guest! </h3>
					{/* <button onClick={logout}> Logout </button> */}
				</div>

				<div>
					<h2> The charts here </h2>
					<ChartsComp />
				</div>

				<div>
					<h2> The top 10 data here </h2>
					<ToptenComp />
				</div>

				<div>
					<h2> Boasting here! </h2>
					<CreditsComp />
				</div>
			</div>
		</>
	);
};
export default index;
