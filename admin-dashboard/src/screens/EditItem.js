import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import { Grid, Button } from '@material-ui/core';
import ItemMainForm from '../component/ItemMainForm';
import ItemBeforeUpload from '../common/itemBeforeUpload';
import { fillItem, initial } from '../redux/action';
import { useSelector, useDispatch } from 'react-redux';

const EditItem = () => {
    const { id } = useParams();
    const item = useSelector(state => state.item)
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get('http://localhost:5000/api/getItemById/' + id)
            dispatch(fillItem(data));
        }
        fetchData()
        return () => {
            dispatch(initial())
        }
    }, [id])

    const handleUpdate = async (e) => {
        e.preventDefault()
        updateItem()
        history.push('/')
    }
    const updateItem = async () => {
        try {
            await axios.post('http://localhost:5000/api/updateItem/', { item, id })
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '3%' }}>
            <Grid container style={{ margin: 0, maxWidth: '100%' }}
                spacing={10}>
                <Grid item
                    xs={12} s={7} md={7} lg={7} xl={7}>
                    <h3>ערוך פריט</h3>
                    <ItemMainForm edit={true} onSubmit={handleUpdate} />
                </Grid>
                <Grid item
                    xs={12} s={5} md={5} lg={5} xl={5}>
                    <h3>תצוגה מקדימה</h3>
                    <ItemBeforeUpload />
                </Grid>
            </Grid>
            <Button onClick={() => console.log(item)}> item</Button>
        </div>
    )
}


export default EditItem;