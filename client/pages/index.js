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
							background: #e0ebca;
							display: flex;
							justify-content: space-between;
							align-items: center;
						}
					`}</style>
					<br /><h2 style={{fontFamily:'Lato', fontSize:'34px', fontWeight:'600', margin:'20px 20px 24px', lineHeight:'62px', letterSpacing:'2px'}}> SAP MM Portal homepage</h2>
					<h4 style={{color: '#a11', fontSize:'20px'}}> This web app is designed for accessing SAP MM data through web for benefit of Site engineers/remote users.
						<span id="next1" style={{color:'#4E443C', display:'inline-block', letterSpacing:'2px', lineHeight:'132px'}}>
							
							
							This app uses stale/offline data, fed weekly upload of data from SAP. </span>
						
						<span id="next2" style={{display:'inline-block'}}>The data should therefore not be considered where real-time/online is required. </span>
						
					</h4>

					
					
					
					{/* <button onClick={logout}> Logout </button> */}
				</div>

				<div className='pagetwo' id='two'>
					<style jsx>{`
						.pagetwo {
							color: red;
							width: 100%;
							height: 100vh;
							background: #ede4cc;
							display: flex;
							justify-content: center;
						}
					`}</style>
					{/* <h2> The charts here </h2> */}
					<ChartsComp />
				</div>

				<div className='pagethree' id='three'>
					<style jsx>{`
						.pagethree {
							color: green;
							width: 100%;
							height: 100vh;
							background: #dde2ed;
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
							background: #f0e6ee;
							display: flex;
							justify-content: space-between;
							align-items: center;
						}
					`}</style>
					
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
