import React, { useState } from 'react';
import { Button, ListSubheader, Grid, Card, TextField, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { editDetail, sendDetails } from '../../actions';



const UserDetail = () => {

    const dispatch = useDispatch();
    const userDetail = useSelector(state => state.userDetail)

    const [checked, setChecked] = useState(false);

    const handleCheckBox = (event) => {
        setChecked(event.target.checked);
    }

    const handleChange = (event) => {

        const { id, value } = event.target;
        let name = id;
        dispatch(editDetail({ value, name }))
    }

    const handleClick = () => {
        console.log(userDetail);
    };

    return (
        <List>
            <ListItem style={{ textAlign: 'right' }} >
                <h3 style={{ fontSize: '1.5rem', color: 'black' }}>מילוי פרטים</h3>

            </ListItem>
            <ListItem style={{ textAlign: 'right' }} >
                <h5 style={{ fontSize: '1rem', color: 'black' }}>משלוח boxit חינם</h5>
            </ListItem>
            <ListItem style={{ textAlign: 'right' }} >
                <ListItemText style={{ marginLeft: '1rem' }}>
                    <TextField fullWidth onChange={handleChange} id="fname" value={userDetail.fname} placeholder='שם פרטי' margin='dense' variant='outlined' size='small' />
                </ListItemText>
                <ListItemText>
                    <TextField fullWidth id="lname" onChange={handleChange} placeholder='שם משפחה' margin='dense' variant='outlined' value={userDetail.lname} size='small' />
                </ListItemText>
            </ListItem>
            <ListItem style={{ textAlign: 'right' }} >
                <TextField fullWidth id="address" placeholder='כתובת' onChange={handleChange} margin='dense' value={userDetail.address} variant='outlined' size='small' />
            </ListItem>
            <ListItem style={{ textAlign: 'right' }} >
                <TextField fullWidth id="num" placeholder='מספר דירה' value={userDetail.num} onChange={handleChange} margin='dense' variant='outlined' size='small' />
            </ListItem>
            <ListItem style={{ textAlign: 'right' }} >
                <TextField fullWidth id="city" placeholder='עיר' margin='dense' value={userDetail.city} onChange={handleChange} variant='outlined' size='small' />
            </ListItem>
            <ListItem style={{ textAlign: 'right' }} >
                <TextField fullWidth id="postalCode" placeholder='מיקוד' value={userDetail.postalCode} onChange={handleChange} margin='dense' variant='outlined' size='small' />
            </ListItem>
            <ListItem style={{ textAlign: 'right' }} >
                <TextField fullWidth id="email" onChange={handleChange} placeholder='דוא"ל' value={userDetail.email} margin='dense' variant='outlined' size='small' />
            </ListItem>
            <ListItem>
                <Checkbox
                    checked={checked}
                    onChange={handleCheckBox}
                    color='secondary'
                    inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                />
                <label>לקבלת עדכונים מבצעים</label>
            </ListItem>
            <ListItem style={{ textAlign: 'right' }} >
                <TextField id="phone" value={userDetail.phone} placeholder='טלפון' onChange={handleChange} margin='dense' variant='outlined' size='small' />
            </ListItem>
            <ListItem>
                <Link to="/creditcard">
                    <Button onClick={() => console.log(userDetail)} style={{ backgroundColor: 'black', color: 'white', borderRadius: '0', border: 'solid #ffecda 2px' }}> המשך לתשלום </Button>
                </Link>
            </ListItem>
        </List>
    )
}
export default UserDetail;