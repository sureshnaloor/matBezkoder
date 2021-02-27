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

export const MatdocCard = ({ matdocs }) => {
	const classes = useStyles();

	return (
		<div>
			<TableContainer>
				<Typography variant='subtitle2' className={classes.alignCenter}>
					Transactions for this material:
				</Typography>
				<Table aria-label='Material docs table'>
					<TableHead>
						<TableRow>
							<TableCell align='right'>Doc Number:</TableCell>
							<TableCell align='right'> Doc Date </TableCell>
							<TableCell align='right'>Doc Item No:</TableCell>
							<TableCell align='right'>Doc Qty</TableCell>
							<TableCell align='right'>UOM</TableCell>
							<TableCell align='right'>Doc value in SAR</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{matdocs.map((row) => (
							<TableRow key={row._id}>
								<TableCell align='right'>{row['document-number']}</TableCell>
								<TableCell align='right'>
									<Moment format='YYYY/MM/DD' date={row['document-date']} />
								</TableCell>
								<TableCell align='right'>{row['document-itemno']}</TableCell>
								<TableCell align='right'>{row['doc-qty']}</TableCell>
								<TableCell align='right'>{row['unit-of-measure']}</TableCell>
								<TableCell align='right'>{row['document-amount']}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};
