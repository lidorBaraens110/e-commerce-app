import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

import ItemCard from '../common/ItemCard';


const ItemList = () => {
    const history = useHistory();
    const [allItems, setAllItems] = useState()

    const handleEdit = (item) => {

    }

    useEffect(() => {
        axios.get('http://localhost:5000/api/getAllItems')
            .then(res => {
                console.log(res.data)
                setAllItems(res.data)
            })
    }, [])

    const navigateToItem = (id) => {
        history.push(`editItem/${id}`)
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1 className='subHeader'>New Collection</h1>
            {/* <SortClothe
            /> */}
            <Grid
                container
                spacing={5}
                style={{ padding: '3% 7% 3% 7%', textAlign: 'center' }}>
                {allItems && allItems.map(item => {

                    return (
                        <Grid
                            key={item._id}
                            item
                            xs={12} sm={6} md={4} lg={3} xl={3}>


                            <ItemCard
                                id={item._id}
                                onClick={navigateToItem}
                                name={item.name}
                                discount={item.discount}
                                description={item.description} price={item.price}
                                avatarImage={item.oneSize.colors[Object.keys(item.oneSize.colors)[0]].images[0]}
                            />
                            <Button onClick={() => navigateToItem(item._id)}> ערוך</Button>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    );
}

export default ItemList;