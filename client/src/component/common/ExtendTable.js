import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead, TableRow,
    TableContainer,
    Paper,
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        margin: '1rem'
    },
    tableContainer: {
        width: '70%', textAlign: 'center'
    },
    tableHeader: {
        fontWeight: 'bold'
    },

})

const ExtentTable = ({ extent }) => {

    const classes = useStyles();

    return (
        <div className={classes.container}>

            <TableContainer component={Paper} className={classes.tableContainer}>
                <Table aria-label="simple table" >
                    <TableHead>
                        <TableCell align='center' className={classes.tableHeader}>שם</TableCell>
                        <TableCell align='center' className={classes.tableHeader}>מידה</TableCell>
                    </TableHead>
                    <TableBody>
                        {extent.map((ext, i) => {
                            return <TableRow key={i}>
                                <TableCell align='center'>
                                    {ext.name}
                                </TableCell>
                                <TableCell align='center' component="th" scope="row">
                                    {ext.from} - {ext.until}
                                </TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default ExtentTable