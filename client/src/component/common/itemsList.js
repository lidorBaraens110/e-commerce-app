import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import ItemCard from '../common/ItemCard';

const useStyle = makeStyles(theme => ({
    grid: {
        maxWidth: '100%',
        margin: '0',
        width: '100%',
        padding: '1rem',
        [theme.breakpoints.down('xs')]: {
            padding: 0
        }
    }
}))
const ItemsList = ({ items, handleClick, handleWishList }) => {

    const classes = useStyle()
    return (
        <Grid
            container
            spacing={3}
            className={classes.grid}>
            {items.map((item, i) => {
                return <Grid
                    item
                    key={i}
                    xs={6} sm={6} md={6} lg={3} xl={3}>
                    <ItemCard name={item.name}
                        colors={item.oneSize.colors}
                        initialColor={Object.keys(item.oneSize.colors)[0]}
                        discount={item.discount}
                        index={i}
                        onClick={handleClick}
                        id={item._id}
                        price={item.price}
                        handleWishList={() => handleWishList(item._id)}
                        wishListState={item.wishList}
                    />
                </Grid>
            })}
        </Grid>
    )
}

export default ItemsList