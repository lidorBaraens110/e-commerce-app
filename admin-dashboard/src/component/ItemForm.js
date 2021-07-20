import React, { useCallback, useState, useMemo, useEffect } from 'react';
import {
    MenuItem,
    FormControl,
    Select,
    InputLabel,
    TextField,
    Button,
    Typography,
    makeStyles
} from '@material-ui/core';
import { useDropzone } from 'react-dropzone';
import { uniqueId } from '../function/uid';
import { storage } from '../firebase';
import ExtentTable from '../common/ExtentTable';
import ColorTable from '../common/ColorTable';

const useStyles = makeStyles({
    text: {
        margin: '1rem',
        flex: 1
    },
    twoInARow: {
        display: 'flex',
        flexDirection: 'row'
    },
    form: {
        padding: '5% 10%', display: 'flex', flexDirection: 'column',
        alignItems: 'space-between', alignContent: 'space-evenly'
    },
    wrapButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '1rem'
    },
    discountDiv: {
        display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', margin: '1rem'
    }
})
const types = ['מכנסיים קצרות', "מכנסיים ארוכות", "חצאיות", "ג'ינסים", "טייצים", "שמלות", "חולצות", "גופיות", "טוניקות"]
const initialColor = {
    codeColor: '#000000',
    color: '',
    quantity: '',
    images: []
}


