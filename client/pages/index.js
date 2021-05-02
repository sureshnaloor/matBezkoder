import React from 'react';
import Head from 'next/head';
import './style.css'

import { ToptenComp } from '../components/landingpage/ToptenComp';
import { CreditsComp } from '../components/landingpage/CreditsComp';
import { ChartsComp } from '../components/landingpage/ChartsComp';

const index = () => {
	return (
		<>
			<Head>
				<title>JAL web-connect</title>
				
			</Head>
			<div>
				<div className='pageone' id='one'>
					<style jsx>{`
						.pageone {
							color: green;
							width: 100%;
							height: 100vh;
							background: #00ffcc;
							display: flex;
							justify-content: space-between;
							align-items: center;
						}
					`}</style>
					<h2> SAP MM Portal homepage</h2>
					<h3> Welcome Guest! </h3>
					{/* <button onClick={logout}> Logout </button> */}
				</div>

				<div className='pagetwo' id='two'>
					<style jsx>{`
						.pagetwo {
							color: red;
							width: 100%;
							height: 100vh;
							background: #000122;
							display: flex;
							justify-content: space-between;
							align-items: center;
						}
					`}</style>
					<h2> The charts here </h2>
					<ChartsComp />
				</div>

				<div className='pagethree' id='three'>
					<style jsx>{`
						.pagethree {
							color: green;
							width: 100%;
							height: 100vh;
							background: #22ffcc;
							display: flex;
							justify-content: space-between;
							align-items: center;
						}
					`}</style>
					<h2> The top 10 data here </h2>
					<ToptenComp />
				</div>

				<div className='pagefour' id='four'>
					<style jsx>{`
						.pagefour {
							color: green;
							width: 100%;
							height: 100vh;
							background: #ffffcc;
							display: flex;
							justify-content: space-between;
							align-items: center;
						}
					`}</style>
					<h2> Boasting here! </h2>
					<CreditsComp />
				</div>

				<div className='widget'>
					<style jsx>{`
						.widget {
							display: flex;
							flex-direction: column;
							justify-content: center;
							height: 100vh;
							position: fixed;
							top: 0px;
							right: 60px;
						}
						.widget a {
							display: block;
							width: 10px;
							height: 10px;
							border: 1px solid #333;
							border-radius: 50%;
							margin: 10px;
							background: rgba(0, 0, 0, 0.3);
							box-shadow: 0 0 10px 0 grey;
							cursor: pointer;
						}
					`}</style>
					<h1>
						<a href='#one'> </a>
						<a href='#two'> </a>
						<a href='#three'> </a>
						<a href='#four'> </a>
					</h1>
				</div>
			</div>
		</>
	);
};


export default index;
