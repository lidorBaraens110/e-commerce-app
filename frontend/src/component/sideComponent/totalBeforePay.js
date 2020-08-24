import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: '5%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottom: 'solid black 1px',
        paddingTop: '4rem'

    }
}));

const TotalPay = ({ cartItems }) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.container}
            spacing={5}>
            <Grid item
                xs={6} s={6} m={6} lg={6} xl={6} style={{ textAlign: 'right', alignItems: 'center' }}>
                <h3 style={{ fontWeight: '500' }}>סך הכל</h3>
                <p>כולל מע"מ 108 ש"ח</p>

            </Grid>
            <Grid item
                xs={6} s={6} m={6} lg={6} xl={6} style={{ textAlign: 'left' }}>
                <p>{cartItems.reduce((sum, item) => {
                    return sum + item.price * item.countSelected
                }, 0)}</p>
            </Grid>
        </Grid>
    );
}
export default TotalPay;