const ItemForm = ({ newCollection,
    recommended, name, type,
    description, handleClick,
    handleChange, price, sizeType, handleSizeType,
    handleDiscount, discount,
    oneSize, handleAddColor,
    handleRemoveColor, handleAddExtent, handleRemoveExtent,
    modelNumber, onSubmit,
    edit
}) => {

    const classes = useStyles()

    const [newColor, setNewColor] = useState({ ...initialColor });
    const [editColorVal, setEditColorVal] = useState('');
    const [newExtent, setNewExtent] = useState({ name: '', from: 0, until: 0 })

    const onDrop = useCallback(acceptedFiles => {
        acceptedFiles.forEach(file => {
            const path = uniqueId();
            const uploadTask = storage.ref(`/images/${path}.png`).put(file);
            uploadTask.on("state_changed", console.log, console.error, () => {
                storage
                    .ref("images")
                    .child(path + '.png')
                    .getDownloadURL()
                    .then((url) => {

                        setNewColor(preVal => {
                            return { ...preVal, images: [...preVal.images, { path: `/images/${path}.png`, url: url }] }
                        })
                    });
            });
        })
    }, [])


    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
    const handleColorChange = (e) => {
        console.log(e)
        let { name, type, value } = e.target
        if (type === 'number') {
            value = Number(value)
        }
        setNewColor(preVal => {
            return { ...preVal, [name]: value }
        })
    }
    const addColor = (e) => {

        e.preventDefault()
        handleAddColor(editColorVal ? editColorVal : uniqueId(), newColor)
        setNewColor({ ...initialColor })
        setEditColorVal('')
    }
    const editColor = (color, colorId) => {
        console.log('handleColor')
        setNewColor(color)
        setEditColorVal(colorId)
    }
    const removeColor = async (key) => {
        await oneSize.colors[key].images.forEach(async image => {
            await storage.ref(image.path).delete().then(() => {
                console.log('done')
            }).catch(err => console.log(err))
        })
        handleRemoveColor(key)
    }
    const removeImageFromColor = (image) => {
        storage.ref(image.path).delete().then(() => {
            const newImages = newColor.images.filter(img => {
                return img.path !== image.path
            })
            setNewColor(preVal => {
                return { ...preVal, images: newImages }
            })
        }).catch(err => console.log(err))

    }
    const handleExtent = (e) => {
        let { name, value } = e.target;
        if (name !== 'name') {
            value = Number(value)
        }
        setNewExtent(preVal => {
            return { ...preVal, [name]: value }
        })
    }
    const addExtent = (e) => {
        e.preventDefault()
        handleAddExtent(newExtent)
    }
    const removeExtent = (index) => {
        handleRemoveExtent(index)

    }
    const discountSum = () => {
        let finalPrice;
        let disc;
        if (discount.value) {
            if (discount.type == 'אחוז הנחה') {

                disc = price * discount.value / 100
                finalPrice = price - disc;

            } else if (discount.type == 'ש"ח הנחה') {
                disc = discount.value
                finalPrice = price - disc
            }
        }
        handleDiscount('discount', disc)
        handleDiscount('finalPrice', finalPrice)
    }
    const handleChangeDiscount = (e) => {
        const { name, value } = e.target;
        handleDiscount(name, value)
    }

    return (
        <form onSubmit={onSubmit} className={classes.form}>
            <div className={classes.twoInARow}>
                <FormControl required variant="outlined" className={classes.text}>
                    <InputLabel id="demo-simple-select-label">סוג</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id='type'
                        name='type'
                        value={type}
                        onChange={handleChange}
                    >
                        {types.map(type => {
                            return <MenuItem key={type} value={type}>
                                {type}
                            </MenuItem>
                        })}
                    </Select>
                </FormControl>
                <TextField
                    required
                    name="modelNumber"
                    onChange={handleChange} label="מספר דגם"
                    value={modelNumber} variant="outlined"
                    className={classes.text} />
            </div>
            <div className={classes.twoInARow}>
                <TextField
                    required
                    name="name"
                    dir='rtl'
                    onChange={handleChange} label="שם"
                    value={name} variant="outlined"
                    className={classes.text} />
                <div style={{ display: 'flex', flexDirection: 'row', margin: '1rem' }}>
                    <TextField
                        name="price"
                        required
                        InputProps={{ inputProps: { min: 0 } }}
                        type="number"
                        placeholder="מחיר"
                        value={price} onChange={handleChange}
                        label="מחיר" variant="outlined"
                    />
                    <Typography style={{ padding: '1rem' }}> ש"ח</Typography>
                </div>
            </div>

            <div className={classes.wrapButton}>
                <Button style={{ padding: '1rem', backgroundColor: recommended && '#00FFFF' }}
                    onClick={() => handleClick('recommended', !recommended)} variant='outlined'>מומלצים</Button>
                <Button style={{ padding: '1rem', backgroundColor: newCollection && '#00FFFF' }}
                    onClick={() => handleClick('newCollection', !newCollection)} variant='outlined'>קולקציה חדשה</Button>
                <Button style={{ padding: '1rem', backgroundColor: sizeType == 'oneSize' && '#00FFFF' }}
                    onClick={() => handleClick('sizeType', 'oneSize')} variant='outlined'>one Size</Button>
                <Button style={{ padding: '1rem', backgroundColor: sizeType == 'sizes' && '#00FFFF' }}
                    onClick={() => handleClick('sizeType', 'sizes')} variant='outlined'>כמה מידות</Button>
            </div>
            <TextField name='oneSize' style={{ visibility: 'hidden' }} value={oneSize.colors} />
            {sizeType == 'oneSize' &&
                <>
                    {/* היקפים*/}
                    <h5 style={{ textAlign: 'right' }}>מלא היקפים</h5>
                    <ExtentTable
                        handleAddExtent={addExtent}
                        newExtent={newExtent}
                        handleExtent={handleExtent}
                        extent={oneSize.extent}
                        removeExtent={removeExtent}
                    />
                    <h5 style={{ textAlign: 'right', margin: '2rem 0 1rem' }}>מלא כמויות לפי צבעים</h5>
                    {/*צבעים*/}
                    <ColorTable handleAddColor={addColor}
                        newColor={newColor}
                        handleColorChange={handleColorChange}
                        getRootProps={getRootProps}
                        isDragActive={isDragActive}
                        getInputProps={getInputProps}
                        colors={oneSize.colors}
                        removeColor={removeColor}
                        removeImageFromColor={removeImageFromColor}
                        editColor={editColor}
                        edit={editColorVal}
                    />
                </>
            }

            {sizeType == 'sizes' && <div>sizes</div>}
            {/* <TextField> */}
            <div className={classes.discountDiv}>
                <Button variant='outlined' disabled={!price} style={{ backgroundColor: discount.state && 'green', flex: 1 }}
                    onClick={() => handleDiscount('state', !discount.state)}>הנחה</Button>
                <TextField value={discount.value} name='value' onChange={handleChangeDiscount}
                    label='ערך' variant='outlined' disabled={!discount.state} className={classes.text}
                />
                <FormControl className={classes.text} variant='outlined' disabled={!discount.state}>
                    <InputLabel id="demo-simple-select-label">אחוז הנחה</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id='type'
                        name='type'
                        value={discount.type}
                        onChange={handleChangeDiscount}
                    >
                        <MenuItem value="אחוז הנחה">
                            אחוז הנחה
                        </MenuItem>
                        <MenuItem value='ש"ח הנחה'>
                            ש"ח הנחה
                        </MenuItem>
                    </Select>
                </FormControl>
                <Button onClick={discountSum}>חשב</Button>
            </div>
            {discount.state &&
                discount.value && discount.value > 0 &&
                <div >
                    <Typography> נחסך {discount.discount} ש"ח </Typography>
                    <Typography>ש"ח {discount.finalPrice} מחיר סופי</Typography>
                </div>

            }
            {/* </TextField> */}
            <Button variant='contained' type='submit' style={{ padding: '0.5rem 2rem', fontSize: '1.2rem' }}>{edit ? 'ערוך פריט' : 'העלה פריט'}</Button>

        </form>
    )
}


export default ItemForm;