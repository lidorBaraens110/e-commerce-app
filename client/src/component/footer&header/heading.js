import React, { useState, useEffect, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { Button, Grid, IconButton, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { animated, useSpring } from 'react-spring';
import { toggle } from '../../redux/actions';
import { FaShoppingCart } from 'react-icons/all'
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MenuDrawer from '../drawer/MenuDrawer';
import CartDrawer from '../drawer/CartDrawer';


const types = ['מכנסיים קצרות', "מכנסיים ארוכות", "חצאיות", "ג'ינסים", "טייצים", "שמלות", "חולצות"]

const useStyle = makeStyles(theme => ({
    header: {
        position: 'sticky',
        width: '100%',
        top: '0',
        maxWidth: '100%',
        padding: 0,
        margin: 0,
        zIndex: 1000,
    },
    midHeader: {
        backgroundColor: '#F9F9F9',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 2rem',
        [theme.breakpoints.down('xs')]: {
            padding: '0 0.5rem',
            borderBottom: '1px solid #d3d3d3'
        }
    },
    logoContainer: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        cursor: 'pointer',
        textAlign: 'center',
        fontSize: '3.5rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.5rem'
        }
    },
    topHeader: {
        margin: 0,
        backgroundColor: "#202020",
        color: "white",
        textAlign: "center",
        padding: '0.8rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.6rem',
            fontWeight: 600,
            padding: '0.3rem'
        }
    },
    categories: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.3rem 3rem',
        backgroundColor: '#F4F4F4'
    },
    cartAndWishListContainer: {
        position: 'relative',
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    wishListAndCart: {
        marginRight: '0.5rem',
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    containerQuantity: {
        position: 'absolute',
        backgroundColor: 'red',
        display: 'flex',
        width: '0.7rem',
        height: '0.7rem',
        borderRadius: '100%',
        left: -3,
        top: -2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    quantity: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: "#FFFFFF",
        fontSize: '0.5rem',
    },
    cursor: {
        cursor: 'pointer',
        fontSize: '1.5rem',
        color: 'gray',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem'
        }
    },
    input: {
        border: '1px solid black',
        padding: '0.5rem',
        backgroundColor: 'white',
        outline: 'none',
        '&:focus': {
            borderRadius: '0',
        }
    },
    form: {
        display: 'flex', alignItems: 'center', justifyContent: 'flex-end'
    }
}))

const Heading = (prop) => {

    const location = useLocation();
    const dispatch = useDispatch()
    const classes = useStyle();
    const theme = useTheme()
    const history = useHistory();
    const mobileView = useMediaQuery(theme.breakpoints.down('xs'));
    const cartToggle = useSelector(state => state.cartToggle)
    const [headingState, setHeadingState] = useState(true);
    const cartListLength = useSelector(state => state.cart.length)
    const wishListLength = useSelector(state => state.wishList.length)
    const [y, setY] = useState(0)
    const [sideBar, setSideBar] = useState(false);
    const [inputSearch, setInputSearch] = useState('')

    const styles = useSpring({
        transform: !headingState &&
            !mobileView ? `translateY(-100%)` :
            `translateY(-1%)`
    })


    const handleNavigation = (param) => {
        history.push('/' + param)
    };

    const handleSideBar = () => {
        setSideBar(preValue => !preValue);
    }
    const handleNavigationItems = (type) => {
        history.push('/items/' + type)
    }


    const handleScroll = useCallback(
        e => {
            const window = e.currentTarget;
            if (y > window.scrollY) {
                setHeadingState(true)
            } else if (y < window.scrollY && y > 100) {
                setHeadingState(false)
            }
            setY(window.scrollY);
        }, [y]
    );


    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll])


    const goToSearchPage = (e) => {
        e.preventDefault()
        history.push(`/items/${inputSearch}`)
    }
    const handleInput = (e) => {
        setInputSearch(e.target.value)
    }

    return (
        <>
            <MenuDrawer handleSideBar={handleSideBar} open={sideBar} onClose={handleSideBar} />
            <CartDrawer open={cartToggle} />
            {mobileView && <Typography className={classes.topHeader}>משלוח חינם בקנייה מעל 199 &#8362;</Typography>}
            <animated.header style={styles} className={classes.header}>
                {!mobileView && <Typography className={classes.topHeader}>משלוח חינם בקנייה מעל 199 &#8362;</Typography>}
                <div className={classes.midHeader}>
                    {mobileView ?
                        <div style={{ flex: 1, display: 'flex', textAlign: 'right', alignItems: 'center' }}>
                            <MenuIcon fontSize='small' className={classes.cursor} onClick={() => setSideBar(true)} />
                        </div> : <div style={{ flex: 1 }} />
                    }


                    <div className={classes.logoContainer}>
                        <Typography
                            onClick={() => handleNavigation('')}
                            className={classes.logo}  >
                            Mono
                        </Typography>
                    </div>

                    <div className={classes.cartAndWishListContainer}>

                        <div className={classes.wishListAndCart} >

                            {wishListLength > 0 && <div className={classes.containerQuantity}>
                                <Typography className={classes.quantity}>
                                    {wishListLength}
                                </Typography>
                            </div>
                            }
                            <FavoriteIcon
                                fontSize={mobileView ? 'small' : 'default'}
                                className={classes.cursor}
                                onClick={() => handleNavigation('wishList')} />
                        </div>
                        <div className={classes.wishListAndCart}>
                            {cartListLength > 0 &&
                                <div className={classes.containerQuantity}>
                                    <Typography className={classes.quantity}>
                                        {cartListLength}
                                    </Typography>
                                </div>
                            }
                            <FaShoppingCart
                                className={classes.cursor}
                                fontSize={mobileView ? 'small' : 'default'}
                                onClick={() => mobileView ? handleNavigation('cart') : location.pathname !== '/creditCard' ? dispatch(toggle()) : alert('לא ניתן לשנות את פרטי העגלה בזמן הרכישה')} />
                        </div>
                    </div>
                </div>
                {!mobileView && <div className={classes.categories}>
                    <div >
                        <Button onClick={() => handleNavigationItems('new Collection')}>קולקציה חדשה</Button>
                        {types.map((type, i) => {
                            return <Button key={i} onClick={() => handleNavigationItems(type)}>{type}</Button>
                        })}

                    </div>

                    <form onSubmit={goToSearchPage} className={classes.form}>
                        <input
                            className={classes.input}
                            placeholder='חיפוש'
                            value={inputSearch}
                            onChange={handleInput}
                        />
                        <IconButton type='submit' style={{ margin: '0', padding: '0.3rem', borderRadius: 0, backgroundColor: 'black' }}>
                            <SearchIcon style={{ color: 'white' }} />
                        </IconButton>
                    </form>
                </div>
                }
            </animated.header>
        </>
    )
}



export default Heading;