import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { ListItem, List, Divider, Input, ListItemText, ListItemIcon, TextField } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import SearchIcon from '@material-ui/icons/Search';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Link } from 'react-router-dom';
import { selectType } from '../../actions/index';

const useStyles = makeStyles((theme) => ({
    drawerPaper: { width: 'inherit', backgroundColor: '#ffecda' },
    linkButton: { color: 'black', textDecoration: 'none' }
}));


const TheDrawer = ({ handleSideBar, open, onClose }) => {
    const classes = useStyles();
    const [expandBody, setExpand] = useState(false);
    const [expandClothe, setExpandClothe] = useState(false);
    const bodyBuild = ['אגסי', 'שעון חול', 'מלבני', 'משולש הפוך'];
    const clothe = ['מכנס', 'חולצה', 'בגד ים', 'שמלה'];

    return (
        <Drawer onClose={onClose} style={{ width: "350px" }}
            classes={{ paper: classes.drawerPaper }} anchor="right" open={open}  >
            <List className='text'>
                <HighlightOffIcon style={{ cursor: 'pointer' }} onClick={handleSideBar} />

                <Link to="/search">
                    <ListItem button style={{ textAlign: 'right' }} onClick={handleSideBar}>
                        <ListItemIcon><SearchIcon /> </ListItemIcon>
                        <ListItemText primary={'חיפוש'} />
                    </ListItem>
                </Link>
                <Divider />

                <Link to={{
                    pathname: '/feed',
                    state: 'new Collection'
                }} className={classes.linkButton}>
                    <ListItem button style={{ textAlign: 'right' }} onClick={handleSideBar} >
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
                    <ListItemText primary={'מבנה גוף'} />
                    < ListItemIcon > {expandBody ? <RemoveIcon /> : <AddIcon />}</ ListItemIcon>
                </ListItem>
                {
                    expandBody && <List>
                        {bodyBuild.map(detail => {
                            return (
                                <Link

                                    key={detail} to={{
                                        pathname: detail,
                                        state: detail
                                    }} className={classes.linkButton}>
                                    <ListItem onClick={handleSideBar} button style={{ textAlign: 'right' }}>
                                        <ListItemText primary={detail} />
                                    </ListItem>
                                </Link>
                            )
                        })}
                    </List>
                }
                <Divider />
                <ListItem
                    button
                    style={{ textAlign: 'right' }}
                    onClick={() => setExpandClothe(preValue => {
                        return !preValue
                    })}>
                    <ListItemText primary={'בגדים'} />
                    < ListItemIcon > {expandClothe ? <RemoveIcon /> : <AddIcon />}</ ListItemIcon>
                </ListItem>

                {
                    expandClothe && <List>
                        {clothe.map(detail => {
                            return (
                                <Link

                                    key={detail} to={{
                                        pathname: detail,
                                        state: detail
                                    }} className={classes.linkButton}>
                                    <ListItem onClick={handleSideBar} button style={{ textAlign: 'right' }}>
                                        <ListItemText primary={detail} />
                                    </ListItem>
                                </Link>
                            )
                        })}
                    </List>
                }
                <Divider />
                <Link to='/sale' className={classes.linkButton}>
                    <ListItem button style={{ textAlign: 'right' }}><ListItemText onClick={handleSideBar} primary={'Sale'} />
                    </ListItem>
                </Link>
                <Divider />
                <Link to='/about' className={classes.linkButton}>
                    <ListItem button style={{ textAlign: 'right' }}>
                        <ListItemText onClick={handleSideBar} primary={'About us'} />
                    </ListItem>
                </Link>
                <Divider />
                <Link className={classes.linkButton} to='/משלוחים-אחריות'>
                    <ListItem button style={{ textAlign: 'right' }}><ListItemText onClick={handleSideBar} primary={'משלוחים והחזרות'} />
                    </ListItem>
                </Link>
                <Divider />
                <ListItem style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <FacebookIcon style={{ color: 'gray', marginLeft: '1rem' }} />
                    <InstagramIcon style={{ color: 'gray' }} />
                </ListItem>
            </List>
        </Drawer >
    )
}

export default TheDrawer;