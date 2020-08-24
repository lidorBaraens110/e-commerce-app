import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import StandardCard from '../sideComponent/standardCard';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { initItem, removeFromWishList, toggleHeart } from '../../actions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const WishList = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const wishListId = useSelector(state => state.items.wishList)
    const wishListItems = createSelector(state => state.items.items,
        items => items.filter(item => wishListId.includes(item._id)))
    const wishList = useSelector(wishListItems)
    const handleRemove = (item) => {
        console.log(item._id)
        dispatch(removeFromWishList(item._id))
        dispatch(toggleHeart(item))
    }
    useEffect(() => {
        wishListId.map(id => {
            console.log(id)
        })

        console.log(wishList)
    })


    const handleAddToCart = (item) => {
        dispatch(initItem(item))
        history.push("/add")
    }
    return (
        <div style={{ textAlign: 'center', paddingTop: '10%' }}>
            <header style={{ marginBottom: '5rem', paddingBottom: '5rem', borderBottom: 'solid black 1px' }}><h1>Wish List</h1></header>
            {wishList.length > 0 ?
                <Grid container
                    spacing={10}
                    style={{ padding: '0 7% 0 7%' }}>
                    {wishList.map(item => {
                        return (
                            <Grid item
                                key={item._id}
                                xs={12} s={12} md={3} lg={3} xl={3}>
                                <StandardCard
                                    key={item._id}
                                    // onMouseOver={handleMouseOver}
                                    // onMouseOut={handleMouseOut}
                                    id={item._id}
                                    image={item.images[item.currentImage]}
                                    name={item.name} description={item.description}
                                    price={item.price} remove onClick={() => handleRemove(item)} />
                                <div style={{ margin: '10% 0 10% 0' }}>
                                    <Button
                                        onClick={() => handleAddToCart(item)}
                                        color='default'
                                        variant='contained'
                                        fullWidth
                                        style={{ borderRadius: '0', color: 'white', backgroundColor: 'black' }}
                                    >
                                        הוספה לסל
                                </Button>

                                </div>

                            </Grid>
                        )
                    })}
                </Grid>
                : <div style={{ padding: '8%' }}><h3>רשימת המשאלות ריקה...</h3></div>}
        </div >
    )
}

export default WishList;