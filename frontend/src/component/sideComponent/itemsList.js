import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import CostumeCard from '../sideComponent/costumeCard'
import { actionMouseOut, actionMouseOver, addToWishList, removeFromWishList, actionWishList, initItem } from '../../actions';


const ItemsList = ({ allItems, loading, wishList }) => {

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        console.log(wishList)
    })
    const handleWishList = (item) => {
        console.log(item._id)
        if (!wishList.includes(item._id)) {
            dispatch(addToWishList(item._id))
        } else {
            dispatch(removeFromWishList(item._id))
        }
    }
    const handleMouseOver = (id) => dispatch(actionMouseOver(id))

    const handleMouseOut = (id) => dispatch(actionMouseOut(id));

    const handleAdd = (item) => {
        dispatch(initItem(item))
        history.push("/add")
    }
    if (loading) {
        return <CircularProgress />
    } else {
        return (
            <Grid
                container
                spacing={10}
                style={{ marginTop: '1%', padding: '4% 7% 4% 7%', textAlign: 'center' }}>
                {allItems.map(item => {
                    return <Grid
                        style={{ padding: '1rem' }}
                        key={item._id}
                        item
                        xs={6} sm={6} md={6} lg={3} xl={3}>
                        <CostumeCard
                            sale={item.newPrice !== null && item.newPrice !== undefined}
                            onMouseOut={() => handleMouseOut(item._id)}
                            onMousesOver={() => handleMouseOver(item._id)}
                            id={item._id}
                            newPrice={item.newPrice}
                            image={item.images[item.currentImage]}
                            name={item.name} description={item.description}
                            price={item.price}
                            color={wishList.includes(item._id)}
                            handleWish={() => handleWishList(item)}
                            handleAdd={() => handleAdd(item)}
                        />
                        <Button onClick={() => console.log(item)}>sfknkfs;</Button>
                    </Grid>
                })}
            </Grid>
        )
    }


}

export default ItemsList