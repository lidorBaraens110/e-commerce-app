import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { ListItem, List, Divider, ListItemText, ListItemIcon } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import SearchIcon from '@material-ui/icons/Search';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link, useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    drawerPaper: { width: 'inherit', backgroundColor: '#ffecda' },
    linkButton: { color: 'black', textDecoration: 'none' },
    socialMedia: { display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' },
    container: {
        width: '350px',
        [theme.breakpoints.down('xs')]: {
            width: '50vw'
        }
    },
    listItemText: {
        flex: 1,
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.8rem'
        }
    },
    SearchItem: {

    }
}));


const MenuDrawer = ({ handleSideBar, open, onClose }) => {


    const history = useHistory();
    const classes = useStyles();

    const types = ['מכנסיים קצרות', "מכנסיים ארוכות", "חצאיות", "ג'ינסים", "טייצים", "שמלות", "חולצות"]

    const navigateTo = (type) => {
        handleSideBar()
        history.push(`/items/${type}`)

    }



    return (

        <Drawer onClose={onClose} className={classes.container}
            classes={{ paper: classes.drawerPaper }} anchor="left" open={open} >
            <HighlightOffIcon style={{ cursor: 'pointer', position: 'absolute', left: 2, top: 2 }} fontSize='small' onClick={handleSideBar} />
            <List style={{ paddingTop: 0, width: '100%', }} >

                <ListItem button onClick={handleSideBar} className={classes.SearchItem}>
                    <ListItemText classes={{ primary: classes.listItemText }} primary={'חיפוש'} />
                    <ListItemIcon style={{ flex: '5 1 50%' }}>
                        <SearchIcon fontSize='small' />
                    </ListItemIcon>
                </ListItem>
                <Divider />


                <ListItem button onClick={() => navigateTo('new Collection')} >
                    <ListItemText classes={{ primary: classes.listItemText }} primary={'New Collection'} />
                </ListItem>


                <Divider />

                {types.map((type, i) => {
                    return (
                        <div key={i} >
                            <ListItem button onClick={() => navigateTo(type)}>
                                <ListItemText classes={{ primary: classes.listItemText }} primary={type} />
                            </ListItem>
                            <Divider />
                        </div>
                    )
                })}

                <Divider />
                <Link to='/sale' className={classes.linkButton}>
                    <ListItem button >
                        <ListItemText classes={{ primary: classes.listItemText }} onClick={handleSideBar} primary={'Sale'} />
                    </ListItem>
                </Link>
                <Divider />
                <Link to='/about' className={classes.linkButton}>
                    <ListItem button >
                        <ListItemText classes={{ primary: classes.listItemText }} onClick={handleSideBar} primary={'About us'} />
                    </ListItem>
                </Link>
                <Divider />
                <Link className={classes.linkButton} to='/משלוחים-אחריות'>
                    <ListItem button ><ListItemText classes={{ primary: classes.listItemText }} onClick={handleSideBar} primary={'משלוחים והחזרות'} />
                    </ListItem>
                </Link>
                <Divider />
                <ListItem className={classes.socialMedia}>
                    <FacebookIcon />
                    <InstagramIcon />
                </ListItem>
            </List>
        </Drawer>

    )
}

export default MenuDrawer;