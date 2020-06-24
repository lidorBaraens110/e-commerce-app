import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: '5%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottom: 'solid black 1px'

    },
    media: {
        height: 0,
        paddingTop: '56.25%'
    },
}));

const PictureBeforePay = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.container}
            spacing={5}  >
            <Grid item
                xs={5} s={5} m={5} lg={3} xl={5}>
                <Card style={{ padding: '0 5% 0 5%' }}>
                    <CardMedia style={{

                        paddingTop: '100%'
                    }} image='https://images.unsplash.com/photo-1573935146153-f6322e84d1e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' />
                </Card>
            </Grid>
            <Grid item
                xs={3} s={3} m={3} lg={3} xl={3} style={{ textAlign: 'right', alignItems: 'center' }}>
                <p>שם התמונה</p>
            </Grid>
            <Grid item
                xs={4} s={4} m={5} lg={6} xl={6} style={{ textAlign: 'left' }}>
                <p>מחיר</p>
            </Grid>
        </Grid>

    );
}
export default PictureBeforePay;