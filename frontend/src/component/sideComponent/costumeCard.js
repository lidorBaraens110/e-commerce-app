import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
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


export default function CustomCard({ sale, newPrice, handleAdd, color, style, handleWish
    , image, name, remove, onMousesOver, description, price, id, onMouseOut, onClick }) {
    const classes = useStyles();

    return (
        <Card className={classes.root} style={style}>
            <StandardCard sale={sale} image={image}
                style={style} name={name} remove={remove} onMouseOut={onMouseOut}
                newPrice={newPrice}
                onMousesOver={onMousesOver} description={description} price={price}
                id={id} onClick={onClick}
            />
            <CardActions style={{ padding: '0', display: 'flex', justifyContent: 'space-between', margin: '0' }} >
                <IconButton style={{ padding: sale ? '0' : '1.5rem' }} onClick={handleWish}
                    aria-label="add to favorites">
                    <FavoriteIcon style={{
                        padding: '0',
                        color: color === true ? 'red' : 'none'
                    }} />
                </IconButton>
                <IconButton onClick={handleAdd} style={{ margin: '0', padding: '0' }}>
                    <FaShoppingBag size={20} style={{ padding: '0' }} />
                </IconButton>
            </CardActions>
        </Card>
    );
}
