import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';


const CreditCard = () => {
    const userDetail = useSelector(state => state.userDetail);
    const userItems = useSelector(state => state.items.cart);

    useEffect(() => {

    }, [])
    const handleUpload = async () => {
        console.log(userDetail)
        console.log(userItems)
        axios.post('http://localhost:5000/users/buy', {
            userDetail, userItems
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