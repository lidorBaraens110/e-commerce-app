
import React, { useState } from 'react';
import { Button, Typography, makeStyles, useTheme, useMediaQuery } from '@material-ui/core';

import HeightIcon from '@material-ui/icons/Height';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ControlImages from './controlImages';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles(theme => ({
    container: {
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center',
            padding: '1rem'
        }
    },
    topContainer: {

    },
    sku: {
        marginBottom: '0.5rem',
        fontSize: '0.8rem', color: 'gray',
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    price: {
        marginBottom: '0.5rem',
        fontSize: '1.5rem', fontWeight: 'bolder',
        [theme.breakpoints.down('xs')]: {
            margin: '0.5rem',
            fontSize: '1.3rem'
        }
    },
    hr: {
        border: 'none', borderTop: '1px #e5e5e5 dashed', margin: '1rem 0',
        [theme.breakpoints.down('xs')]: {
            // display: 'none'
        }
    },
    colorContainer: {
        margin: '1rem 0',
        [theme.breakpoints.down('xs')]: {
            textAlign: 'left',
            margin: 0
        }
    },
    colorName: {

        margin: '1.5rem 0',
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.8rem',
            margin: '0.5rem 0',
        }
    },
    containerSizes: {
        margin: '0 0 1rem 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    oneSize: {
        fontSize: '1.5rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem'
        }
    },
    size: {
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.8rem'
        }
    },
    flexSize: {
        display: 'flex',
        color: 'blue',
        alignItems: 'center',
        cursor: 'pointer'
    },
    containerCartBottom: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#fafafa',
        alignItems: 'center',
        margin: '3rem 0',
        [theme.breakpoints.down('xs')]: {
            padding: '0.5rem',
            margin: '0',
        }
    },
    wrapCartBottom: {
        flex: 1,
        [theme.breakpoints.down('xs')]: {
            position: 'fixed',
            width: '100%',
            bottom: '0',
            maxWidth: '100%',
            margin: 0,
            zIndex: 1000,
            right: 0
        }
    },
    cartButton: {
        backgroundColor: 'black',
        fontSize: '1.2rem',
        color: '#fff',
        padding: '0.5rem',
        borderRadius: '0',
        flex: 6,
        border: '1px solid black',
        '&:hover': {
            backgroundColor: '#fff',
            color: 'black',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem',
            padding: '0',
        }
    },

}))

function ItemPageContent({ item, currentColor, handleClickColor, setDialogState, handleCart, update }) {

    const classes = useStyles();
    const theme = useTheme();
    const mobileView = useMediaQuery(theme.breakpoints.down('xs'))
    console.log(item)
    return (
        <div className={classes.container}>
            <div className={classes.topContainer}>
                <Typography style={{ marginBottom: '0.5rem', }}>{item.name}</Typography>
                <Typography className={classes.sku}>sku: {item.modelNumber}</Typography>
                <Typography className={classes.price}>&#8362;{item.price}.00</Typography>
            </div>
            <div>
                <hr className={classes.hr} />
            </div>
            <div className={classes.colorContainer}>
                <Typography className={classes.colorName}>
                    צבע: {item.oneSize.colors[currentColor].color}
                </Typography>
                <ControlImages
                    images={true}
                    colors={item.oneSize.colors}
                    currentColor={currentColor}
                    handleClickColor={handleClickColor}
                />
            </div>
            <br />
            <div className={classes.containerSizes}>
                <Typography className={classes.oneSize}>
                    One Size
                </Typography>
                <div onClick={() => setDialogState(true)}
                    className={classes.flexSize}
                >
                    <HeightIcon fontSize={mobileView ? 'small' : 'default'} />
                    <Typography
                        className={classes.size}
                    >
                        טבלת מידות</Typography>
                </div>
            </div>

            <div className={classes.wrapCartBottom}>
                <div className={classes.containerCartBottom}>
                    <Button className={classes.cartButton} onClick={() => handleCart(currentColor)}>
                        {update ? 'עדכן' : 'הוסף לסל'}
                    </Button>
                    {!item.wishList ? <FavoriteBorderIcon style={{ flex: 1 }} fontSize={mobileView ? 'default' : 'large'} />
                        : <FavoriteIcon style={{ flex: 1, color: 'red' }} fontSize={mobileView ? 'default' : 'large'} />}
                </div>
            </div>
            <div style={{ flex: 1 }}></div>
        </div>
    );
}

export default ItemPageContent;