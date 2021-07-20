import React from 'react';
import {
    Button, TextField, List,
    ListItem, Typography, ListItemText,

} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { editDetail } from '../../redux/actions';


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

const UserDetail = ({ buyItems }) => {
    const classes = useStyles()
    const dispatch = useDispatch();
    const userDetail = useSelector(state => state.userDetail)

    const handleChange = (event) => {
        const { id, value } = event.target;
        let name = id;
        dispatch(editDetail({ value, name }))
    }


    return (
        <form onSubmit={buyItems}>
            <List>
                <ListItem >
                    <Typography style={{ fontSize: '1.5rem', color: 'black' }}>מילוי פרטים</Typography>

                </ListItem>
                {/* <ListItem  >
                    <Typography style={{ fontSize: '1rem', color: 'black' }}>משלוח boxit חינם</Typography>
                </ListItem> */}
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
                        <TextField required fullWidth type='number' id="num" onChange={handleChange} label='מספר דירה' margin='dense' variant='outlined' value={userDetail.num} size='small' />
                    </ListItemText>
                </ListItem>
                <ListItem  >
                    <ListItemText style={{ marginLeft: '1rem' }}>
                        <TextField required fullWidth onChange={handleChange} id="city" value={userDetail.city} label='עיר' margin='dense' variant='outlined' size='small' />
                    </ListItemText>
                    <ListItemText>
                        <TextField required fullWidth type='number' id="postalCode" onChange={handleChange} label='מיקוד' margin='dense' variant='outlined' value={userDetail.postalCode} size='small' />
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <TextField required type='email' fullWidth id="email" onChange={handleChange} label='דוא"ל' value={userDetail.email} margin='dense' variant='outlined' size='small' />
                </ListItem>
                <ListItem>
                    <TextField required fullWidth id="phone" type='number' value={userDetail.phone} label='טלפון' onChange={handleChange} margin='dense' variant='outlined' size='small' />
                </ListItem>
                <ListItem>
                    <Button type='submit' className={classes.cartButton}> המשך לתשלום </Button>
                </ListItem>
            </List>
        </form>
    )
}
export default UserDetail;