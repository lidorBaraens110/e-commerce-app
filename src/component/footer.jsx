import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TextField from '@material-ui/core/TextField';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { Grid, Button, makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
    footer: {
        backgroundColor: '#ffecda',
        color: 'gray',
        lineHeight: '2.5',
        padding: '0 10% 0 5%'
    },
    button: { padding: '1rem 2rem', marginTop: '1rem', backgroundColor: 'black', color: 'white', border: 'solid 1px #white', fontSize: '1rem', fontWeight: 'bold' }
}));
const Footer = () => {
    const classes = useStyle()
    return (
        <Grid className={classes.footer} container spacing={10}>
            <Grid item
                xl={4} lg={4} md={4} s={12} xs={12}>
                <h2 style={{ color: 'black' }}>join to the party</h2>
                <p>הצטרפי לקבלת עדכונים, הנחות ומבצעים.</p>
                <form action='/' >
                    <TextField id="filled-basic" label='...כתובת דוא"ל' variant='outlined' size='small' />
                    <br />
                    <button className={classes.button}>הירשם</button>
                </form>
            </Grid>
            <Grid item
                xl={4} lg={4} md={4} s={12} xs={12}>
                <h2 style={{ color: 'black' }}>לבירורים ושאלות</h2>
                <p>user@gmail.com</p>
                <div style={{ marginTop: '0.5rem' }}>
                    <FacebookIcon style={{ marginLeft: '0.5rem' }} />
                    <InstagramIcon />
                </div>
            </Grid>
            <Grid item
                xl={4} lg={4} md={4} s={12} xs={12}>
                <h2 style={{ color: 'black' }}>מידע נוסף</h2>
                <Router>
                    <Link to="/משלוחים-אחריות">  <p>משלוחים | החלפות</p> </Link>
                    <p>תנאי שימוש</p>
                </Router>
            </Grid>

        </Grid>
    )
}

export default Footer;