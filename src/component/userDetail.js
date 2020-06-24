import React, { useState } from 'react';
import { Button, ListSubheader, Grid, Card, TextField, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';

const UserDetail = () => {

    const [checked, setChecked] = useState(false);
    const [userDetail, setUserDetail] = useState({
        email: '',
        fname: '',
        lname: '',
        address: '',
        num: '',
        postalCode: '',
        phone: ''
    })

    const handleCheckBox = (event) => {
        setChecked(event.target.checked);
    }

    const handleChange = (event) => {
        const { id, value } = event.target;
        setUserDetail(preValue => {
            return {
                ...preValue,
                [id]: value
            }
        })
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
                    <TextField fullWidth='true' onChange={handleChange} id="fname" placeholder='שם פרטי' margin='dense' variant='outlined' size='small' />
                </ListItemText>
                <ListItemText>
                    <TextField fullWidth='true' id="lname" onChange={handleChange} placeholder='שם משפחה' margin='dense' variant='outlined' size='small' />
                </ListItemText>
            </ListItem>
            <ListItem style={{ textAlign: 'right' }} >
                <TextField fullWidth='true' id="address" placeholder='כתובת' onChange={handleChange} margin='dense' variant='outlined' size='small' />
            </ListItem>
            <ListItem style={{ textAlign: 'right' }} >
                <TextField fullWidth='true' id="num" placeholder='מספר דירה' onChange={handleChange} margin='dense' variant='outlined' size='small' />
            </ListItem>
            <ListItem style={{ textAlign: 'right' }} >
                <TextField fullWidth='true' id="city" placeholder='עיר' margin='dense' onChange={handleChange} variant='outlined' size='small' />
            </ListItem>
            <ListItem style={{ textAlign: 'right' }} >
                <TextField fullWidth='true' id="postalCode" placeholder='מיקוד' onChange={handleChange} margin='dense' variant='outlined' size='small' />
            </ListItem>
            <ListItem style={{ textAlign: 'right' }} >
                <TextField fullWidth='true' id="email" onChange={handleChange} placeholder='דוא"ל' margin='dense' variant='outlined' size='small' />
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
                <TextField fullWidth='true' id="phone" placeholder='טלפון' onChange={handleChange} margin='dense' variant='outlined' size='small' />
            </ListItem>
            <ListItem>
                <Button onClick={handleClick} style={{ backgroundColor: 'black', color: 'white', borderRadius: '0', border: 'solid #ffecda 2px' }}> המשך לבחירת שיטת משלוח </Button>
            </ListItem>
        </List>
    )
}
export default UserDetail;