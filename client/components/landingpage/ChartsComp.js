import React, { useState, useEffect } from 'react';
import {BarChart, Bar, XAxis, YAxis} from 'recharts'

import axios from 'axios'

export const ChartsComp = () => {
	const [stock, setStock] = useState([])

	useEffect(() => {		
        fetchStkval()
    }, []);		

	const fetchStkval = async () => {
		const result = await axios(
			'http://localhost:5000/api/completestock/plant/sum'
		);

		await setStock(result.data);		
		console.log(result.data);
	};

	const data = [
		
	];

	stock.map((stk) => {
		data.push({plantcode:stk._id, inventory: stk.plantTotal.$numberDecimal})
	})
	
	return (
		<div className='chartone'>
			<style jsx>{`
				.chartone {
					display: grid;
					grid-template-columns: 50% 50%;
				}
			`}</style>
			<div className='grid1'>
				<h3> Chart one goes here!</h3>
				<BarChart width={500} height={250} data={data}>
					<XAxis dataKey='plantcode' />
					<YAxis dataKey='inventory' />
					<Bar dataKey='inventory' />
				</BarChart>
			</div>
			<div className='grid2'>
				<h3> Chart two goes here!</h3>
				<BarChart width={500} height={250} data={data}>
					<XAxis dataKey='plantcode' />
					<YAxis dataKey='inventory' />
					<Bar dataKey='inventory' />
				</BarChart>
			</div>
			<div className='grid3'>
				<h3> Chart three goes here!</h3>
				<BarChart width={500} height={250} data={data}>
					<XAxis dataKey='plantcode' />
					<YAxis dataKey='inventory' />
					<Bar dataKey='inventory' />
				</BarChart>
			</div>
			<div className='grid4'>
				<h3> Chart four goes here!</h3>
				<BarChart width={500} height={250} data={data}>
					<XAxis dataKey='plantcode' />
					<YAxis dataKey='inventory' />
					<Bar dataKey='inventory' />
				</BarChart>
			</div>
		</div>
	);
};
