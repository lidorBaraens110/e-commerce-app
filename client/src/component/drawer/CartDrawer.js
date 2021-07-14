import React, { useState, useEffect } from 'react';
import { Typography, Grid, IconButton, Button, Drawer } from '@material-ui/core'
import { useHistory } from 'react-router';
import { useStyle } from '../../styles';
import { useSelector, useDispatch } from 'react-redux';
import { handleQuantity, removeFromCart, toggle } from '../../redux/actions';
import CartList from '../common/CartList/cartList';

import UpdateItemModal from '../../modal/updateItemModal';



function CartDrawer({ open }) {

    const dispatch = useDispatch();
    const classes = useStyle()();
    const history = useHistory();
    const cart = useSelector(state => state.cart);
    const [total, setTotal] = useState()
    const [modalState, setModal] = useState(false);
    const [itemToUpdate, setItemToUpdate] = useState({})

    const updateItem = (item) => {
        setItemToUpdate(item)
        handleModal()
    }
    const handleModal = () => {
        setModal(pre => !pre)
    }
    const sum = ({ price, quantity }) => {
        return price * quantity
    }

    useEffect(() => {
        setTotal(cart.reduce((acc, val) => {
            return acc = acc + val.price * val.quantity
        }, 0))
    }, [sum])

    const handleNavigate = (param) => {
        history.push(`/add/${param}`)
        dispatch(toggle())
    }
    const handleQua = ({ id, quantity, currentColor }) => {
        dispatch(handleQuantity({ id, quantity, currentColor }))
    }
    const handleRemoveFromCart = ({ id, currentColor }) => {
        dispatch(removeFromCart({ id, currentColor }))
    }


    return (
        <Drawer
            onClose={() => dispatch(toggle())}
            classes={{ paper: classes.drawerPaper }}
            anchor="right"
            open={open} >
            <div >
                <UpdateItemModal
                    itemId={itemToUpdate.id}
                    lastColor={itemToUpdate.currentColor}
                    modalState={modalState}
                    handleClose={handleModal} />
                <Typography className={classes.header}>סל הקניות</Typography>
                {cart.length === 0 ?
                    <Typography className={classes.emptyItems} >רשימת קניות ריקה</Typography> :
                    <>
                        <CartList
                            updateItem={updateItem}
                            cart={cart}
                            handleQuantity={handleQua}
                            handleNavigate={handleNavigate}
                            sum={sum}
                            removeFromCart={handleRemoveFromCart} />
                        <Typography>סה"כ {total} &#8362;</Typography>
                        <Button className={classes.cartButton} onClick={() => history.push('/cashRegister')}>לתשלום</Button>
                    </>
                }
            </div>
        </Drawer>
    );
}

export default CartDrawer;

