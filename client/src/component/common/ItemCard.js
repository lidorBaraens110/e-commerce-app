import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DefaultImage from '../../assets/Mono.jpg';
import ControlImages from './controlImages';

const useStyles = makeStyles(theme => ({
    root: {
        boxShadow: 'none',
        position: 'relative',
        padding: '0', margin: '0', borderRadius: 0, backgroundColor: 'transparent'
    },
    media: {
        cursor: 'pointer',
        height: '100%', width: '100%',
        objectFit: 'contain',
    },
    relative: {
        position: 'relative'
    },
    wishListIcon: {
        padding: '0', position: 'absolute', bottom: 3, left: 3, cursor: 'pointer',
        fontSize: '1.5rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.8rem'
        }

    },
    cardContent: {
        padding: '0', display: 'flex', flexDirection: 'row', textAlign: 'left', justifyContent: 'center', alignItems: 'center',
    },
    divContent: {
        textOverflow: 'ellipsis', overflow: 'hidden', width: '100%'
    },
    discountIcon: {
        textAlign: 'left', flex: '1'
    },
    name: {
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    price: {
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.8rem'
        }
    }
}));


export default function ItemCard({ name, avatarImage, discount, onClick, id, index, handleWishList,
    wishListState, price, colors, initialColor }) {

    const [imageState, setImageState] = useState(false);
    const [currentColor, setCurrentColor] = useState(initialColor);

    const handleClickColor = (color) => {
        setCurrentColor(color)
    }
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <div className={classes.relative}>
                <CardMedia
                    onClick={() => id && onClick(id)}
                    component='img'
                    onLoad={() => setImageState(true)}
                    onError={() => console.log('notLoaded')}
                    className={classes.media}
                    style={{ display: !imageState && 'none' }}
                    image={currentColor && colors[currentColor].images[0].url}
                    title="Contemplative Reptile"
                />
                <CardMedia
                    onClick={() => id && onClick(id)}
                    component='img'
                    className={classes.media}
                    style={{ display: imageState && 'none' }}
                    image={DefaultImage}
                    title="Contemplative Reptile"
                />
                <FavoriteIcon style={{ color: wishListState && 'red' }} className={classes.wishListIcon} onClick={handleWishList} />
            </div>
            <CardContent className={classes.cardContent}>
                <div className={classes.divContent}>
                    <Typography noWrap className={classes.name}>
                        {name}
                    </Typography>
                    <Typography className={classes.price}
                        variant="body2" color="textSecondary" component="p" style={{ textDecoration: discount.state && 'line-through' }}>
                        {price} ש"ח
                    </Typography>
                    {discount.state &&
                        <div >
                            <Typography variant="body2" color="textSecondary" component="p">
                                {discount.finalPrice} ש"ח
                            </Typography>
                        </div>
                    }
                </div>
                <div className={classes.discountIcon}>
                    {discount.state &&
                        <MonetizationOnOutlinedIcon size='3rem' style={{ color: 'red' }} color='red' />}
                </div>
            </CardContent>
            <ControlImages handleClickColor={handleClickColor} currentColor={currentColor} colors={colors} />

        </Card >
    );
}
