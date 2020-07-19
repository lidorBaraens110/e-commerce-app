import React, { useState, useEffect } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Card, Grid, Typography, Button, makeStyles } from '@material-ui/core';
import PictureSwipe from '../sideComponent/pictureSwipe';
import BuyTheLook from '../sideComponent/buyTheLook';
import ButtonSize from '../sideComponent/buttonSize';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { addToCart, removeFromWishList } from '../../actions/index';

const useStyle = makeStyles(theme => ({
    container: { padding: '3% ', textAlign: 'center', marginTop: '5rem' },
    sizeButton: { minWidth: '1.5rem', borderRadius: '0', width: '2.5rem' },
    activeSB: { borderColor: 'blue', minWidth: '1.5rem', borderRadius: '0', width: '2.5rem' },
}))

const AddToChart = (props) => {

    const dispatch = useDispatch();
    const classes = useStyle();
    const history = useHistory();
    const [variant, setVariant] = useState({
        cart: 'outlined',
        buyNow: 'contained'
    })

    useEffect(() => {
        console.log(props)
    }, [])
    const [item, setItem] = useState(props.location.state);
    const [leftSize, setLeftSize] = useState(1);
    const [counter, setCounter] = useState(0);
    const [alertt, setAlert] = useState('false');
    const [sizeSelect, setSizeSelect] = useState(false)
    const [sizeAlert, setSizeAlert] = useState(false);
    useEffect(() => {
        setItem(preValue => {
            return { ...preValue, countSelected: counter }
        })
    }, [counter])

    const handleAddSize = () => {
        if (leftSize === counter) {
            setAlert('true')
            setTimeout(() => {
                setAlert('false')
            }, 2000);
        } else if (leftSize > counter) {
            setCounter(preValue => {
                return preValue + 1
            })
        }

    }

    const handleRemoveSize = () => {
        setCounter(preValue => preValue > 1 ? preValue - 1 : 1)
        setItem(preValue => {
            return { ...preValue, countSelect: counter }
        })
    }

    const handleButton = (name) => {

        const { s, m, l, xl } = item;
        const array = [s, m, l, xl];
        const currentSize = array.filter(size => size.name === name);
        const otherSize = array.filter(size => size.name !== name);
        currentSize[0].a = 'true'
        otherSize.map(size => {
            return size.a = 'false'
        })
        setItem(preValue => {
            return { ...preValue, sizeSelected: currentSize[0] }
        });
        setLeftSize(currentSize[0].left)
        setCounter(1)
        setSizeSelect(true)
    }
    const handleSizeNotSelected = () => {
        setSizeAlert(true)
        setTimeout(() => {
            setSizeAlert(false)
        }, 2000);
    }


    const handleAddToCart = () => {
        dispatch(addToCart(item));
        dispatch(removeFromWishList(item.id))
    }

    const handleGoToBuy = () => {
        dispatch(addToCart(item))
        history.push("/cashregister")
    }


    return (
        <div style={{ textAlign: 'center' }}>
            <Grid className={classes.container} container spacing={5} >
                <Grid item xs={false} sm={1} md={1} lg={1} xl={1}>
                    <div></div>
                </Grid>
                <Grid
                    item
                    xs={12} sm={5} md={5} lg={5} xl={5}
                >
                    <PictureSwipe pictures={item.images} />
                </Grid>
                <Grid item xs={false} sm={1} md={1} lg={1} xl={1}>

                </Grid>
                <Grid
                    style={{ textAlign: 'right' }}
                    item
                    xs={12} sm={4} md={4} lg={4} xl={4}>
                    <Card style={{ boxShadow: 'none', margin: '5% 0 20% 0', textAlign: 'center' }}>
                        <Typography gutterBottom style={{ fontFamily: 'Montserrat' }} variant="h4" component="h2">
                            {item.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" style={{ margin: '1rem 0', fontSize: '1.2rem' }}>
                            {item.price} ש"ח
                        </Typography>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography variant="body2" color="textSecondary" component="p" style={{ margin: '1rem 0', fontSize: '1.2rem' }}>
                                מידות
                    </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" style={{ margin: '1rem 0', fontSize: '1.2rem' }}>
                                טבלת מידות
                    </Typography>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'row', margin: '1rem 0' }}>
                            <ButtonSize selected={item.s.a} children='s' onClick={() => handleButton('s')} className={classes.sizeButton} />
                            <ButtonSize selected={item.m.a} children='m' onClick={() => handleButton('m')} className={classes.sizeButton} />
                            <ButtonSize selected={item.l.a} children='l' onClick={() => handleButton('l')} className={classes.sizeButton} />
                            <ButtonSize selected={item.xl.a} children='xl' onClick={() => handleButton('xl')} className={classes.sizeButton} />
                        </div>

                        {leftSize === 0 ? <p>מצטערים לא נשאר מהמידה הזאת</p> :
                            <div style={{ fontSize: '1.3rem', width: '5rem', display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', border: 'gray solid 1px' }}>

                                <AddIcon onClick={handleAddSize} />
                                <p>{counter}</p>
                                <RemoveIcon onClick={handleRemoveSize} />
                            </div>
                        }
                        {sizeAlert && <p>לא נבחרה מידה</p>}
                        <div style={{ margin: '10% 0 10% 0' }}>
                            <Button color='default'
                                variant={variant.cart} fullWidth={true}
                                style={{ borderRadius: '0', borderColor: 'black' }}
                                onClick={sizeSelect ? handleAddToCart : handleSizeNotSelected}
                            >
                                הוספה לסל
                        </Button>
                            <Button onClick={handleGoToBuy} color='default' variant={variant.buyNow} fullWidth style={{ marginTop: '5%', borderRadius: '0', color: 'white', backgroundColor: 'black' }}>
                                לקופה
                        </Button>
                        </div>
                        {alertt === 'true' && <p style={{ marginTop: '2rem' }}>נשארו רק {leftSize} מפריט זה</p>}
                        <p>{item.description}</p>
                    </Card>
                </Grid>
            </Grid>
            <h1 style={{ marginBottom: '2rem', borderTop: 'solid black 1px', borderBottom: 'solid black 1px' }}>BUY THE LOOK</h1>
            {/* <BuyTheLook /> */}
        </div>
    )
}

export default AddToChart;