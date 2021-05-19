import React, { useState, useEffect } from 'react';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	PieChart,
	Pie,
	Cell,
	Tooltip,
	Legend,
} from 'recharts';

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

	const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

	stock.map((stk) => {
		data.push({
			plantcode: stk._id,
			inventory: parseInt(stk.plantTotal.$numberDecimal),
		});
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
				<h3> Pie-chart with plantwise inventory:</h3>
				<PieChart width={400} height={250}>
					<Pie
						color='#000000'
						dataKey='inventory'
						nameKey='plantcode'
						outerRadius={100}
						fill='#8884d8'
						data={data}
					>
						{data.map((entry, index) => (
							<Cell
								key={`cell-${index}`}
								fill={COLORS[index % COLORS.length]}
							/>
						))}
					</Pie>

					{/* Display the tooltips */}
					<Tooltip />
					{/* Display the legend */}
					<Legend />
				</PieChart>
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
