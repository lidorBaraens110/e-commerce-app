import React from 'react';
import { Grid, makeStyles, useTheme, useMediaQuery, Paper } from '@material-ui/core';
import ItemCard from '../common/ItemCard';

const useStyle = makeStyles(theme => ({
    container: {
        maxWidth: '100%',
        margin: '0',
        width: '100%',
        flexGrow: 1,
        padding: 15,
        padding: '1rem',
        [theme.breakpoints.down('xs')]: {
            padding: 6
        }
    }
}))
const ItemsList = ({ items, handleClick, handleWishList }) => {
    const theme = useTheme();
    const mobileView = useMediaQuery(theme.breakpoints.down('xs'))
    const classes = useStyle()
    return (
        <Grid
            container
            spacing={mobileView ? 2 : 5}
            className={classes.container}>
            {items.map((item, i) => {
                return <Grid
                    className={classes.grid}
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
                        handleWishList={() => handleWishList(item._id, i)}
                        wishListState={item.wishList}
                    />
                </Grid>
            })}
        </Grid>
    )
}

export default ItemsList