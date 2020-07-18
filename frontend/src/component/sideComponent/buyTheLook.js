import React from 'react';
import Grid from '@material-ui/core/Grid';
import StandardCard from './standardCard';
const BuyTheLook = () => {



    return (
        <Grid container spacing={10}>
            <Grid
                item
                xs={12} sm={6} md={4} lg={3} xl={3}>
                <StandardCard src='https://images.unsplash.com/photo-1573935146153-f6322e84d1e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' />
            </Grid>
            <Grid
                item
                xs={12} sm={6} md={4} lg={3} xl={3}>
                <StandardCard src='https://images.unsplash.com/photo-1573935146153-f6322e84d1e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' />
            </Grid>

        </Grid>
    )
}

export default BuyTheLook;