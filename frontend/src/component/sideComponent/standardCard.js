import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import { FaSalesforce } from 'react-icons/fa'
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


export default function StandardCard({ newPrice, image, name, remove,
    sale, onMousesOver, description, price, id, onMouseOut, onClick }) {

    const classes = useStyles();

    return (
        <Card className={classes.root} style={{ padding: '0', margin: '0' }}>
            <CardMedia
                component='img'
                onMouseOver={onMousesOver}
                onMouseOut={onMouseOut}
                className={classes.media}
                image={image}
                title="Contemplative Reptile"
            />
            <CardContent style={{ padding: '0' }}>
                <div style={{ display: 'flex', flexDirection: 'row', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ flex: '1' }}>

                    </div>
                    <div>
                        <Typography gutterBottom variant="h6" component="h2"
                            style={{ padding: '0', margin: '0', flex: '1' }}>
                            {name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" style={{ textDecoration: sale && 'line-through' }}>
                            {price} שח
                </Typography>
                        {sale &&
                            <div style={{ height: '1.5rem' }}>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {newPrice} שח
                        </Typography>
                            </div>
                        }

                    </div>
                    <div style={{ textAlign: 'left', flex: '1' }}>
                        {sale && <MonetizationOnOutlinedIcon size='3rem' style={{ color: 'red' }} color='red' />}
                        {remove && <Button onClick={onClick} >הסר</Button>}
                    </div>
                </div>
            </CardContent>
        </Card >
    );
}
