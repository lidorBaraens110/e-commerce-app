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
        borderBottom: 'solid black 1px',
        paddingTop: '4rem'

    }
}));

const TotalPay = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.container}
            spacing={5}>
            <Grid item
                xs={6} s={6} m={6} lg={6} xl={6} style={{ textAlign: 'right', alignItems: 'center' }}>
                <h3 style={{ fontWeight: '500' }}>סך הכל</h3>
                <p >כולל מע"מ 108 ש"ח</p>

            </Grid>
            <Grid item
                xs={6} s={6} m={6} lg={6} xl={6} style={{ textAlign: 'left' }}>
                <p>מחיר</p>
            </Grid>
        </Grid>
    );
}
export default TotalPay;