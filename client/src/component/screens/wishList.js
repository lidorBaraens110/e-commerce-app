import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { removeFromWishList } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ItemList from '../common/itemsList'
import axios from 'axios';
import { Typography, CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    container: { textAlign: 'center' },
    header: { margin: '3rem', fontSize: '2rem', fontWeight: 600, color: '#030303' },
})

const WishList = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const history = useHistory();
    const wishList = useSelector(state => state.wishList);
    const [itemList, setItemList] = useState([]);
    const [load, setLoad] = useState(false)

    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await axios.post('http://localhost:5000/api/getManyByIds', wishList)
                setItemList(data.map(item => {
                    return { ...item, wishList: true }
                }))
                setLoad(true)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData()
    }, [wishList])

    const handleWishList = (id) => {
        setLoad(false)
        dispatch(removeFromWishList(id))

    }

    const navigateToItemPage = (id) => {
        history.push(`/add/${id}`)
    }


    return (
        <div className={classes.container}>
            <Typography className={classes.header}>Wish List</Typography>
            {load ? wishList.length > 0 ?
                <ItemList items={itemList} handleClick={navigateToItemPage} handleWishList={handleWishList} />
                : <Typography>רשימת המשאלות ריקה</Typography>
                : <CircularProgress />}
        </div >
    )
}

export default WishList;