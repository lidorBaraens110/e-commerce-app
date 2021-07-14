// בדיקה לתצוגה מקדימה של הפריט

import React, { useEffect, useState } from 'react';

import { DialogTitle, Dialog, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import ExtentTable from './ExtentTableBeforeUpload';
import SideImages from './SideImages';
import SideColor from './SideColor';
import ItemCard from './ItemCard';

const ItemBeforeUpload = ({ init }) => {

    const item = useSelector(state => state.item)
    const [dialogState, setDialogState] = useState(false)
    const [currentImage, setCurrentImage] = useState('')
    const [currentColor, setCurrentColor] = useState('')

    const handleMouseOver = (i) => {
        setCurrentImage(i)
    }
    const handleClickColor = (color) => {
        setCurrentColor(color)
        if (item.oneSize.colors[currentColor].images) {
            setCurrentImage(0)
        } else {
            setCurrentImage('')
        }
    }

    useEffect(() => {
        var color = item.oneSize.colors
        if (color[Object.keys(color)[0]]) {
            setCurrentColor(Object.keys(color)[0]);
            setCurrentImage(0)
        } else {
            setCurrentColor('')
            setCurrentImage('')
        }
    }, [item.oneSize.colors])

    useEffect(() => {
        setCurrentImage('')
        setCurrentColor('')
    }, [init])
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <DialogForm open={dialogState} onClose={() => setDialogState(false)} extentTable={item.oneSize.extent} />
            <h3 >{item.sizeType}</h3>
            <div style={{ display: 'flex', flexDirection: 'row', position: 'relative' }}>
                <SideImages images={currentColor && item.oneSize.colors[currentColor].images} currentImage={currentImage} handleMouseOver={handleMouseOver} />
                <ItemCard
                    discount={item.discount}
                    avatarImage={currentColor && item.oneSize.colors[currentColor].images[currentImage]}
                    name={item.name} description={item.description}
                    price={item.price}
                />
                <SideColor colors={item.oneSize.colors} currentColor={currentColor} handleClickColor={handleClickColor} />
            </div>
            <div>
                <div>
                    תיאור : {item.description}
                </div>
                <div>
                    סוג: {item.type}
                </div>
                <Button onClick={() => setDialogState(true)}>טבלת מידות</Button>
            </div>
        </div>
    )
}

export default ItemBeforeUpload;

const DialogForm = ({ onClose, open, extentTable }) => {
    return <Dialog open={open} onClose={onClose} style={{ padding: '3rem' }}>
        <DialogTitle style={{ textAlign: 'right', margin: '2rem 2rem 0' }}>טבלת מידות</DialogTitle>
        <ExtentTable extent={extentTable} />

    </Dialog>
}