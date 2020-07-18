import React, { useEffect } from 'react';
import UserDetail from '../sideComponent/userDetail';
import { Button, ListSubheader, Grid, Card, TextField, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import PicturesBeforePay from '../sideComponent/picturesBeforePay';
import TotalPay from '../sideComponent/totalBeforePay';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../actions';
const CashRegister = () => {
    const dispatch = useDispatch()
    const items = useSelector(state => state.items.cart)
    const handleRemoveItem = (item) => {
        dispatch(removeFromCart(item.id))
    }
    useEffect(() => {
        console.log(items)
    }, [])
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
                        <PicturesBeforePay items={items} onClick={handleRemoveItem} />
                    </ListItem>
                    <ListItem>
                        <TotalPay />
                    </ListItem>
                </List>
            </Grid>
        </Grid>
    )
}
export default CashRegister; 