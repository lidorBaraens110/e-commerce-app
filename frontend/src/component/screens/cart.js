import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import { List, ListItem, Divider, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../../actions/index';

const Cart = () => {

    const dispatch = useDispatch()
    const items = useSelector(state => state.items.cart)
    useEffect(() => {
        console.log(items)
    }, [])
    const handleErase = (item) => {
        console.log(item)
        dispatch(removeFromCart(item.id))
    }
    // const handleEdit = (item) => {
    //     dispatch(editItem(item))
    // }



    return (
        <div style={{ textAlign: 'center', paddingTop: '10%' }}>
            <header><h1>סל הקניות</h1></header>
            <div style={{ padding: '0 10% 5% 10%' }}>
                <List>
                    {items.length > 0 ? <div>
                        {items.map(item => {
                            return (
                                <div>
                                    <ListItem style={{ padding: '0', margin: '0' }}>
                                        <Grid
                                            style={{
                                                height: '15rem',
                                                display: 'flex', alignItems: 'center',
                                                padding: '0'
                                            }}
                                            container
                                            spacing={0}
                                        >
                                            <Grid
                                                item
                                                style={{ textAlign: 'right' }}

                                                xs={2} s={2} md={2} lg={2} xl={2} >
                                                <img height='100%' width='70%' src={item.images[0]} />
                                            </Grid>
                                            <Grid
                                                style={{ textAlign: 'right' }}
                                                item
                                                xs={3} s={3} md={3} lg={3} xl={3} >
                                                <p>{item.name}</p>
                                                <p>{item.color}</p>
                                                <p>{item.sizeSelected.name}</p>
                                            </Grid>
                                            <Grid
                                                item
                                                xs={3} s={3} md={3} lg={3} xl={3} >
                                                <p>כמות {item.countSelected}</p>
                                                <Button onClick={() => handleErase(item)}>הסר</Button>
                                                <Link to={{
                                                    pathname: '/edititem',
                                                    state: item
                                                }} >ערוך</Link>

                                            </Grid>
                                            <Grid
                                                item
                                                xs={3} s={3} md={3} lg={3} xl={3} >
                                                <p>{item.price} ₪</p>

                                            </Grid>

                                        </Grid>
                                    </ListItem>
                                    <Divider />
                                </div>
                            )
                        })} <Link to={{ pathname: "/cashregister" }}>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <div style={{ flex: '2' }}>
                                </div>
                                <Button color='default' variant='outlined' fullWidth style={{ marginTop: '5%', borderRadius: '0', color: 'white', backgroundColor: 'black', flex: '1' }}>
                                    לקופה
                        </Button>
                            </div>
                        </Link></div> : <div style={{ padding: '8rem' }}><h1>העגלה ריקה</h1></div>
                    }
                </List>
            </div>
        </div >
    )
}

export default Cart;