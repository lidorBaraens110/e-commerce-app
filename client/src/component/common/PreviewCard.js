import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import DefaultImage from '../../assets/Mono.jpg'

const useStyles = makeStyles({
    root: {
        borderRadius: '0',
        boxShadow: 'none',
        position: 'relative',
        padding: '0',
        margin: '0',
        backgroundColor: 'transparent'
    },
    media: {
        cursor: 'pointer',
        height: '100%', width: '100%',
        objectFit: 'contain',
    },
    cardContent: {
        textAlign: 'right'
    },
    Typography: {
        backgroundColor: '#d3d3d3', color: '#d3d3d3'
    }
});


export default function PreviewCard() {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia
                component='img'
                className={classes.media}
                image={DefaultImage}
                title="Contemplative Reptile"
            />
            <CardContent className={classes.cardContent}>

                <Typography gutterBottom className={classes.Typography}>
                    defaultName
                </Typography>

                <Typography variant="body2" color="textSecondary" className={classes.Typography}>
                    price
                </Typography>
            </CardContent>
        </Card >
    );
}
