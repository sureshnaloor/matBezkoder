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

export const PurchaseorderCard = ({ purchaseorder }) => {
	const classes = useStyles();

	return (
		<div>
			<TableContainer>
				<Typography variant='subtitle2' className={classes.alignCenter}>
					Purchase orders so far issued for this project:
				</Typography>
				<Table aria-label='Purchase order table'>
					<TableHead>
						<TableRow>
							<StyledTableCell align='right'>PO Number:</StyledTableCell>
							<StyledTableCell align='right'> PO Date </StyledTableCell>
                            <StyledTableCell align='right'> Material Code </StyledTableCell>
                            <StyledTableCell align='right'> Material text </StyledTableCell>
							<StyledTableCell align='right'> Vendor code </StyledTableCell>
                            <StyledTableCell align='right'> Vendor name  </StyledTableCell>
							<StyledTableCell align='right'>PO Qty</StyledTableCell>
							<StyledTableCell align='right'>PO UOM</StyledTableCell>
							<StyledTableCell align='right'>PO Price</StyledTableCell>
							<StyledTableCell align='right'>PO Currency</StyledTableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{purchaseorder.map((row) => (
							<StyledTableRow key={row._id}>
								<StyledTableCell align='right'>{row['po-number']}</StyledTableCell>
								<StyledTableCell align='right'>
									<Moment format='YYYY/MM/DD' date={row['po-date']} />
								</StyledTableCell>
                                <StyledTableCell align='right'>{row['material']['material-code']}</StyledTableCell>
                                <StyledTableCell align='right'>{row['material']['short-text']}</StyledTableCell>
								<StyledTableCell align='right'>{row['vendor-code']}</StyledTableCell>
                                <StyledTableCell align='right'>{row['vendor-name']}</StyledTableCell>
								<StyledTableCell align='right'>{row['po-qty']}</StyledTableCell>
								<StyledTableCell align='right'>{row['po-uom']}</StyledTableCell>
								<StyledTableCell align='right'>{row['po-price']}</StyledTableCell>
								<StyledTableCell align='right'>{row['po-currency']}</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};
