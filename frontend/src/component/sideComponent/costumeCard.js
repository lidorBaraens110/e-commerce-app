import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import { FaShoppingBag } from 'react-icons/fa';
import StandardCard from './standardCard';

const useStyles = makeStyles({
    root: {

        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: '0',
        boxShadow: 'none'
    }
});


export default function CustomCard({ state, color, style, handleWish
    , image, name, remove, onMousesOver, description, price, id, onMouseOut, onClick }) {
    const classes = useStyles();

    return (
        <Card className={classes.root} style={style}>
            <StandardCard image={image} style={style} name={name} remove={remove} onMouseOut={onMouseOut}
                onMousesOver={onMousesOver} description={description} price={price}
                id={id} onClick={onClick}
            />
            <CardActions style={{ padding: '0', display: 'flex', justifyContent: 'space-between', marginTop: '0' }} >
                <IconButton onClick={handleWish}
                    style={{ color: color && 'red' }} aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <Link style={{ padding: '0' }}
                    to={{
                        pathname: "/add",
                        state: { state }
                    }}>
                    <IconButton>
                        <FaShoppingBag size={20} />
                    </IconButton>
                </Link>
            </CardActions>
        </Card >
    );
}
