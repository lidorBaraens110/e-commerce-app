import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { isPurchaseDone } from '../../redux/actions';
const backEnd = process.env.REACT_APP_BACKEND

const CreditCard = () => {
    const history = useHistory();
    const dispatch = useDispatch()
    const userDetail = useSelector(state => state.userDetail);
    const isDone = useSelector(state => state.isPurchaseDone);
    const cart = useSelector(state => state.cart);
    const delay = 15 * 60 * 1000


    useEffect(() => {
        const time = setTimeout(() => {
            console.log('setTimeout')
            if (!isDone) {
                axios.post(`${backEnd}/api/cancelDeal`, cart)
            } else {
                history.push('/cashRegister')
            }
        }, delay)
        return () => {
            if (!isDone) {
                axios.post(`${backEnd}/api/cancelDeal`, cart)
            }
            clearTimeout(time)
        }
    }, [])

    const handleUpload = async () => {
        axios.post(`${backEnd}/users/buy`, {
            userDetail
        })
            .then(res => console.log('yes mother fucker'))
            .catch(err => console.log(err))
    }
    return (
        <div style={{ padding: '10rem', textAlign: 'center' }}>
            CreditCard Page

            <button onClick={handleUpload} > upload </button>
        </div>
    )
}

export default CreditCard;