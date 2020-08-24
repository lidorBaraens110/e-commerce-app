import React, { useState, useEffect } from 'react';
import { Button, Input, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch, useSelector } from 'react-redux';
import { actionMouseOut, actionMouseOver, searchAction } from '../../actions';
import CostumeCard from '../sideComponent/costumeCard';

const Search = () => {

    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('')
    const foundItems = useSelector(state => state.items.foundItems)

    useEffect(() => {
        console.log(foundItems)
    })

    const handleMouseOver = (id) => {
        dispatch(actionMouseOver(id))
    }
    const handleMouseOut = (id) => {
        dispatch(actionMouseOut(id));
    }
    const onValueChange = (event) => {
        const { value } = event.target;
        setSearchValue(value)
        dispatch(searchAction(value))
        console.log(searchValue)

    }

    return (
        <div style={{ textAlign: 'center', margin: '10rem 0 30rem 0' }} >
            <div style={{ display: 'flex', flexDirection: 'row', textAlign: 'center', justifyContent: 'center' }}>
                <Input onChange={onValueChange} value={searchValue} />
                <SearchIcon />
            </div>
            {foundItems.length > 0 ?

                <Grid
                    container
                    spacing={10}
                    style={{ marginTop: '1%', padding: '4% 7% 4% 7%', textAlign: 'center' }}>
                    {foundItems.map(item => {

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
                                    image={item.images[0]}
                                    name={item.name} description={item.description}
                                    price={item.price}
                                    color={item.wishList}
                                    state={item}
                                />
                            </Grid>
                        )
                    })}
                </Grid>
                : <div style={{ textAlign: 'center' }}>
                    לא נמצאו תוצאות מתאימות
            </div>}
        </div>
    )
}

export default Search;