import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';
import { Grid, makeStyles, Typography, Button } from '@material-ui/core';

const categories = ['מכנסיים קצרות', "מכנסיים ארוכות", "חצאיות", "ג'ינסים", "טייצים", "שמלות", "חולצות"]


const useStyle = makeStyles(theme => ({
    // typography: {

    // },
    text: {
        fontSize: '0.8rem',
        lineHeight: '2', cursor: 'pointer'
    },
    header: {

        fontSize: '1.2rem',
        fontWeight: 'bolder',
        color: 'black',
        textDecoration: 'underLine'
    },
    footer: {
        margin: 0,
        paddingBottom: '3rem',
        maxWidth: '100%',
        backgroundColor: '#f1f1f1'
    },
    input: {
        flex: 5,
        borderRadius: '0'
    },
    button: {
        flex: 1,
        backgroundColor: 'black',
        color: '#fff',
        borderRadius: '0',

        border: '1px solid black',
        '&:hover': {
            backgroundColor: '#fff',
            color: 'black',
        }
    },
}));
const Footer = () => {

    const history = useHistory();
    const classes = useStyle();

    const navigateTo = (router) => {
        history.push('/' + router)
    }
    return (

        <Grid className={classes.footer} container spacing={5}>
            <Grid item
                xl={3} lg={3} md={3} s={6} xs={6}>
                <Typography className={classes.header}>קטגוריות</Typography>
                {categories.map((category, i) => {
                    return <Typography
                        key={i}
                        className={classes.text}
                        onClick={() => navigateTo(category)}>
                        {category}
                    </Typography>
                })}
            </Grid>
            <Grid item
                xl={3} lg={3} md={3} s={6} xs={6}>
                <picture />
                <Typography className={classes.header}>מידע נוסף</Typography>
                <Typography className={classes.text} onClick={() => navigateTo('משלוחים-אחריות')}>משלוחים | החלפות</Typography>
                <Typography className={classes.text}>תנאי שימוש</Typography>
                <Typography className={classes.text}>user@gmail.com</Typography>

            </Grid>
            <Grid item
                xl={6} lg={6} md={6} s={12} xs={12}>
                <Typography className={classes.header}>לבירורים ושאלות</Typography>
                <div style={{ margin: '1rem 0' }}>
                    <FacebookIcon fontSize='large' style={{ marginLeft: '0.5rem' }} />
                    <InstagramIcon fontSize='large' />
                </div>

                <Typography className={classes.text} style={{ color: 'blue' }}>הצטרפי לקבלת עדכונים, הנחות ומבצעים.</Typography>

                <form style={{ display: 'flex', flexDirection: 'row' }} >
                    <TextField className={classes.input} label='כתובת דוא"ל' variant='outlined' size='small' fullWidth={true} />
                    <Button variant='outlined' className={classes.button} className={classes.button}>הירשם</Button>
                </form>
            </Grid>
        </Grid>


    )
}

export default Footer;