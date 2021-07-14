import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import PreviewCard from './PreviewCard';

const useStyle = makeStyles({
    grid: { maxWidth: '100%', margin: '0', width: '100%', padding: '1rem' }
})
const PreviewList = () => {

    const classes = useStyle()
    return (
        <Grid
            container
            spacing={3}
            className={classes.grid}>
            {[...Array(4)].map((x, i) => {
                return <Grid
                    item
                    key={i}
                    xs={6} sm={6} md={6} lg={3} xl={3}>
                    <PreviewCard />
                </Grid>
            })}
        </Grid>
    )
}

export default PreviewList