import React, { useState, useEffect } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Card, Grid, Typography, Button, makeStyles } from '@material-ui/core';
import PictureSwipe from '../sideComponent/pictureSwipe';
import BuyTheLook from '../sideComponent/buyTheLook';
import ButtonSize from '../sideComponent/buttonSize';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addToCart, handleSize, removeFromWishList, sizeAlert, pickSize, compareSizeAlert } from '../../actions';

const useStyle = makeStyles(theme => ({
    container: { padding: '3% ', textAlign: 'center', marginTop: '5rem' },
    sizeButton: { minWidth: '1.5rem', borderRadius: '0', width: '2.5rem' },
    activeSB: { borderColor: 'blue', minWidth: '1.5rem', borderRadius: '0', width: '2.5rem' },
}))

const AddToChart = (props) => {

    const dispatch = useDispatch();
    const classes = useStyle();
    const history = useHistory();

    const item = useSelector(state => state.item)
    const [theCart, setTheCart] = useState(false)
    const [buttonSelect, setButtonSelect] = useState(item.sizes.map(size => {
        if (size.name !== 's') {
            return { ...size, a: false }
        }
        else {
            return {
                ...size,
                a: true
            }
        }
    }))

    const handleCounterSize = (value) => {
        console.log('value: ' + value + ' count: ' + item.countSelected + ' sizeSelected: ' + item.sizeSelected.left)
        if (value < 0 && item.countSelected > 1) {
            dispatch(handleSize(value))
        }
        else {
            if (value > 0) {
                if (item.sizeSelected.left == item.countSelected) {
                    dispatch(compareSizeAlert(true))
                    setTimeout(() => {
                        dispatch(compareSizeAlert(false))
                    }, 2000)
                } else {
                    dispatch(handleSize(value))
                }
            }
        }
    }

    const handleButtonSelect = sizeSelected => {
        console.log('button select')
        setButtonSelect(preValue => {
            return preValue.map(size => {
                if (size.name !== sizeSelected.name) {
                    return {
                        ...size,
                        a: false
                    }
                }
                else {
                    return {
                        ...size,
                        a: true
                    }
                }
            })
        })
        dispatch(pickSize(sizeSelected))
    }
    const handleAddToCart = () => {
        console.log('addToCart')
        let itemId = item._id + item.sizeSelected.name
        dispatch(addToCart({ item, itemId }));
        dispatch(removeFromWishList(item.id))
        setTheCart(true)
    }

    const handleGoToBuy = () => {
        let itemId = item._id + item.sizeSelected.name
        dispatch(addToCart({ item, itemId }));
        history.push("/cashregister")
    }

    const handleUpdateUser = () => alert('נעדכן אותך חביבי')

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

                            {buttonSelect.map(size => {
                                return <ButtonSize
                                    key={size.name}
                                    selected={size.a}
                                    children={size.name}
                                    onClick={() => handleButtonSelect(size)}
                                    className={classes.sizeButton} />
                            })}
                        </div>
                        {item.sizeSelected.left === 0 ?
                            <div style={{ margin: '22% 0 10% 0' }}>
                                <Button color='default'
                                    variant='outlined' fullWidth
                                    style={{ borderRadius: '0', borderColor: 'black' }}
                                >
                                    אזל המלאי
                        </Button>
                                <Button onClick={handleUpdateUser} color='default' variant='contained' fullWidth style={{ marginTop: '5%', borderRadius: '0', color: 'white', backgroundColor: 'black' }}>
                                    עדכנו אותי שיחזור
                        </Button>
                            </div>
                            :
                            <div>
                                <div style={{ fontSize: '1.3rem', width: '5rem', display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', border: 'gray solid 1px' }}>

                                    <AddIcon onClick={() => handleCounterSize(1)} />
                                    <p>{item.countSelected}</p>
                                    <RemoveIcon onClick={() => handleCounterSize(-1)} />
                                </div>

                                <div style={{ margin: '10% 0 10% 0' }}>

                                    {item.compareSizeAlert &&
                                        <p style={{ margin: '2rem 0 2rem 0' }}>
                                            נשארו רק {item.sizeSelected.left} מפריט זה
                                        </p>
                                    }
                                    {theCart &&
                                        <Button color='default'
                                            variant='outlined' fullWidth
                                            style={{ borderRadius: '0', borderColor: 'black', marginBottom: '5%' }}

                                        >הפריט נוסף לעגלה</Button>}

                                    <Button color='default'
                                        variant='outlined' fullWidth
                                        style={{ borderRadius: '0', borderColor: 'black' }}
                                        onClick={handleAddToCart}
                                    >
                                        הוספה לסל
                        </Button>
                                    <Button onClick={handleGoToBuy}
                                        color='default' variant='contained' fullWidth
                                        style={{ marginTop: '5%', borderRadius: '0', color: 'white', backgroundColor: 'black' }}>
                                        לקופה
                        </Button>
                                </div>
                            </div>
                        }

                        <p>{item.description}</p>
                        <Button onClick={() => console.log(item.sizeSelected)}>בדיקה</Button>
                    </Card>
                </Grid>
            </Grid>
            <h1 style={{ marginBottom: '2rem', borderTop: 'solid black 1px', borderBottom: 'solid black 1px' }}>BUY THE LOOK</h1>
            {/* <BuyTheLook /> */}
        </div>
    )
}

export default AddToChart;