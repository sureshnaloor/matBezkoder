import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import {Grid, withStyles} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';

import Moment from 'react-moment';

import { makeStyles } from '@material-ui/core/styles';

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


const useStyles = makeStyles((theme) => ({
	
    grid: {
		width: '100%',
		margin: '0px',
		backgroundColor: '#f2f5f7',
		paddingBottom: '10px',
		marginBottom: '10px',
    },
         
}));

const ProjectsCardFull = ({projects,setActiveProject,currentProject,searchProjectname,
    findByProjectname,onChangeSearchProjectname}) => {
    const classes = useStyles();

    return (<div>
        <Grid container spacing={1} className={classes.grid}>
				<Grid item xs={7} md={7} >
    <TableContainer>
        
        <Table aria-label='Projects table' >
            <TableHead > 
                <TableRow >
                    
                    <StyledTableCell align='right' > Project wbs: </StyledTableCell>
                    <StyledTableCell align='right'> Project name: </StyledTableCell>
                    <StyledTableCell align='right'> project in-charge: </StyledTableCell>
                    <StyledTableCell align='right'>  Created date: </StyledTableCell>
                    <StyledTableCell align='right'> Changed date: </StyledTableCell>
                    
                </TableRow>
                
            </TableHead>

            <TableBody>
                
                {projects.map((row) => (
                                       
                    <StyledTableRow key={row._id}>
                        
                        <StyledTableCell align='right'>{row['project-wbs']}</StyledTableCell>
                        
                        <StyledTableCell align='right'>{row['project-name']}</StyledTableCell>
                        <StyledTableCell align='right'>{row['project-incharge']}</StyledTableCell>
                        
                        <StyledTableCell align='right'>
                            <Moment format='YYYY/MM/DD' date={row['created-date']} />
                        </StyledTableCell>
                        <StyledTableCell align='right'>
                            <Moment format='YYYY/MM/DD' date={row['changed-date']} />
                        </StyledTableCell>
                        
                    </StyledTableRow>                    
                )                
                )}               
                
            </TableBody>
        </Table>
    </TableContainer>
    </Grid>
    </Grid>
</div>
);
}

export default ProjectsCardFull
