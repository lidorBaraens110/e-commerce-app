import React, { useState, useEffect } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Card, Grid, Typography, Button, makeStyles, CardMedia, CardActionArea } from '@material-ui/core';
import PictureCard from './pictureCard';
const useStyle = makeStyles(theme => ({
    container: { padding: '3% 10%', textAlign: 'center', marginTop: '5rem' },
    sizeButton: { minWidth: '1.5rem', borderRadius: '0', width: '2.5rem' },
    activeSB: { borderColor: 'blue', minWidth: '1.5rem', borderRadius: '0', width: '2.5rem' },
    aTCButton: {
        padding: '15px 20px 15px 20px',
        marginTop: '1rem', backgroundColor: 'black',
        color: 'white', border: 'solid 1px #white',
        fontSize: '1rem', fontWeight: 'bold'
    }
}))
const AddToChart = (props) => {
    useEffect(() => {
        console.log(props.location.state.avatar)
    }, [])
    const classes = useStyle();
    const [addToChart, setAddToChart] = useState('true')
    const [activeButton, setActiveButton] = useState('false');
    const sizes = ['s', 'm', 'l', 'xl', 'xxl']
    const [counter, setCounter] = useState(1);
    const [clothe, setClothe] = useState(props.location.state)
    return (
        <div style={{ textAlign: 'center' }}>
            <Grid className={classes.container} container spacing={5} >
                <Grid
                    item
                    xs={12} sm={6} md={6} lg={6} xl={6}>
                    <img src={clothe.allPicture[0]} style={{ width: window.innerWidth * 0.3, height: window.innerHeight * 0.7 }} />
                </Grid>
                <Grid
                    style={{ textAlign: 'right' }}
                    item
                    xs={12} sm={4} md={4} lg={4} xl={4}>
                    <Card style={{ boxShadow: 'none', margin: '5% 0 20% 0' }}>
                        <Typography gutterBottom style={{ fontFamily: 'Montserrat' }} variant="h4" component="h2">
                            {clothe.fName}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" style={{ margin: '1rem 0', fontSize: '1.5rem' }}>
                            {clothe.lName}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" style={{ margin: '1rem 0', fontSize: '1.2rem' }}>
                            מחיר
                        </Typography>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography variant="body2" color="textSecondary" component="p" style={{ margin: '1rem 0', fontSize: '1.2rem' }}>
                                מידות
                    </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" style={{ margin: '1rem 0', fontSize: '1.2rem' }}>
                                טבלת מידות
                    </Typography>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', margin: '1rem 0' }}>
                            {sizes.map((size, index) => {
                                return <Button variant='outlined'
                                    key={index}
                                    id={index}
                                    onClick={() => { setActiveButton(preValue => !preValue); console.log(index) }}
                                    key={size} className={activeButton ? classes.activeSB : classes.sizeButton}>{size}</Button>
                            })}
                        </div>
                        <div style={{ fontSize: '1.3rem', width: '5rem', display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', border: 'gray solid 1px' }}>
                            <AddIcon style={{ borderLeft: 'solid 1px' }} onClick={() => setCounter(preValue => preValue + 1)} />
                            <p>{counter}</p>
                            <RemoveIcon style={{ borderRight: 'solid 1px' }} onClick={() => setCounter(preValue => preValue > 1 ? preValue - 1 : 1)} />
                        </div>
                        {addToChart === 'true' ?
                            <button onClick={() => setAddToChart('false')} className={classes.aTCButton}>
                                הוספה לסל
                            </button>
                            : (<div style={{ display: 'flex', flexDirection: 'row' }}><button className={classes.aTCButton}>
                                לקופה
                    </button><button style={{ marginRight: '1rem' }} className={classes.aTCButton}>
                                    המשך בקניה
                    </button> </div>)}

                    </Card>
                </Grid>
            </Grid >
            <h1 style={{ marginBottom: '2rem', borderTop: 'solid black 1px', borderBottom: 'solid black 1px' }}>BUY THE LOOK</h1>
            {/* <Grid container spacing={10}>
                <Grid
                    item
                    xs={12} sm={6} md={4} lg={3} xl={3}>
                    <PictureCard src='https://images.unsplash.com/photo-1573935146153-f6322e84d1e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' />
                </Grid>
                <Grid
                    item
                    xs={12} sm={6} md={4} lg={3} xl={3}>
                    <PictureCard src='https://images.unsplash.com/photo-1573935146153-f6322e84d1e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' />
                </Grid>

            </Grid> */}
        </div >
    )
}

export default AddToChart;