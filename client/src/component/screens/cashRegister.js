import React, { useEffect, useRef, useState } from 'react';
import UserDetail from '../common/userDetail';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme, useMediaQuery, Button, Typography, Grid, Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import { handleQuantity, removeFromCart, updateAlertCart, removeAlertFromCart, activatePurchase } from '../../redux/actions';
import CartList from '../common/CartList/cartList';
import UpdateItemDrawer from '../drawer/UpdateItemDrawer';
import UpdateItemModal from '../../modal/updateItemModal';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    container: {
        margin: '0', maxWidth: '100%'
    },
    cartGrid: {
        backgroundColor: '#E5E4E2'
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
    const cartRef = useRef()
    const history = useHistory();
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const userDetail = useSelector(state => state.userDetail)
    const classes = useStyles()
    const [itemToUpdate, setItemToUpdate] = useState({});
    const [total, setTotal] = useState()
    const [modalState, setModal] = useState(false);
    const [drawerState, setDrawerState] = useState(false);
    const theme = useTheme();
    const mobileView = useMediaQuery(theme.breakpoints.down('xs'));
    const [alertItems, setAlertItems] = useState(false);
    const [notAvailableItems, setNotAvailableItems] = useState([]);

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

    useEffect(() => {
        return () => {
            dispatch(removeAlertFromCart())
        }
    }, [])

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

    const buyItems = (e) => {
        console.log(cart)
        e.preventDefault()
        axios.post('http://localhost:5000/api/buyItems', { items: cart, userDetail })
            .then((res) => {
                if (res.data.items.length > 0) {
                    dispatch(updateAlertCart(res.data.items))
                    setAlertItems(true)
                } else {
                    history.push('/creditCard', cart);
                }
            })
    };
    const onCloseAlert = () => {
        setAlertItems(false)
    }
    useEffect(() => {
        return () => {
            if (alertItems) {
                cartRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: "nearest",
                    inline: "start"
                })
            }
        }
    }, [alertItems])

    return (
        <>
            <AlertItems open={alertItems} onClose={onCloseAlert} />
            {drawerState && <UpdateItemDrawer itemId={itemToUpdate.id} lastColor={itemToUpdate.currentColor} open={drawerState} handleDrawerClose={handleDrawerClose} />}
            {modalState && <UpdateItemModal itemId={itemToUpdate.id} lastColor={itemToUpdate.currentColor} modalState={modalState} handleClose={handleModal} />}
            <Grid
                container
                spacing={mobileView ? 0 : 10}
                className={classes.container}
            >
                <Grid
                    item
                    xs={12} s={7} m={7} lg={7} xl={7}
                >
                    <UserDetail buyItems={buyItems} />
                    {/* <Button onClick={() => console.log(cart)}>as;fnaslfs</Button> */}
                </Grid>
                <Grid item
                    className={!mobileView ? classes.cartGrid : classes.gridMobile}
                    xs={12} s={5} m={5} lg={5} xl={5}
                >
                    {cart.length === 0 ?
                        <Typography className={classes.emptyCart} > רשימת קניות ריקה</Typography>
                        :
                        <div ref={cartRef}>
                            <CartList
                                updateItem={updateItem}
                                cart={cart}
                                handleQuantity={handleQua}
                                handleNavigate={handleNavigate}
                                sum={sum}
                                removeFromCart={handleRemoveFromCart} />
                            <Typography className={classes.total}>סה"כ {total} &#8362;</Typography>
                        </div>
                    }
                </Grid>

            </Grid>
        </>
    )
}
export default CashRegister;


const AlertItems = ({ open, onClose }) => {
    // const [updateState, setUpdateState] = useState(false);
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle style={{ color: 'red' }}> העגלה מכילה פריטים שאזלו, עדכן את העגלה על מנת להמשיך בקנייה  </DialogTitle>

            <Button variant='contained' style={{ fontSize: '1.2rem' }} onClick={onClose}>
                הבנתי
            </Button>
        </Dialog>
    )
}