import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SortClothe from '../common/sortClothe';
import ItemsList from '../common/itemsList';
import queryString from 'query-string'
import { useHistory, useParams, useLocation } from 'react-router-dom';
import { addToWishList, removeFromWishList } from '../../redux/actions'
import axios from 'axios';
import { Typography, makeStyles, Button } from '@material-ui/core';
import PreviewList from '../common/PreviewList'
import Paging from '../common/Paging';

const backEnd = process.env.REACT_APP_BACKEND

const types = ['מכנסיים קצרות', "מכנסיים ארוכות", "חצאיות", "ג'ינסים", "טייצים", "שמלות", "חולצות"]

const useStyles = makeStyles(theme => ({
    container: { textAlign: 'center' },
    header: {
        margin: '3rem', fontSize: '2rem', fontWeight: 600, padding: 0, color: '#030303',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem', fontWeight: 500, padding: '0.1rem', margin: 0
        }
    },
    itemsContainer: { display: 'flex', justifyContent: 'center' },
    emptyItems: { padding: '5rem', fontSize: '1.5rem' }
}))

function CollectionFeed() {
    const { search } = useLocation()
    const values = queryString.parse(search);
    const classes = useStyles();
    const history = useHistory();
    const { id } = useParams();
    const dispatch = useDispatch();
    const wishList = useSelector(state => state.wishList);
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([])
    const itemsPerPage = 3;
    const [searchPage, setSearchPage] = useState(false);
    const [totalPage, setTotalPage] = useState()


    useEffect(() => {
        console.log(values.page || 1)
        const fetchData = async () => {
            if (!types.includes(id) && id !== 'new Collection') {
                setSearchPage(true)
            } else {
                setSearchPage(false)
            }

            setLoading(false)
            const { data } = await axios.post(`${backEnd}/api/getSortedItems`, { type: id, sortedBy: values.sortedBy, page: values.page || 1, itemsPerPage })
            const items = data.items.map(item => {
                const added = wishList.find(id => id === item._id)
                if (added) {
                    return { ...item, wishList: true }
                } return { ...item, wishList: false }
            })
            setItems(items)
            setTotalPage(data.totalPage)
            setLoading(true)
        }
        fetchData()
    }, [id, values.page, values.sortedBy])

    const handleWishList = (id, i) => {
        setItems(preVal => {
            return [...preVal.slice(0, i),
            { ...preVal[i], wishList: !preVal[i].wishList },
            ...preVal.slice(i + 1)]
        })
        if (!wishList.includes(id)) {
            dispatch(addToWishList(id))
        } else {
            dispatch(removeFromWishList(id))
        }
    }

    const onSortChange = (e) => {
        if (!values.page) {
            console.log(values)
            history.replace({
                search: `?sortedBy=${e.target.value}`
            })
        }
        else {
            history.replace({
                search: `?sortedBy=${e.target.value}&page=${values.page}`
            })
        }
    }

    const navigateToItemPage = (id) => {
        history.push(`/add/${id}`)
    }

    const handlePagination = (page) => {
        if (values.sortedBy) {
            history.replace({
                search: `?sortedBy=${values.sortedBy}&page=${page}`
            })
        } else {
            history.replace({
                search: `?page=${page}`
            })
        }
    }

    return (
        <div className={classes.container}>

            <>
                <Typography className={classes.header}>{searchPage ? `חיפוש לפי: "${id}"` : id}</Typography>
                <SortClothe value={values.sortedBy ? values.sortedBy : 'date'} onChange={onSortChange} />
            </>

            {loading ?
                <div className={classes.itemsContainer}>
                    {items.length > 0 ?
                        <div >
                            <ItemsList items={items} handleWishList={handleWishList} handleClick={navigateToItemPage} />
                            <Paging handleChange={handlePagination} currentPage={values.page || 1} countPages={totalPage} />
                        </div> :
                        <Typography className={classes.emptyItems}>לא נמצאו פריטים</Typography>
                    }
                </div>
                : <PreviewList />
            }
        </div>
    );
}

export default CollectionFeed;
