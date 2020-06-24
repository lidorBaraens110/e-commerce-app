import React from 'react';
import UserDetail from './userDetail';
import { Button, ListSubheader, Grid, Card, TextField, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ThePicture from './addToChart';
import PictureBeforePay from './pictureBeforePay';
import TotalPay from './totalBeforePay';
const BeforeThePay = () => {


    return (
        <Grid container
            spacing={10}
            style={{ marginTop: '5rem' }}
        >
            <Grid
                style={{ padding: '5%' }}
                item
                xs={12} s={7} m={7} lg={7} xl={7}
            >
                <UserDetail />
            </Grid>

            <Grid item style={{
                backgroundColor: '#ffecda', paddingTop: '7rem'
            }}
                xs={12} s={5} m={5} lg={5} xl={5}
            >
                <List>
                    <ListItem>
                        <PictureBeforePay />
                    </ListItem>
                    <ListItem>
                        <TotalPay />
                    </ListItem>
                </List>
            </Grid>
        </Grid>
    )
}
export default BeforeThePay; 