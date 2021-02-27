import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Typography from '@material-ui/core/Typography';
import Moment from 'react-moment';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	alignCenter: {
		textAlign: 'left',
		padding: '10px',
		color: 'darkblue',
	},
}));

export const PurchaseorderCard = ({ purchaseorder }) => {
	const classes = useStyles();

	return (
		<div>
			<TableContainer>
				<Typography variant='subtitle2' className={classes.alignCenter}>
					Purchase orders for this material:
				</Typography>
				<Table aria-label='Purchase order table'>
					<TableHead>
						<TableRow>
							<TableCell align='right'>PO Number:</TableCell>
							<TableCell align='right'> PO Date </TableCell>
							<TableCell align='right'>Vendor</TableCell>
							<TableCell align='right'>PO Qty</TableCell>
							<TableCell align='right'>PO UOM</TableCell>
							<TableCell align='right'>PO Price</TableCell>
							<TableCell align='right'>PO Currency</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{purchaseorder.map((row) => (
							<TableRow key={row._id}>
								<TableCell align='right'>{row['po-number']}</TableCell>
								<TableCell align='right'>
									<Moment format='YYYY/MM/DD' date={row['po-date']} />
								</TableCell>
								<TableCell align='right'>{row['vendor-name']}</TableCell>
								<TableCell align='right'>{row['po-qty']}</TableCell>
								<TableCell align='right'>{row['po-uom']}</TableCell>
								<TableCell align='right'>{row['po-price']}</TableCell>
								<TableCell align='right'>{row['po-currency']}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};
