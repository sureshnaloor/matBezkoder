import React from 'react';

export const CreditsComp = () => {
	return (
		<div>
			<div className='container'>
					<style jsx>{`
						.container {
							color: green;
							width: 100%;
							height: 100vh;
							display: flex;
							justify-content: space-between;
							align-items: center;
							
						}
					`}</style>
			<div style={{maxWidth:'25vw'}}>
			<h3 style={{clipPath: 'polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 10% 52%, 0% 0%)', paddingLeft: '50px', paddingTop:'40px', paddingBottom: '40px', paddingRight:'50px', fontFamily:'Lato', fontSize:'16px', fontWeight:'600', background: '#E7D7DB',   margin:'20px 20px 24px', letterSpacing:'1px'}}> This web-site is created using:</h3>
			</div>
			<ul style={{listStyleType: 'none', color:'#a11', fontSize:'26px', display:'inline-block', letterSpacing:'4px', lineHeight:'32px'}}>
				<li style={{paddingBottom:'12px', borderBottom:'red 2px solid'}}> node.js (for server-end javascript) </li>
				<li style={{paddingTop:'6px', paddingBottom:'12px', borderBottom: 'orange 2px solid'}}> Express.js (Web Framework for RESTful API) </li>
				<li style={{paddingTop:'6px', paddingBottom:'12px', borderBottom: 'green 2px solid'}}> Next.js (Client-end REACT Framework)</li>
				<li style={{paddingTop:'6px', paddingBottom:'12px', borderBottom: 'purple 2px solid'}}> MongoDB (no-SQL cross-platform document database) </li>
				<li style={{paddingTop:'6px', paddingBottom:'12px', borderBottom: 'blue 4px solid'}}> Material UI (CSS Framework) </li>
			</ul>
			<div style={{maxWidth:'20vw'}}>
			<h3 style={{background: '#E7D7DB', padding: '20px 40px 20px 20px', color: '#4E443C', fontFamily:'Lato', fontSize:'16px', fontWeight:'600', margin:'20px 20px 24px', letterSpacing:'2px',
			clipPath: 'polygon(100% 0%, 75% 50%, 100% 100%, 11% 100%, 0% 50%, 11% 0)'}}> designed and developed by <span style={{fontSize:'14px', color:'#dd113C', display:'inline-block'}}>Suresh Naloor</span></h3>
			</div>
			</div>
		</div>
	);
};
