import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FaShoppingBag } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
import Drawer from '@material-ui/core/Drawer';
import { ListItem, List, Divider, ListItemText, ListItemIcon, ExpansionPanelDetails } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import SearchIcon from '@material-ui/icons/Search';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Link, BrowserRouter as Router } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    drawerPaper: { width: 'inherit', backgroundColor: '#ffecda' }
}));
const Heading = (prop) => {
    const classes = useStyles();
    const [sideBar, setSideBar] = useState(false);
    const [expand, setExpand] = useState(false);
    const clothesDetails = ['מבנה גוף אסי', 'מבנה גוף שעון חול', 'מבנה גוף מלבני', 'מבנה גוף משולש הפוך'];
    const handleSideBar = () => {
        setSideBar(preValue => !preValue);
    }
    return (
        <Router>
            <div>
                <Drawer style={{ width: "350px" }} classes={{ paper: classes.drawerPaper }} anchor="right" open={sideBar}  >
                    <List className='text'>
                        <HighlightOffIcon style={{ cursor: 'pointer' }} onClick={handleSideBar} />
                        <ListItem button style={{ textAlign: 'right' }}>
                            <ListItemIcon><SearchIcon /> </ListItemIcon>
                            <ListItemText primary={'חיפוש'} />
                        </ListItem>
                        <Divider />

                        <Link to='/feed' color=''>
                            <ListItem button style={{ textAlign: 'right' }} >
                                <ListItemText primary={'New Collection'} />
                            </ListItem>
                        </Link>

                        <Divider />

                        <ListItem
                            button
                            style={{ textAlign: 'right' }}
                            onClick={() => setExpand(preValue => {
                                return !preValue
                            })}>
                            <ListItemText primary={'Clothes'} />
                            <ListItemIcon>{expand ? <RemoveIcon /> : <AddIcon />}</ListItemIcon>

                        </ListItem>
                        {
                            expand && <List>
                                {clothesDetails.map(detail => {
                                    return (
                                        <Link to={`בגדים/${detail}`}>
                                            <ListItem key={detail} button style={{ textAlign: 'right' }}>
                                                <ListItemText primary={detail} />
                                            </ListItem>
                                        </Link>
                                    )
                                })}
                            </List>
                        }
                        <Divider />
                        <Link to='/sale'>
                            <ListItem button style={{ textAlign: 'right' }}><ListItemText primary={'Sale'} />
                            </ListItem>
                        </Link>
                        <Divider />
                        <Link to='/מי-אנחנו'>
                            <ListItem button style={{ textAlign: 'right' }}>
                                <ListItemText onClick={handleSideBar} primary={'About us'} />
                            </ListItem>
                        </Link>
                        <Divider />
                        <Link to='/משלוחים-אחריות'>
                            <ListItem button style={{ textAlign: 'right' }}><ListItemText primary={'משלוחים והחזרות'} />
                            </ListItem>
                        </Link>
                        <Divider />
                        <ListItem style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                            <FacebookIcon style={{ color: 'gray', marginLeft: '1rem' }} />
                            <InstagramIcon style={{ color: 'gray' }} />
                        </ListItem>

                    </List>
                </Drawer>



                <h2 style={styles.aboveHeading}>בקנייה מעל 199 ש"ח משלוחים חינם</h2>
                <header className={prop.className} style={prop.styles}>
                    <div
                        style={{ cursor: 'pointer' }}
                        onClick={() => { setSideBar(true) }}
                    >
                        <AiOutlineMenu />
                    </div>
                    <h1>
                        kori
                </h1>
                    <FaShoppingBag />
                </header>
            </div>
        </Router>
    )
}

const styles = {
    aboveHeading: {
        position: "sticky",
        backgroundColor: "black",
        fontSize: "20px",
        fontWeight: "600",
        color: "white",
        textAlign: "center"
    }
}


export default Heading;