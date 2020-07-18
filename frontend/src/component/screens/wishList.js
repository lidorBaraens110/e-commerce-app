import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import StandardCard from '../sideComponent/standardCard';
import { useSelector } from 'react-redux';
import { addToCart, removeFromWishList, toggleHeart } from '../../actions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
const WishList = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.items.wishList)

    const handleRemove = (item) => {
        dispatch(removeFromWishList(item.id))
        dispatch(toggleHeart(item))
    }

    return (
        <div style={{ textAlign: 'center', paddingTop: '10%' }}>
            <header style={{ marginBottom: '5rem', paddingBottom: '5rem', borderBottom: 'solid black 1px' }}><h1>Wish List</h1></header>
            {items.length > 0 ?
                <Grid container
                    spacing={10}
                    style={{ padding: '0 7% 0 7%' }}>
                    {items.map(item => {
                        return (
                            <Grid item
                                key={item.id}
                                xs={12} s={12} md={3} lg={3} xl={3}>
                                <StandardCard
                                    key={item.id}
                                    // onMouseOver={handleMouseOver}
                                    // onMouseOut={handleMouseOut}
                                    id={item.id}
                                    image={item.images[item.currentImage]}
                                    name={item.name} description={item.description}
                                    price={item.price} remove onClick={() => handleRemove(item)} />
                                <div style={{ margin: '10% 0 10% 0' }}>

                                    <Link to={{ pathname: '/add', state: item }}>

                                        <Button
                                            color='default'
                                            variant='contained'
                                            fullWidth
                                            style={{ borderRadius: '0', color: 'white', backgroundColor: 'black' }}
                                        >
                                            הוספה לסל
                        </Button>
                                    </Link>
                                </div>
                            </Grid>
                        )
                    })}
                </Grid>
                : <div style={{ padding: '8%' }}><h3>רשימת המשאלות ריקה...</h3></div>}
        </div>
    )
}

export default WishList;