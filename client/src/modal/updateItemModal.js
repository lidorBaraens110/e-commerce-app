import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, makeStyles } from '@material-ui/core';

import CommonItem from '../component/common/CommonItem/commonItem';
import axios from 'axios';
import { updateItem } from '../redux/actions';
import { useDispatch } from 'react-redux';


const useStyles = makeStyles({
    dialogStyle: {
        position: 'relative'
        // minWidth: '80vw'
    }
})


function UpdateItemModal({ modalState, handleClose, itemId, lastColor }) {

    const dispatch = useDispatch()

    const [item, setItem] = useState({})
    const [loaded, setLoaded] = useState(false);

    const classes = useStyles()


    useEffect(() => {

        setLoaded(false)
        async function fetchItem() {
            try {
                const { data } = await axios.get('http://localhost:5000/api/getItemById/' + itemId)
                console.log(1)
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
        console.log(currentColor)
        console.log(lastColor)
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
        handleClose()
    }

    return (

        <Dialog fullWidth={true} classes={{ paper: classes.dialogStyle }} maxWidth='md' open={modalState} onClose={handleClose} style={{ padding: '3rem' }}>
            {loaded &&

                <CommonItem item={item} update={true} lastColor={lastColor} handleCart={handleUpdateCart} />

            }
            {/* <div style={{ margin: '0 1rem' }}>
                <Typography style={{ color: 'gray', padding: '1rem 0', fontSize: '0.8rem' }}>{item.type} / {item.name}</Typography>
                <div style={{ display: 'flex ' }}>
                    <div style={{ flex: 4, marginLeft: '1rem' }}>
                        <DisplayItem images={currentColor && item.oneSize.colors[currentColor].images}
                            currentImage={currentImage}
                            handleMouseOver={handleMouseOver}
                            avatarImage={item.oneSize.colors[currentColor].images[currentImage].url}
                        />
                    </div>
                    <div style={{ flex: 3, padding: '0 1rem', marginRight: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                        <div>
                            <Typography>{item.name}</Typography>
                            <Typography style={{ fontSize: '0.8rem', color: 'gray' }}>sku: {item.modelNumber}</Typography>

                            <Typography style={{ fontSize: '1.5rem', fontWeight: 'bolder' }}>&#8362;{item.price}.00</Typography>

                        </div>
                        <br />
                        <div>
                            <hr
                                style={{ border: 'none', borderTop: '1px #e5e5e5 dashed' }}
                            />
                        </div>
                        <br />
                        <Typography>צבע: {item.oneSize.colors[currentColor].color}</Typography>
                        <br />

                        <SideColor colors={item.oneSize.colors} currentColor={currentColor} handleClickColor={handleClickColor} />
                        <br />
                        <br />
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <Typography style={{ fontSize: '1.5rem' }}>One Size</Typography>
                            <div style={{ display: 'flex', color: 'blue' }}>

                                <HeightIcon onClick={() => setDialogState(true)} style={{ cursor: 'pointer' }} />

                                <Typography onClick={() => setDialogState(true)} style={{ cursor: 'pointer', textDecoration: 'under-line' }}>טבלת מידות</Typography>
                            </div>
                        </div>

                        <div style={{ display: 'flex', marginTop: '2rem ' }}>
                            <Button className={classes.cartButton} onClick={() => handleAddToCart()}> הוסף לסל</Button>
                            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                               
                                <FavoriteBorderIcon fontSize='large' />
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </Dialog>
    );
}

export default UpdateItemModal;

