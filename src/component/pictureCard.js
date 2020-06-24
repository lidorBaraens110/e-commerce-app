import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: window.innerWidth,
        borderRadius: '0'
    },
    media: {
        minHeight: window.innerHeight * 0.55,
    },
});


export default function PictureCard({ src, lName, fName, price, onMouseOver, id, onClick }) {
    const classes = useStyles();

    return (
        <Card className={classes.root} style={{ boxShadow: 'none' }} >
            <CardMedia
                onMouseOver={() => onMouseOver(id)}
                className={classes.media}
                image={src}
                title="Contemplative Reptile"
            />
            <CardContent style={{ padding: '0' }}>
                <Typography gutterBottom variant="h6" component="h2" style={{ padding: '0', margin: '0' }}>
                    {fName} {lName}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {price}
                </Typography>
            </CardContent>
        </Card >
    );
}
