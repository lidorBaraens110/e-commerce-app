import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {

        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: '0',
        boxShadow: 'none'
    },
    media: {
        height: '400px',

    },
});


export default function StandardCard({ style, image, name, remove, onMousesOver, description, price, id, onMouseOut, onClick }) {

    const classes = useStyles();

    return (
        <Card className={classes.root} style={style}>
            <CardMedia
                onMouseOver={onMousesOver}
                onMouseOut={onMouseOut}
                className={classes.media}
                image={image}
                title="Contemplative Reptile"
            />
            <CardContent style={{ padding: '0' }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    {remove && <div style={{ flex: '1' }}>

                    </div>
                    }
                    <Typography gutterBottom variant="h6" component="h2" style={{ padding: '0', margin: '0', flex: '1' }}>
                        {name}
                    </Typography>
                    {remove &&
                        <div style={{ textAlign: 'left', flex: '1' }}>
                            <Button onClick={onClick} >הסר</Button>
                        </div>
                    }
                </div>
                <Typography variant="body2" color="textSecondary" component="p">
                    {price} שח
                </Typography>
            </CardContent>
        </Card >
    );
}
