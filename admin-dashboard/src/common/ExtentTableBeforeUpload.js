import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead, TableRow,
    TableContainer,
    Paper
} from '@material-ui/core';

const ExtentTable = ({
    extent,
}) => {
    return (
        <>

            <TableContainer component={Paper} style={{ padding: '4rem' }}>
                <Table aria-label="simple table" >
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontWeight: 'bold' }}>שם</TableCell>
                            {extent.map((ext, i) => {
                                return <TableCell key={i}>
                                    {ext.name}
                                </TableCell>
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell style={{ fontWeight: 'bold' }}>מידה</TableCell>
                            {extent.map((ext, i) => {
                                return <TableCell key={i} component="th" scope="row">
                                    {ext.from} - {ext.until}
                                </TableCell>
                            })}
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default ExtentTable