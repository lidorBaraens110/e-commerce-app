import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FaShoppingBag } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
import Drawer from '@material-ui/core/Drawer';
import { ListItem, List, Divider, Fade, Paper, ListItemText, ListItemIcon } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import SearchIcon from '@material-ui/icons/Search';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';


const useStyles = makeStyles((theme) => ({
    drawerPaper: { width: 'inherit' }
}));
const Heading = (prop) => {
    const classes = useStyles();
    const [sideBar, setSideBar] = useState(false);
    const [expand, setExpand] = useState(false);
    return (
        <div>
            <Drawer style={{ width: "350px" }} classes={{ paper: classes.drawerPaper }} anchor="right" open={sideBar}  >
                <List>
                    <HighlightOffIcon style={{ cursor: 'pointer' }} onClick={() => setSideBar(false)} />
                    <ListItem button style={{ textAlign: 'right' }}>
                        <ListItemIcon><SearchIcon /> </ListItemIcon>
                        <ListItemText primary={'חיפוש'} />
                    </ListItem>
                    <Divider />
                    <ListItem button style={{ textAlign: 'right' }}><ListItemText primary={'מי אנחנו'} />
                    </ListItem>
                    <Divider />
                    <ListItem button style={{ textAlign: 'right' }}><ListItemText primary={'חדש'} />
                    </ListItem>
                    <Divider />
                    <ListItem
                        button
                        style={{ textAlign: 'right' }}
                        onClick={() => setExpand(preValue => {
                            return !preValue
                        })}>
                        <ListItemIcon>{expand ? <RemoveIcon /> : <AddIcon />}</ListItemIcon>
                        <ListItemText primary={'בגדים'} />
                    </ListItem>
                    {expand && <List><ListItem button style={{ textAlign: 'right' }}><ListItemText primary={'מבנה גוף אגסי'} />
                    </ListItem>
                        <ListItem button style={{ textAlign: 'right' }}><ListItemText primary={'מבנה גוף שעון חול'} />
                        </ListItem>
                        <ListItem button style={{ textAlign: 'right' }}><ListItemText primary={'מבנה גוף מלבני'} />
                        </ListItem>
                        <ListItem button style={{ textAlign: 'right' }}><ListItemText primary={'מבנה גוף משלוש הפוך'} />
                        </ListItem>
                    </List>
                    }
                    <Divider />
                    <ListItem button style={{ textAlign: 'right' }}><ListItemText primary={'sale'} />
                    </ListItem>
                    <Divider />
                    <ListItem button style={{ textAlign: 'right' }}><ListItemText primary={'משלוחים והחזרות'} />
                    </ListItem>
                    <Divider />
                    <ListItem style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>

                        <FacebookIcon style={{ color: 'gray', marginRight: '1rem' }} />
                        <InstagramIcon style={{ color: 'gray' }} />

                    </ListItem>
                    <Divider />
                </List>
            </Drawer>

            <h2 style={styles.aboveHeading}>בקנייה מעל 199 ש"ח משלוחים חינם</h2>
            <header className={prop.className} style={prop.styles}>
                <FaShoppingBag style={{ marginLeft: '20' }} />
                <h1>
                    kori
                </h1>
                <div
                    style={{ cursor: 'pointer' }}
                    onClick={() => { setSideBar(true) }}
                >
                    <AiOutlineMenu style={{ marginRight: '20' }} />
                </div>
            </header>
        </div >

    )
}

const styles = {
    icon: {
        fontSize: "30px"
    },
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



// export default function TemporaryDrawer() {
//   const classes = useStyles();
//   const [state, setState] = React.useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

//   const list = (anchor) => (
//     <div
//       className={clsx(classes.list, {
//         [classes.fullList]: anchor === 'top' || anchor === 'bottom',
//       })}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );

//   return (
//     <div>
//       {['left', 'right', 'top', 'bottom'].map((anchor) => (
//         <React.Fragment key={anchor}>
//           <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
//           <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
//             {list(anchor)}
//           </Drawer>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }
