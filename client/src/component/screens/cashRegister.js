import React, { useEffect, useState } from 'react';
import UserDetail from '../common/userDetail';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme, useMediaQuery, CircularProgress, Typography, Grid } from '@material-ui/core';
import { handleQuantity, removeFromCart } from '../../redux/actions';
import CartList from '../common/CartList/cartList';
import UpdateItemDrawer from '../drawer/UpdateItemDrawer';
import UpdateItemModal from '../../modal/updateItemModal';

const useStyles = makeStyles((theme) => ({
    container: {
        margin: '0', maxWidth: '100%'
    },
    cartGrid: {
        backgroundColor: '#d3d3d3'
    },
    emptyCart: {
        textAlign: 'center'
    },
    cartButton: {
        width: '100%',
        backgroundColor: 'black',
        color: '#fff',
        borderRadius: '0',
        flex: 4,
        border: '1px solid black',
        '&:hover': {
            backgroundColor: '#fff',
            color: 'black',
        }
    },
    total: {
        textAlign: 'center', marginBottom: '1rem'
    }
}
))

const CashRegister = () => {
    const history = useHistory();
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const classes = useStyles()
    const [itemToUpdate, setItemToUpdate] = useState({});
    const [total, setTotal] = useState()
    const [modalState, setModal] = useState(false);
    const [drawerState, setDrawerState] = useState(false);
    const theme = useTheme();
    const mobileView = useMediaQuery(theme.breakpoints.down('xs'));

    const updateItem = (item) => {
        setItemToUpdate(item)
        if (mobileView) {
            setDrawerState(true)
        } else {
            handleModal()
        }
    }
    const handleModal = () => {
        setModal(pre => !pre)
    }

    const sum = ({ price, quantity }) => {
        return price * quantity
    }

    useEffect(() => {
        let totalPrice = 0
        cart.forEach(item => {
            totalPrice = totalPrice + (item.price * item.quantity)
        })
        setTotal(totalPrice)
    }, [sum])

    const handleNavigate = (param) => {
        history.push(`/add/${param}`)
    }

    const handleQua = ({ id, quantity, currentColor }) => {
        dispatch(handleQuantity({ id, quantity, currentColor }))
    }

    const handleRemoveFromCart = ({ id, currentColor }) => {
        dispatch(removeFromCart({ id, currentColor }))
    }

    const handleDrawerClose = () => {
        setDrawerState(false)
    }

    return (
        <>
            <UpdateItemDrawer itemId={itemToUpdate.id} lastColor={itemToUpdate.currentColor} open={drawerState} handleDrawerClose={handleDrawerClose} />
            <UpdateItemModal itemId={itemToUpdate.id} lastColor={itemToUpdate.currentColor} modalState={modalState} handleClose={handleModal} />
            <Grid
                container
                spacing={mobileView ? 0 : 10}
                className={classes.container}
            >
                <Grid
                    item
                    xs={12} s={7} m={7} lg={7} xl={7}
                >
                    <UserDetail />
                </Grid>
                <Grid item
                    className={classes.cartGrid}
                    xs={12} s={5} m={5} lg={5} xl={5}
                >
                    {cart.length === 0 ?
                        <Typography className={classes.emptyCart} > רשימת קניות ריקה</Typography> :
                        <>
                            <CartList
                                updateItem={updateItem}
                                cart={cart}
                                handleQuantity={handleQua}
                                handleNavigate={handleNavigate}
                                sum={sum}
                                removeFromCart={handleRemoveFromCart} />
                            <Typography className={classes.total}>סה"כ {total} &#8362;</Typography>

                        </>
                    }
                </Grid>
            </Grid>
        </>
    )
}
export default CashRegister;