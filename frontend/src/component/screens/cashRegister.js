import React, { useEffect, useState } from 'react';
import UserDetail from '../sideComponent/userDetail';
import { useHistory } from 'react-router-dom';
import { Button, ListSubheader, Grid, Card, TextField, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import PicturesBeforePay from '../sideComponent/picturesBeforePay';
import TotalPay from '../sideComponent/totalBeforePay';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, handleSize, initItem, editItem } from '../../actions';
import CartList from '../sideComponent/cartList';

const CashRegister = () => {
    const history = useHistory();
    const dispatch = useDispatch()
    const items = useSelector(state => state.items.cart)
    const [coupon, setCoupon] = useState('');

    useEffect(() => {
        console.log(items)
    }, [])

    const handleErase = (item) => {
        console.log(item)
        const value = item._id + item.sizeSelected.name;
        dispatch(removeFromCart(value))
    }

    const handleEdit = (item) => {
        console.log('item: ' + item)
        console.log('item Size:' + item.s)
        dispatch(initItem({ value: item, size: item.s }))
        history.push("/add")
    }

    const handleSizeLeft = (item, e) => {
        console.log('item: ' + item + ' value: ' + e.target.value)
        const { value } = e.target
        dispatch(editItem({ item, value }))
    }

    const handleCoupon = (e) => {
        setCoupon(e.target.value)
    }


    return (
        <Grid container
            spacing={10}
            style={{ marginTop: '3rem' }}
        >
            <Grid
                style={{ padding: '5%' }}
                item
                xs={12} s={7} m={7} lg={7} xl={7}
            >
                <UserDetail />
            </Grid>

            <Grid item style={{
                backgroundColor: '#ffecda', paddingTop: '7rem'
            }}
                xs={12} s={5} m={5} lg={5} xl={5}
            >
                <List>
                    <ListItem>
                        <TextField fullWidth onChange={handleCoupon} id="coupon" value={coupon} placeholder='קופון' margin='dense' variant='outlined' size='small' />
                    </ListItem>
                    <CartList items={items} handleErase={handleErase} handleEdit={handleEdit} handleSizeLeft={handleSizeLeft} />
                    {/* <ListItem>
                        <PicturesBeforePay items={items} onClick={handleRemoveItem} />
                    </ListItem> */}
                    <ListItem>
                        <TotalPay cartItems={items} />
                    </ListItem>
                </List>
            </Grid>
        </Grid>
    )
}
export default CashRegister; 