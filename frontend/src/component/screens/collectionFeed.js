import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { newCollection, sortState, selectType, } from '../../actions/index';
import SortClothe from '../sideComponent/sortClothe';
import ItemsList from '../sideComponent/itemsList';
import Paging from '../sideComponent/Paging';


function CollectionFeed({ location }) {

    const dispatch = useDispatch();
    const allItems = useSelector(state => state.items.selected);
    const wishList = useSelector(state => state.items.wishList);
    const [sort, setSort] = useState('');
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            if (location.state === 'new Collection') {
                console.log('we are here')
                dispatch(newCollection())
                setLoading(false)
                setCurrentPage(1)
            } else {
                console.log(location.state)
                dispatch(selectType(location.state))
                setLoading(false)
                setCurrentPage(1)

            }
        }
        fetchData()
    }, [location])

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = allItems.slice(indexOfFirstItem, indexOfLastItem)

    const onSortChange = (e) => {
        setSort(e.target.value)
        dispatch(sortState(e.target.value))
    }


    return (
        <div style={{ textAlign: 'center' }}>
            <h1 className='subHeader'>{location.state}</h1>
            <SortClothe value={sort} onChange={onSortChange}
            />
            <ItemsList allItems={currentItems} wishList={wishList} loading={loading} />
            {allItems.length > 5 &&
                <Paging paginate={(value) => setCurrentPage(value)} currentPage={currentPage} itemsPerPage={itemsPerPage} totalItems={allItems.length} />
            }
        </div >
    );
}

export default CollectionFeed;
