import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Button } from '@material-ui/core';
import ItemMainForm from '../component/ItemMainForm';
import ItemBeforeUpload from '../common/itemBeforeUpload';
import { initial } from '../redux/action';



const AddItem = () => {

    const dispatch = useDispatch()
    const [init, setInit] = useState(true);
    const item = useSelector(state => state.item)
    const handleInit = () => {
        setInit(pre => !pre)
    }

    useEffect(() => {
        return () => {
            dispatch(initial());
        }
    }, [])

    const handleUploadItem = (e) => {
        e.preventDefault()
        uploadItem();
        handleInit();

    }

    const uploadItem = async () => {
        try {
            await axios.post('http://localhost:5000/api/addItem', { item })
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <Grid container style={{ margin: 0, maxWidth: '100%' }}
                spacing={2}>
                <Grid item
                    xs={12} s={7} md={7} lg={7} xl={7}>
                    <h5>הוסף פריט</h5>
                    <ItemMainForm onSubmit={handleUploadItem} edit={false} />
                </Grid>
                <Grid item

                    xs={12} s={5} md={5} lg={5} xl={5}>
                    <h5>תצוגה מקדימה</h5>
                    <ItemBeforeUpload init={init} />
                </Grid>
            </Grid>
        </div>
    )
}

export default AddItem;
