import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
    root: {
        borderRadius: '0',
        boxShadow: 'none'
    },
    media: {
        height: '20rem',
        width: '15rem',
        objectFit: 'contain'
    },
});


export default function ItemCard({ name, avatarImage, discount, onClick, id
    , price }) {

    const classes = useStyles();

    return (
        <Card className={classes.root} style={{ padding: '0', margin: '0', borderRadius: 0 }}>
            <div style={{ position: 'relative' }}>
                <CardMedia
                    onClick={() => id && onClick(id)}
                    component='img'
                    onLoad={() => console.log('load')}
                    onError={() => console.log('erroe')}
                    className={classes.media}
                    image={avatarImage && avatarImage.url}
                    title="Contemplative Reptile"
                />
                <FavoriteIcon style={{ padding: '0', position: 'absolute', bottom: 3, right: 3 }} />
            </div>
            <CardContent style={{ padding: '0' }}>
                <div style={{ display: 'flex', flexDirection: 'row', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ flex: '1' }}>
                    </div>
                    <div>
                        <Typography gutterBottom variant="h6" component="h2"
                            style={{ padding: '0', margin: '0', flex: '1' }}>
                            {name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" style={{ textDecoration: discount.state && 'line-through' }}>
                            {price} ש"ח
                        </Typography>
                        {discount.state &&
                            <div style={{ height: '1.5rem' }}>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {discount.finalPrice} ש"ח
                        </Typography>
                            </div>
                        }

                    </div>
                    <div style={{ textAlign: 'left', flex: '1' }}>
                        {discount.state && <MonetizationOnOutlinedIcon size='3rem' style={{ color: 'red' }} color='red' />}

                    </div>
                </div>
            </CardContent>
        </Card >
    );
}
