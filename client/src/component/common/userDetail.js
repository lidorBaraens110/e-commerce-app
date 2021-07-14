import React, { useState } from 'react';
import {
    Button, TextField, List,
    ListItem, Typography, ListItemText,
    DialogTitle, Dialog
} from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { editDetail } from '../../redux/actions';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    cartButton: {
        width: '100%',
        backgroundColor: 'black',
        color: '#fff',
        borderRadius: '0',
        flex: 4,
        border: '1px solid black',
        '&:hover': {
            backgroundColor: '#fff',
            color: 'black',
        }
    },
}))

const UserDetail = () => {
    const classes = useStyles()
    const history = useHistory();
    const dispatch = useDispatch();
    const userDetail = useSelector(state => state.userDetail)
    const cart = useSelector(state => state.cart);
    const [dialogState, setDialogState] = useState();



    const [checked, setChecked] = useState(false);

    const handleCheckBox = (event) => {
        setChecked(event.target.checked);
    }

    const handleChange = (event) => {
        const { id, value } = event.target;
        let name = id;
        dispatch(editDetail({ value, name }))
    }

    const buyItems = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/buyItems', { items: cart, userDetail })
            .then((res) => {
                if (res.data.errItemsArray) {
                    setDialogState(true);
                } else {
                    history.push('/creditCard');
                }
                console.log(res.data)
            })
    };

    return (
        <>

            <Dialog open={dialogState} onClose={() => setDialogState(false)} style={{ padding: '3rem' }}>
                <DialogTitle style={{ textAlign: 'right', margin: '2rem 2rem 0' }}>אזל במלאי</DialogTitle>

            </Dialog>
            <form onSubmit={buyItems}>
                <List>
                    <ListItem >
                        <Typography style={{ fontSize: '1.5rem', color: 'black' }}>מילוי פרטים</Typography>

                    </ListItem>
                    <ListItem  >
                        <Typography style={{ fontSize: '1rem', color: 'black' }}>משלוח boxit חינם</Typography>
                    </ListItem>
                    <ListItem  >
                        <ListItemText style={{ marginLeft: '1rem' }}>
                            <TextField required fullWidth onChange={handleChange} id="fname" value={userDetail.fname} label='שם פרטי' margin='dense' variant='outlined' size='small' />
                        </ListItemText>
                        <ListItemText>
                            <TextField required fullWidth id="lname" onChange={handleChange} label='שם משפחה' margin='dense' variant='outlined' value={userDetail.lname} size='small' />
                        </ListItemText>
                    </ListItem>
                    <ListItem  >
                        <ListItemText style={{ marginLeft: '1rem' }}>
                            <TextField required fullWidth onChange={handleChange} id="address" value={userDetail.address} label='כתובת' margin='dense' variant='outlined' size='small' />
                        </ListItemText>
                        <ListItemText>
                            <TextField required fullWidth id="num" onChange={handleChange} label='מספר דירה' margin='dense' variant='outlined' value={userDetail.num} size='small' />
                        </ListItemText>
                    </ListItem>
                    <ListItem  >
                        <ListItemText style={{ marginLeft: '1rem' }}>
                            <TextField required fullWidth onChange={handleChange} id="city" value={userDetail.city} label='עיר' margin='dense' variant='outlined' size='small' />
                        </ListItemText>
                        <ListItemText>
                            <TextField required fullWidth id="postalCode" onChange={handleChange} label='מיקוד' margin='dense' variant='outlined' value={userDetail.postalCode} size='small' />
                        </ListItemText>
                    </ListItem>
                    <ListItem  >
                        <TextField required type='email' fullWidth id="email" onChange={handleChange} label='דוא"ל' value={userDetail.email} margin='dense' variant='outlined' size='small' />
                    </ListItem>
                    <ListItem  >
                        <TextField required fullWidth id="phone" value={userDetail.phone} label='טלפון' onChange={handleChange} margin='dense' variant='outlined' size='small' />
                    </ListItem>
                    {/* <ListItem>
                        <Checkbox
                            checked={checked}
                            onChange={handleCheckBox}
                            color='secondary'
                            inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                        />
                        <Typography>לקבלת עדכונים מבצעים</Typography>
                    </ListItem> */}
                    <ListItem>
                        <Button type='submit' className={classes.cartButton}> המשך לתשלום </Button>
                    </ListItem>
                </List>
            </form>

        </>
    )
}
export default UserDetail;