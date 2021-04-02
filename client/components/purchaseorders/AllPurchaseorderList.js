import React from 'react';
// import { CSVLink } from 'react-csv';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import Moment from 'react-moment';

import { makeStyles } from '@material-ui/core/styles';
import {withStyles} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	alignCenter: {
		textAlign: 'left',
		padding: '10px',
		color: 'darkblue',
	},
}));

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.skyblue,
        color: theme.palette.common.brown,
    },
    body: {
        fontSize: 12,
    }
}))(TableCell)

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        }
    }
}))(TableRow)

export const Purchaseorder = ({ purchases }) => {
	const classes = useStyles();

	const  clean = (obj) => {
		for (var propName in obj) {
		  if (obj[propName] === null || obj[propName] === undefined || obj[propName] === "" || obj[propName] === "0") {
			delete obj[propName]
		  }
		  
		}	
		return obj
	  }

	const fileType =
		'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
	const fileExtension = '.xlsx';

	const exportToCSV = (csvData, fileName) => {
		const ws = XLSX.utils.json_to_sheet(csvData);
		const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
		const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
		const data = new Blob([excelBuffer], { type: fileType });
		FileSaver.saveAs(data, fileName + fileExtension);
	};

	return (
		<div>
			<br />
			{/* <Button color='primary' variant='contained' component='span'>
				{' '}
				<CSVLink data={purchases} filename="purchases.xls">Save as EXCEL </CSVLink>{' '}
			</Button> */}

			<Button
				variant='contained'
				color='primary'
				component='span'
				onClick={(e) => exportToCSV(purchases, 'purchases')}
			>
				
				export
			</Button>
			<TableContainer>
				<Table aria-label='Purchase order table'>
					<TableHead>
						<TableRow>
							<StyledTableCell align='right'>PO Number:</StyledTableCell>
							<StyledTableCell align='right'> PO Line item: </StyledTableCell>
							<StyledTableCell align='right'> PO Date </StyledTableCell>
							<StyledTableCell align='right'> Vendor code: </StyledTableCell>
							<StyledTableCell align='right'>Vendor Name</StyledTableCell>
							<StyledTableCell align='right'> Material code </StyledTableCell>
							<StyledTableCell align='right'> Material desc: </StyledTableCell>
							<StyledTableCell align='right'>PO Qty</StyledTableCell>
							<StyledTableCell align='right'>PO UOM</StyledTableCell>
							<StyledTableCell align='right'>PO Price</StyledTableCell>
							<StyledTableCell align='right'>PO Currency</StyledTableCell>
							<StyledTableCell align='right'> Charged to: </StyledTableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{purchases.map((row) => (
							<StyledTableRow key={row._id}>
								<StyledTableCell align='right'>
									{row['po-number']}
								</StyledTableCell>
								<StyledTableCell align='right'>
									{row['po-line-item']}
								</StyledTableCell>
								<StyledTableCell align='right'>
									<Moment format='YYYY/MM/DD' date={row['po-date']} />
								</StyledTableCell>
								<StyledTableCell align='right'>
									{row['vendor-code']}
								</StyledTableCell>
								<StyledTableCell align='right'>
									{row['vendor-name']}
								</StyledTableCell>
								<StyledTableCell align='right'>
									{row['material']['material-code']}
								</StyledTableCell>
								<StyledTableCell align='right'>
									{row['material']['short-text']}
								</StyledTableCell>
								<StyledTableCell align='right'>{row['po-qty']}</StyledTableCell>
								<StyledTableCell align='right'>{row['po-uom']}</StyledTableCell>
								<StyledTableCell align='right'>
									{row['po-price']}
								</StyledTableCell>
								<StyledTableCell align='right'>
									{row['po-currency']}
								</StyledTableCell>
								<StyledTableCell align='right'>
									{clean(row['account'])[Object.keys(clean(row['account']))[0]]}
								</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};