import React from 'react';
import { ListItem, List, Typography, Grid, IconButton, makeStyles } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { MdExpandMore } from 'react-icons/all';
import useStyles from './style';

function CartList({
    cart,
    sum,
    handleQuantity,
    removeFromCart,
    handleNavigate,
    updateItem,
}) {

    const classes = useStyles();
    const theme = useTheme()
    const mobileView = useMediaQuery(theme.breakpoints.down('xs'))

    return (
        <List className={classes.ListContainer}>
            {cart.map((item, i) => {
                return <ListItem key={i} >
                    <Grid container spacing={2} className={classes.gridContainer}>
                        <Grid item sm={4} xs={4} md={4} lg={4} xl={4}>
                            <img className={classes.image} src={item.image} />
                        </Grid>
                        <Grid item sm={4} xs={4} md={4} lg={4} xl={4}
                            className={classes.middleGridItem}>
                            <Typography className={classes.linkTypography}
                                onClick={() => handleNavigate(item.id)}>{item.name}</Typography>
                            <div onClick={() => updateItem(item)} className={classes.containerColor}>
                                <div style={{
                                    backgroundColor: item.codeColor,
                                }} className={classes.color} />
                                <MdExpandMore />
                            </div>
                            <div className={classes.quantityContainer}>
                                <AddIcon fontSize={mobileView ? 'small' : 'default'} className={classes.quantityIcon}
                                    onClick={() => handleQuantity({ id: item.id, quantity: 1, currentColor: item.currentColor })}
                                />
                                <div className={classes.containerNumber}>
                                    <Typography className={classes.typographyNumber}>
                                        {item.quantity}
                                    </Typography>
                                </div>
                                <RemoveIcon
                                    onClick={() => handleQuantity({ id: item.id, quantity: -1, currentColor: item.currentColor })}
                                    fontSize={mobileView ? 'inherit' : 'default'}
                                    className={classes.quantityIcon} />
                            </div>
                        </Grid>
                        <Grid item sm={4} xs={4} md={4} lg={4} xl={4}
                            className={classes.lastGrid}>
                            <Typography className={classes.price}>
                                {sum({ price: item.price, quantity: item.quantity })}.00 &#8362;</Typography>
                            {item.alert && item.totalQuantity < item.quantity && <Typography className={classes.alertTypography}>{item.totalQuantity > 0 ? `*נשאר במלאי ${item.totalQuantity} פריטים` : 'אזל בלאי'}</Typography>}
                            <IconButton
                                size={mobileView ? 'small' : 'medium'}
                                onClick={() => removeFromCart({ id: item.id, currentColor: item.currentColor })}
                            >

                                <DeleteIcon />
                            </IconButton>
                        </Grid>

                    </Grid>
                </ListItem>
            })}
        </List>
    );
}

export default CartList;