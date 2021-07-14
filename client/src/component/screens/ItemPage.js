import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { makeStyles, Container, useTheme, useMediaQuery, CircularProgress } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addToCart, toggle } from '../../redux/actions';
import CommonItem from '../common/CommonItem/commonItem';

const backEnd = process.env.REACT_APP_BACKEND

const useStyles = makeStyles(theme => ({
    containerStyle: {
        display: 'flex',
        justifyContent: 'center',

        [theme.breakpoints.down('xs')]: {
            padding: 0
        }
    },
    loadingWrap: { height: '80vh', display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center' },
    maxWidth: {
        maxWidth: '1024px', width: '100%',
    }
}));

function ItemPage() {
    const classes = useStyles();
    const { id } = useParams();
    const theme = useTheme();
    const history = useHistory()
    const mobileView = useMediaQuery(theme.breakpoints.down('xs'));
    const dispatch = useDispatch()
    const [loaded, setLoaded] = useState(false)
    const [item, setItem] = useState();

    useEffect(() => {
        setLoaded(false)
        async function fetchItem() {
            await axios.get(`${backEnd}/api/getItemById/${id}`).then((res) => {
                setItem(res.data);
                setLoaded(true)
            }).catch(err => console.log(err))
        }
        fetchItem()
    }, [id])

    const handleAddToCart = (currentColor) => {
        dispatch(addToCart({
            id: item._id,
            quantity: 1,
            currentColor: currentColor,
            image: item.oneSize.colors[currentColor].images[0].url,
            price: item.price,
            totalQuantity: item.oneSize.colors[currentColor].quantity,
            name: item.name,
            codeColor: item.oneSize.colors[currentColor].codeColor
        }))
        if (mobileView) {
            history.push('/cart');
        } else {
            dispatch(toggle())
        }
    }

    if (!loaded) {
        return (
            <div className={classes.loadingWrap}>
                <CircularProgress />
            </div>
        )
    }
    return (
        <Container className={classes.containerStyle} >
            <div className={classes.maxWidth}>
                <CommonItem
                    update={false}
                    item={item}
                    handleCart={handleAddToCart}
                    lastColor={Object.keys(item.oneSize.colors)[0]}
                />
            </div>
        </Container>
    )
}

export default ItemPage;