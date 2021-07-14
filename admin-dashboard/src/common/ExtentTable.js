import React from 'react';
import {
    TextField,
    Button,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableHead, TableRow,
    TableContainer,
    Paper
} from '@material-ui/core';

const ExtentTable = ({ handleAddExtent,
    newExtent,
    handleExtent,
    extent,
    removeExtent }) => {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <TextField
                    style={{ marginLeft: '1rem' }}
                    value={newExtent.name}
                    type="text"
                    name='name'
                    onChange={handleExtent}
                    label="שם" variant="outlined"
                />
                <TextField
                    style={{ marginLeft: '1rem' }}
                    name="from"
                    type="number"
                    placeholder="מ"
                    value={newExtent.from} onChange={handleExtent}
                    label="מ" variant="outlined"
                />
                <Typography>-</Typography>
                <TextField

                    style={{ marginLeft: '1rem' }}
                    name="until"
                    type="number"
                    placeholder="עד"
                    value={newExtent.until} onChange={handleExtent}
                    label="עד" variant="outlined"
                />

                <Button variant='contained' onClick={handleAddExtent} style={{ marginRight: '1rem' }}>הוסף</Button>

            </div>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>שם</TableCell>
                            <TableCell>מידה</TableCell>
                            <TableCell ></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {extent.map((ext, i) => (
                            <TableRow key={i}>
                                <TableCell component="th" scope="row">
                                    {ext.name}
                                </TableCell>
                                <TableCell >{ext.from}-{ext.until}</TableCell>
                                <TableCell >
                                    <Button variant='contained' onClick={() => removeExtent(i)}>מחק</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default ExtentTable