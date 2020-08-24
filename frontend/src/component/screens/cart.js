import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import { List, ListItem, Divider, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { removeFromCart, initItem, editItem } from '../../actions/index';
import CartList from '../sideComponent/cartList';
const Cart = () => {
    const history = useHistory();
    const dispatch = useDispatch()
    const items = useSelector(state => state.items.cart)
    useEffect(() => {
        console.log(items)
    }, [])
    const handleErase = (item) => {
        console.log(item)
        const value = item._id + item.sizeSelected.name;
        dispatch(removeFromCart(value))
    }
    const handleEdit = (item) => {
        dispatch(initItem(item))
        history.push("/add")
    }
    const handleSizeLeft = (item, e) => {
        console.log('item: ' + item + ' value: ' + e.target.value)
        const { value } = e.target
        dispatch(editItem({ item, value }))
    }


    return (
        <div style={{ textAlign: 'center', paddingTop: '10%' }}>
            <header><h1>סל הקניות</h1></header>
            <div style={{ padding: '0 10% 5% 10%' }}>
                <List>
                    <CartList items={items} handleErase={handleErase} handleEdit={handleEdit} handleSizeLeft={handleSizeLeft} />
                </List>
                {items.length > 0 &&
                    <Link to={{ pathname: "/cashregister" }}>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div style={{ flex: '2' }}>
                            </div>
                            <Button color='default' variant='outlined' fullWidth style={{ marginTop: '5%', borderRadius: '0', color: 'white', backgroundColor: 'black', flex: '1' }}>
                                לקופה
                        </Button>
                        </div>
                    </Link>
                }
            </div >
        </div>
    )
}

export default Cart;