import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import { List, ListItem, Divider, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { removeFromCart, initItem, editItem } from '../../actions/index';
import CountOfItem from '../sideComponent/countOfItem';

const CartList = ({ items, handleErase, handleEdit, handleSizeLeft }) => {
    return (

        items.length > 0 ? <div>
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
                                    <p>כמות </p>
                                    <CountOfItem name={'countSelected'}
                                        value={item.countSelected}
                                        count={item.sizeSelected.left}
                                        onChange={(value) => handleSizeLeft(item, value)} />
                                    <Button onClick={() => handleErase(item)}>הסר</Button>
                                    <Button onClick={() => handleEdit(item)}>ערוך</Button>
                                </Grid>
                                {item.newPrice !== null ?
                                    <Grid
                                        item
                                        xs={3} s={3} md={3} lg={3} xl={3} >
                                        <p>{item.newPrice * item.countSelected} ₪</p>

                                    </Grid>
                                    : <Grid
                                        item
                                        xs={3} s={3} md={3} lg={3} xl={3} >
                                        <p>{item.price * item.countSelected} ₪</p>

                                    </Grid>
                                }
                            </Grid>
                        </ListItem>
                        <Divider />
                    </div>
                )
            })}</div> : <div style={{ padding: '8rem' }}><h1>העגלה ריקה</h1></div>
    )
}

export default CartList;