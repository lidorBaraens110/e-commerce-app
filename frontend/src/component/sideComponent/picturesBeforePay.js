import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import FormRow from './formRowPicCash';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: '0 5% 2% 5%'
    },
    media: {
        height: 0,
        paddingTop: '56.25%'
    },
}));

const PicturesBeforePay = ({ items, onClick }) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.container}
            direction='row'
            justify='center'
            alignItems='center'
            spacing={10}  >
            {items.map(item => {
                return <FormRow key={item.id} onClick={() => onClick(item)} image={item.images[0]} name={item.name} price={item.price} />
            })}
        </Grid>

    );
}
export default PicturesBeforePay;