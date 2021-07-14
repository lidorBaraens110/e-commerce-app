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

const OrderTable = () => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell style={{ textAlign: 'center' }}>מספר הזמנה</TableCell>
                        <TableCell style={{ textAlign: 'center' }}>שם המזמין</TableCell>
                        <TableCell style={{ textAlign: 'center' }}>כתובת</TableCell>
                        <TableCell style={{ textAlign: 'center' }}>טלפון</TableCell>
                        <TableCell style={{ textAlign: 'center' }}>מייל</TableCell>
                        <TableCell style={{ textAlign: 'center' }}>מה הוא הזמין</TableCell>
                        <TableCell style={{ textAlign: 'center' }}>מחיר סופי</TableCell>
                        <TableCell style={{ textAlign: 'center' }}>מצב הזמנה</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.map((order, i) => {
                        return <TableRow key={i}>
                            <TableCell>
                                {order.number}
                            </TableCell>
                            <TableCell>
                                {order.name}
                            </TableCell>
                            <TableCell>
                                {order.city} ,{order.street},{order.streetNumber}
                            </TableCell>
                            <TableCell>
                                {order.phone}
                            </TableCell>
                            <TableCell>
                                {order.email}
                            </TableCell>
                            <TableCell>
                                {order.items.length}
                            </TableCell>
                            <TableCell>
                                {order.totalSum}
                            </TableCell>
                            <TableCell>
                                {order.orderState}
                            </TableCell>

                        </TableRow>
                    })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default OrderTable;