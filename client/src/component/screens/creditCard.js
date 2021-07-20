import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { purchaseComplete, initialPurchase } from '../../redux/actions';
import { useLocation } from 'react-router-dom';

const backEnd = process.env.REACT_APP_BACKEND

const CreditCard = () => {
    const history = useHistory();
    const cart = useLocation().state;
    const dispatch = useDispatch();
    // const userDetail = useSelector(state => state.userDetail);
    // const isPurchaseDone = useSelector(state => state.isPurchaseDone);

    const [counter, setCounter] = useState(0);
    const isPurchaseDone = useRef(false);
    const delay = 15 * 60 * 1000

    // useEffect(() => {
    //     console.log(x.current)
    //     return () => {
    //         if (!x.current) {
    //             console.log('hello')
    //         }
    //     }
    // }, [])
    useEffect(() => {
        const time = setTimeout(() => {
            history.push('/cashRegister');
        }, delay)
        return () => {
            if (!isPurchaseDone.current) {
                console.log('called')
                axios.post(`${backEnd}/api/cancelDeal`, { items: cart }).catch(err => console.log(err))
                // console.log('isPurchase', false)
            }
            clearTimeout(time)
        }
    }, [])

    // useEffect(() => {
    //     console.log('useEffect depend on x', x.current)
    // }, [x.current])


    const handleUpload = () => {
        console.log('change')
        isPurchaseDone.current = true;
        history.push('/successPage')
        // setPurchase(pre => !pre)
        // dispatch(purchaseComplete())
    }
    const increment = () => {
        setCounter(pre => pre + 1)
    }


    return (
        <div style={{ padding: '10rem', textAlign: 'center' }}>
            אם תוך 15 דקות העגלה לא נקנית/או המשתמש יוצא מדף הרכישה תחזיר פריטים לחנות
            <br />
            אם הוא קונה תעדכן שקנה ותפסיק את הספירה של הזמן

            <Button variant='contained' onClick={handleUpload} > upload </Button>
            {/* <Button onClick={cleanUp}>asklnfask;fm</Button> */}
            <Button onClick={increment}>increment</Button>
        </div>
    )
}

export default CreditCard;