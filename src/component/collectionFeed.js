import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import PictureCard from './pictureCard';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import allClothes from '../data/allClothes';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { FaShoppingBag } from 'react-icons/fa';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
function CollectionFeed() {

    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    useEffect(() => {
        console.log(users);
    }, [])
    const [users, setUsers] = useState(allClothes);
    const handleMouseOver = (id) => {
        // setUsers(preValue => {
        //     console.log()
        //     return { ...preValue, [preValue[id]]: { fname: 's;ms' } }
        // })
    }


    return (

        <div style={{ textAlign: 'center', marginTop: '7rem', zIndex: '1' }}>
            <h3 className='home'>new collection</h3>
            <div style={{ borderTop: 'solid black 1px', borderBottom: 'solid black 1px', textAlign: "left", padding: '0.5rem' }}>
                <FormControl style={{ minWidth: '15rem', padding: '1rem' }}>
                    <Select
                        style={{ marginRight: '2rem' }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <InputLabel id="demo-simple-select-label" style={{ marginLeft: '5rem' }}  >סינון לפי</InputLabel>
                </FormControl>

            </div>
            <Grid
                container
                spacing={5}
                style={{ padding: '3% 7% 3% 7%', textAlign: 'center' }}>
                {users.map(item => {
                    return (
                        <Grid
                            key={item.id}
                            item
                            xs={12} sm={6} md={4} lg={3} xl={3}>

                            <PictureCard
                                onMouseOver={handleMouseOver}
                                id={item.id}
                                key={item.id} src={item.allPicture[0]}
                                fName={item.fName} lName={item.lName}
                                price='ש"ח 15' id={item.id} />
                            <CardActions style={{ padding: '0', display: 'flex', textDecoration: 'none', justifyContent: 'space-between' }} >
                                <IconButton style={{ padding: '0' }} aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <Link to={{
                                    pathname: "/add-to-chart",
                                    state: item
                                }}>
                                    <Button >
                                        <p style={{ fontSize: '0.7rem', marginTop: '0.5rem', marginRight: '1.5rem' }}>add to chart</p>
                                        <IconButton aria-label='add to chart' style={{ padding: '0' }}>
                                            <FaShoppingBag />
                                        </IconButton>
                                    </Button>
                                </Link>
                            </CardActions>
                        </Grid>
                    )
                })}
            </Grid>
        </div >
    );
}

export default CollectionFeed;
