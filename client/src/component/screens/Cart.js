import React, { useState, useEffect } from 'react';
import CartList from '../common/CartList/cartList';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { handleQuantity, removeFromCart, toggle } from '../../redux/actions';
import { Typography, Button, makeStyles } from '@material-ui/core';

import UpdateItemDrawer from '../drawer/UpdateItemDrawer';

//icons 
const useStyles = makeStyles(theme => ({
    container: {
        textAlign: 'center', position: 'relative'
    },
    headerWrap: {
        backgroundColor: '#d3d3d3'
    },
    header: {
        fontSize: "0.8rem"
    },
    buttonWrap: {
        position: 'sticky', bottom: 0, maxWidth: '100%', padding: '0rem 1.5rem', margin: '1rem 0'
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
        textAlign: 'right'
    }
}))


function Cart(props) {
    const classes = useStyles()

    const dispatch = useDispatch();

    const history = useHistory();
    const cart = useSelector(state => state.cart);
    const [total, setTotal] = useState()
    const [modalState, setModal] = useState(false);
    const [itemToUpdate, setItemToUpdate] = useState({})
    const [drawerState, setDrawerState] = useState(false)
    const updateItem = (item) => {
        setItemToUpdate(item)
        setDrawerState(true)
    }
    const handleDrawerClose = () => {
        setDrawerState(false)
    }
    const sum = ({ price, quantity }) => {
        return price * quantity
    }

    const handleNavigate = (param) => {
        history.push(`/add/${param}`)
    }
    useEffect(() => {
        setTotal(cart.reduce((acc, val) => {
            return acc = acc + val.price * val.quantity
        }, 0))
    }, [sum])
    const handleQua = ({ id, quantity, currentColor }) => {
        dispatch(handleQuantity({ id, quantity, currentColor }))
    }
    const handleRemoveFromCart = ({ id, currentColor }) => {
        dispatch(removeFromCart({ id, currentColor }))
    }
    const navigateToCashRegister = () => {
        history.push('/cashRegister');
    }


    return (
        <>
            <UpdateItemDrawer itemId={itemToUpdate.id} open={drawerState} lastColor={itemToUpdate.currentColor} handleDrawerClose={handleDrawerClose} />
            <div className={classes.container}>
                <div className={classes.headerWrap}>
                    <Typography className={classes.header}>סל הקניות</Typography>
                </div>
                <CartList
                    updateItem={updateItem}
                    cart={cart}
                    handleQuantity={handleQua}
                    handleNavigate={handleNavigate}
                    sum={sum}
                    removeFromCart={handleRemoveFromCart}
                />
                <div className={classes.buttonWrap}>
                    <Typography className={classes.total}>סה"כ {total} &#8362;</Typography>
                    <Button className={classes.cartButton}
                        onClick={navigateToCashRegister}>
                        לתשלום
                    </Button>
                </div>
            </div>
        </>
    );

}

export default Cart;