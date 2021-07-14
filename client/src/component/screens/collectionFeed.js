import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SortClothe from '../common/sortClothe';
import ItemsList from '../common/itemsList';

import { useHistory, useParams } from 'react-router-dom';
import { addToWishList, removeFromWishList } from '../../redux/actions'
import axios from 'axios';
import { Typography, useTheme, useMediaQuery, makeStyles } from '@material-ui/core';
import PreviewList from '../common/PreviewList'
import Paging from '../common/Paging';


const backEnd = process.env.REACT_APP_BACKEND

const useStyles = makeStyles({
    container: { textAlign: 'center' },
    mobileHeader: { margin: '3rem', fontSize: '2rem', fontWeight: 600, color: '#030303' },
    header: { fontSize: '1rem', fontWeight: 500, color: '#030303', padding: '0.1rem' },
    itemsContainer: { display: 'flex', justifyContent: 'center' },
    emptyItems: { padding: '5rem', fontSize: '1.5rem' }
})
function CollectionFeed() {
    const classes = useStyles();
    const history = useHistory();
    const { id } = useParams();
    const dispatch = useDispatch();
    const theme = useTheme()
    const mobileView = useMediaQuery(theme.breakpoints.down('xs'))
    const wishList = useSelector(state => state.wishList);
    const [sort, setSort] = useState('date');
    const [loading, setLoading] = useState(true);
    // const [currentPage, setCurrentPage] = useState(1);
    const [currentItems, setCurrentItems] = useState([])
    const [items, setItems] = useState([])
    const itemsPerPage = 2;

    useEffect(() => {
        const fetchData = async () => {
            setLoading(false)
            if (id === 'new Collection') {
                try {
                    const { data } = await axios.get(`${backEnd}/api/getNewCollectionItems`)
                    const items = data.map(item => {
                        const added = wishList.find(id => id === item._id)
                        if (added) {
                            return { ...item, wishList: true }
                        } return { ...item, wishList: false }
                    })

                    setItems(items)
                    setCurrentItems(items.filter((item, i) => i < itemsPerPage))
                    setLoading(true)
                    // setCurrentPage(1)
                } catch (err) {
                    console.log(err)
                }
            }
            else {
                try {
                    const { data } = await axios.get(`${backEnd}/api/getItemsByType/${id}`)
                    const items = data.map(item => {
                        const added = wishList.find(id => id === item._id)
                        if (added) {
                            return { ...item, wishList: true }
                        } return { ...item, wishList: false }
                    })
                    setCurrentItems(items)
                    setLoading(true)
                    // setCurrentPage(1)
                } catch (err) {
                    console.log(err)
                }
            }
        }
        fetchData()
    }, [id])

    const handleWishList = (id) => {
        let newCurrentItems;
        if (!wishList.includes(id)) {
            newCurrentItems = currentItems.map(item => {
                if (item._id === id) {
                    return { ...item, wishList: true }
                } return item
            })

            dispatch(addToWishList(id))
        } else {
            newCurrentItems = currentItems.map(item => {
                if (item._id === id) {
                    return { ...item, wishList: false }
                } return item
            })
            dispatch(removeFromWishList(id))
        }
        setCurrentItems([...newCurrentItems])
    }

    const onSortChange = (e) => {
        setSort(e.target.value)
    }

    useEffect(() => {
        setCurrentItems([...sortBy(sort)])
    }, [sort])

    const sortBy = (sort) => {
        switch (sort) {
            case 'price':
                return currentItems.sort((itemA, itemB) => itemA.price - itemB.price)
            case 'date':
                return currentItems.sort((itemA, itemB) => (itemA.createdAt < itemB.createdAt) ? -1 :
                    ((itemA.createdAt > itemB.createdAt) ? 1 : 0))
            case 'name':
                return currentItems.sort((itemA, itemB) => itemA.name < itemB.name ? -1 : itemB.name < itemA.name ? 1 : 0)
            default:
                return currentItems
        }
    }
    const navigateToItemPage = (id) => {
        history.push(`/add/${id}`)
    }

    // const handlePagination = (page) => {
    //     setLoading(false)
    //     const newCurrentItems = items.filter((item, i) => {
    //         return i >= (page - 1) * itemsPerPage && i < page * itemsPerPage
    //     })
    //     setCurrentItems(newCurrentItems)
    //     setLoading(true)
    // }


    return (
        <div className={classes.container}>
            {!mobileView ?
                <>
                    <Typography className={classes.mobileHeader}>{id}</Typography>
                    <SortClothe value={sort} onChange={onSortChange} />
                </>
                :
                <>
                    <Typography className={classes.header}>{id}</Typography>
                    <SortClothe value={sort} onChange={onSortChange} />
                </>
            }
            {loading ?
                <div className={classes.itemsContainer}>
                    {currentItems.length > 0 ?
                        <div >

                            <ItemsList items={items} handleWishList={handleWishList} handleClick={navigateToItemPage} />
                            {/* <Paging handleChange={handlePagination} countPages={items.length / itemsPerPage} /> */}
                        </div> :
                        <Typography className={classes.emptyItems}>אין כרגע פריטים בקטגוריה זו</Typography>
                    }
                </div>
                : <PreviewList />
            }
        </div>
    );
}

export default CollectionFeed;
