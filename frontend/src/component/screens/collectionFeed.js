import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination'
import { useSelector, useDispatch } from 'react-redux';
import { addToWishList, actionMouseOut, actionMouseOver, newCollection, sortState, selectType, toggleHeart } from '../../actions/index';
import CostumeCard from '../sideComponent/costumeCard';
import SortClothe from '../sideComponent/sortClothe';

function CollectionFeed({ location }) {
    const dispatch = useDispatch();
    const [sort, setSort] = useState('');
    const allItems = useSelector(state => state.items.selected);
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        if (location.state === 'new Collection') {
            console.log('we are here')
            dispatch(newCollection())
        } else {
            console.log(location.state)
            dispatch(selectType(location.state))
        }
    }, [location])

    const wishList = useSelector(state => state.items.wishList)
    const handleWishList = (item) => {
        dispatch(addToWishList(item))
        dispatch(toggleHeart(item))
    }
    const handleMouseOver = (id) => {
        dispatch(actionMouseOver(id))
    }
    const handleMouseOut = (id) => {
        dispatch(actionMouseOut(id));
    }
    const handlePageChange = () => {
        setCurrentPage(2)
    }

    const onSortChange = (e) => {
        console.log(e)
        setSort(e.target.value)
        dispatch(sortState(e.target.value))
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <h1 className='subHeader'>{location.state}</h1>
            <SortClothe value={sort} onChange={onSortChange}
            />
            <Grid
                container
                spacing={10}
                style={{ marginTop: '1%', padding: '4% 7% 4% 7%', textAlign: 'center' }}>
                {allItems.map(item => {

                    return (
                        <Grid
                            style={{ padding: '1rem' }}
                            key={item._id}
                            item
                            xs={6} sm={6} md={6} lg={3} xl={3}>
                            <CostumeCard
                                onMouseOut={() => handleMouseOut(item._id)}
                                onMousesOver={() => handleMouseOver(item._id)}
                                id={item._id}
                                image={item.images[item.currentImage]}
                                name={item.name} description={item.description}
                                price={item.price}
                                color={item.wishList ? true : false}
                                handleWish={() => handleWishList(item)}
                                state={item}
                            />
                        </Grid>
                    )
                })}
            </Grid>

            <Pagination style={{ display: 'inline-block' }} page={currentPage} count={Math.floor(allItems.length / 4)} onChange={handlePageChange} />
        </div >
    );
}

export default CollectionFeed;
