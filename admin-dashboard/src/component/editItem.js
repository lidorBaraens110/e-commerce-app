import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import "react-datepicker/dist/react-datepicker.css";
import { editItem, uploadItem } from '../action';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core'
import Edit from './handleItem';

const EditItem = () => {
    const history = useHistory()
    const dispatch = useDispatch();
    const item = useSelector(state => state.item)

    useEffect(() => console.log(item))
    // const [picture, setPicture] = useState('');
    const handleChange = (event) => {

        const { value, name } = event.target
        dispatch(editItem({ name, value }))
    };
    const handleDateChange = (date) => {
        let name = 'date';
        let value = date;
        dispatch(editItem({ name, value }));
    }
    // const handlerUploadPicture = (event) => {
    //     setPicture(event.target.files[0])
    // }

    // const uploadPicture = () => {
    //     console.log(picture)
    //     const formData = new FormData();

    //     // Update the formData object 
    //     formData.append(
    //         "myPicture",
    //         picture,
    //         picture.name
    //     );


    //     console.log(picture);

    //     // Request made to the backend api 
    //     // Send formData object 
    //     axios.post("items/uploadfile", formData);

    //     // setItem(preValue => {
    //     //     return { ...preValue, pictures: picture }
    //     // })
    // }

    const handleClick = () => {
        dispatch(uploadItem(item));
    }

    const handleBuyTheLook = () => {
        history.push('/');
    }
    // const handleClick = () => {
    //     console.log(item)
    //     axios.post('http://localhost:5000/items/add', item)
    //         .then(res => console.log(res.data))
    //         .then(() => window.location = "/")
    //         .catch(err => console.log(err))


    // }

    return (
        <div>
            <h1>
                ערוך פריט
            </h1>
            <Edit
                name={item.name}
                description={item.description}
                date={item.date}
                price={item.price}
                type={item.type}
                bodyBuild={item.bodyBuild}
                s={item.s.left}
                m={item.m.left}
                l={item.l.left}
                xl={item.xl.left}
                handleBuyTheLook={handleBuyTheLook}
                handleChange={handleChange}
                handleDateChange={handleDateChange}
            />
            <button onClick={handleClick} > ערוך</button>
        </div>
    )
}

export default EditItem;
