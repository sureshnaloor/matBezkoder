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
	const [topstk, setTopstk] = useState([])
	const [specialstk, setSpecialstk] = useState([])
	const [wbsTop, setWbsTop] = useState([])

	useEffect(() => {		
        fetchStkval()
		fetchTopStk()
		fetchSpecialStkratio()
		fetchWbsTop5()
    }, []);		

	const fetchStkval = async () => {
		const result = await axios(
			'http://localhost:5000/api/completestock/plant/sum'
		);

		await setStock(result.data);		
		console.log(result.data);
	};

	const fetchTopStk = async () => {
		const result = await axios('http://localhost:5000/api/completestock/top20')
		await setTopstk(result.data)
		console.log(result.data)
	}

	const fetchSpecialStkratio = async () => {
		const result = await axios('http://localhost:5000/api/specialstock/stockindicator/sum')
		await setSpecialstk(result.data)
	}

	const fetchWbsTop5 = async () => {
		const result = await axios("http://localhost:5000/api/specialstock/wbs/sum")
		await setWbsTop(result.data)
	}

	const data = [];
	stock.map((stk) => {
		data.push({
			plantcode: stk._id,
			inventory: parseInt(stk.plantTotal.$numberDecimal),
		});
	})

	// const dataAll = data[0].inventory+data[1].inventory
	const compInv = (data[0]?.inventory + data[1]?.inventory)


	const datastk = []
	topstk.map((stk) => {
		datastk.push({
			materialcode: stk['material-code'],
			stockvalue: parseInt(stk["current-stkval"]),
		});
	})

	const dataSpecial = []
	specialstk.map((stk) => {
		dataSpecial.push({
			stockInd: stk._id,
			inventory:parseInt(stk.specialStkTotal.$numberDecimal)
		})
	})	

	const wbsTopStk = []
	wbsTop.slice(0,10).map(stk => {
		wbsTopStk.push({
			stockInd: stk._id,
			inventory: parseInt(stk.wbsTotal.$numberDecimal)
		})
	})

	const spInv = dataSpecial[0]?.inventory + dataSpecial[1]?.inventory

	dataSpecial.push({
		stockInd: 'Others',
		inventory: compInv - spInv
	})

	const CustomTooltip = ({ active, payload, nameKey }) => {
		if (active) {
			return (
				<div className="custom-tooltip">
					<p className="label">{`SAR  ${payload[0].value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`}</p>
					
					<p className="desc">Inventory Value in SAR.</p>
				</div>
			);
		}
		return null;
	};

	const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];	
	const barColors = ["#457DEE", "#8B9FC8", "#ECEEF3", "#46474A", "#37CEE7", "#72999F","#34F2C1", "#5D8A7F", "#61D578",
	"#92F217", "#999E92", "#D8E40C", "#F1C612", "#F2A829", "#F28129", "#ED3818", "#ED1888", "#7418ED", "#6F6C73"]
	
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
					<Tooltip content={<CustomTooltip />} />
					{/* Display the legend */}
					<Legend />
				</PieChart>
			</div>


			<div className='grid2'>
				<h3> Top 20 Materials By Inventory Value</h3>
				<BarChart width={500} height={250} data={datastk}>
					<XAxis dataKey='materialcode' />
					<YAxis dataKey='stockvalue'  />
					<Tooltip />
        			<Legend />
					<Bar dataKey='stockvalue' fill="#EE456F" stroke="#000000"
                    strokeWidth={1} >
						{
							datastk.map((entry, index)=> (
								<Cell key={`cell-${index}`} fill={barColors[index % 20]} />
							))
						}
					</Bar>
				</BarChart>
			</div>

			<div className='grid3'>
				<h3> Special stock Vs Unrestricted stock status</h3>
				<BarChart width={500} height={250} data={dataSpecial}>
					<XAxis dataKey='stockInd' />
					<YAxis dataKey='inventory' />
					<Tooltip />
					<Legend />
					<Bar dataKey='inventory' fill="#999E92" />
				</BarChart>
			</div>

			<div className='grid4'>
				<h3> Top Project inventory</h3>
				<BarChart width={500} height={250} data={wbsTopStk}>
					<XAxis dataKey='stockInd' />
					<YAxis dataKey='inventory' />
					<Bar dataKey='inventory' fill="#999E92">
					{
							datastk.map((entry, index)=> (
								<Cell key={`cell-${index}`} fill={barColors[index % 20]} />
							))
						}
					</Bar>
					<Tooltip />
					<Legend />
				</BarChart>
			</div>

		</div>
	);
};
