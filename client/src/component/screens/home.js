import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemsList from '../common/itemsList';
import axios from 'axios';

const Home = () => {

    const dispatch = useDispatch();
    const [itemsList, setItemList] = useState([])
    const [load, setLoad] = useState(false)
    const wishList = useSelector(state => state.wishList)
    // useEffect(() => {
    //     async function fetchData() {
    //         await axios.get('http://localhost:5000/api/getItemsByType/חצאיות')
    //             .then(res => {
    //                 console.log(res.data)
    //                 setItemList([...res.data])
    //                 setLoad(true)
    //             }).catch(err => console.log(err))
    //     }
    //     fetchData()
    // }, [])

    const handleClick = (id, colorId) => {
        axios.post('http://localhost:5000/api/buyItems', { id, colorId }).then((res) => {
            console.log(res.data)
        }).catch((err) => console.log(err))
    }

    return (

        <div style={{ textAlign: 'center', padding: '3rem 5rem' }}>
            <img style={{ width: '100%', height: 'auto' }} src='https://images1.ynet.co.il/PicServer5/2017/07/23/7925736/hibur6.jpg' />
            {load && <ItemsList items={itemsList} loading={!load} handleClick={handleClick} wishList={wishList} />}
        </div >

    )
}
export default Home