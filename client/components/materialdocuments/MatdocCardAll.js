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

export const MatdocCard = ({ matdocs }) => {
	const classes = useStyles();

	const  clean = (obj) => {
		for (var propName in obj) {
		  if (obj[propName] === null || obj[propName] === undefined || obj[propName] === "" || obj[propName] === "0") {
			delete obj[propName]
		  }
		  
		}	
		return obj
	  }

	return (
		<div>
			<TableContainer>
				<Typography variant='subtitle2' className={classes.alignCenter}>
					Complete list of Transaction documents.
				</Typography>
				<Table aria-label='Material docs table'>
					<TableHead>
						<TableRow>
							<StyledTableCell align='right'> Doc Date </StyledTableCell>
							<StyledTableCell align='right'> Plant Code</StyledTableCell>
							
							<StyledTableCell align='right'>Doc Number:</StyledTableCell>							
							<StyledTableCell align='right'>Doc Item No:</StyledTableCell>
							<StyledTableCell align='right'> Material code</StyledTableCell>
							<StyledTableCell align='right'> Material text </StyledTableCell>
							<StyledTableCell align='right'>Doc Qty</StyledTableCell>
							<StyledTableCell align='right'>UOM</StyledTableCell>
							
							<StyledTableCell align='right'> Movement type </StyledTableCell>
							<StyledTableCell align='right'>Doc value in SAR</StyledTableCell>
							<StyledTableCell align='right'>Charged to: </StyledTableCell>

						</TableRow>
					</TableHead>

					<TableBody>
						{matdocs.map((row) => (
							<StyledTableRow key={row._id}>
								<StyledTableCell align='right'>
									<Moment format='YYYY/MM/DD' date={row['document-date']} />
								</StyledTableCell>
								<StyledTableCell align='right'>{row['plant-code']}</StyledTableCell>

								<StyledTableCell align='right'>{row['document-number']}</StyledTableCell>
								
								<StyledTableCell align='right'>{row['document-itemno']}</StyledTableCell>
								<StyledTableCell align='right'>{row['material-code']}</StyledTableCell>
								<StyledTableCell align='right'>{row['material-text']}</StyledTableCell>
								<StyledTableCell align='right'>{row['doc-qty']}</StyledTableCell>
								<StyledTableCell align='right'>{row['unit-of-measure']}</StyledTableCell>
								<StyledTableCell align='right'>{row['mvt-type']}</StyledTableCell>
								<StyledTableCell align='right'>{row['document-amount']}</StyledTableCell>
								<StyledTableCell align="right">{(clean(row["account"])[Object.keys(clean(row["account"]))[0]])}</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};
