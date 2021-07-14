import React, { useState, useEffect } from 'react';
import CommonItem from '../common/CommonItem/commonItem';
import { Drawer, makeStyles } from '@material-ui/core';
import { updateItem } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const useStyles = makeStyles({
    drawerPaper: { width: '100%', backgroundColor: '#f1f1f1', height: '80vh' },
})
function UpdateItemDrawer({ itemId, lastColor, open, handleDrawerClose }) {

    const dispatch = useDispatch()
    const classes = useStyles();
    const [loaded, setLoaded] = useState(false)
    const [item, setItem] = useState({});

    useEffect(() => {
        setLoaded(false)
        async function fetchItem() {
            try {
                const { data } = await axios.get('http://localhost:5000/api/getItemById/' + itemId)
                console.log(data)
                setItem(data);
                console.log(2)
                setLoaded(true)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchItem()
    }, [itemId])

    const handleUpdateCart = (currentColor) => {

        dispatch(updateItem({
            item: {
                id: item._id,
                quantity: 1,
                currentColor: currentColor,
                image: item.oneSize.colors[currentColor].images[0].url,
                price: item.price,
                totalQuantity: item.oneSize.colors[currentColor].quantity,
                name: item.name,
                codeColor: item.oneSize.colors[currentColor].codeColor
            }, lastColor
        }))
        handleDrawerClose()
    }

    return (
        <Drawer onClose={handleDrawerClose} style={{ width: "350px" }
        }
            classes={{ paper: classes.drawerPaper }} anchor="bottom" open={open} >
            {loaded && item &&
                <CommonItem item={item} update={true} lastColor={lastColor} handleCart={handleUpdateCart} />
            }
        </Drawer>
    );
}

export default UpdateItemDrawer;