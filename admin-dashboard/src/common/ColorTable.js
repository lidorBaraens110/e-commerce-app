import React from 'react';
import {
    TextField,
    Button,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableHead, TableRow,
    TableContainer,
    Paper
} from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import UploadImage from './UploadImage';

const ColorTable = ({ handleAddColor,
    newColor,
    handleColorChange,
    getRootProps,
    isDragActive,
    getInputProps,
    colors,
    removeColor,
    removeImageFromColor,
    editColor,
    edit }) => {


    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <input
                    style={{ marginLeft: '1rem', height: '3rem', width: '5rem', display: 'flex', alignSelf: 'center' }}

                    value={newColor.codeColor}
                    type="color"
                    name='codeColor'
                    onChange={handleColorChange}

                />

                <TextField name='color' label='שם הצבע' variant='outlined' onChange={handleColorChange} style={{ marginLeft: '1rem' }} value={newColor.color} />
                <TextField

                    style={{ marginLeft: '1rem' }}
                    name="quantity"
                    InputProps={{ inputProps: { min: 0 } }}
                    type='number'
                    placeholder="כמות"
                    value={newColor.quantity} onChange={handleColorChange}
                    label="כמות" variant="outlined"
                />
                <UploadImage getRootProps={getRootProps} isDragActive={isDragActive} getInputProps={getInputProps} />
                <Button variant='contained' onClick={handleAddColor} style={{ marginRight: '1rem' }}>{edit ? "עדכן" : "הוסף"}</Button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                {newColor.images !== [] && newColor.images.map((image, i) => {
                    return <div key={i} >
                        <img src={image.url} style={{ height: '10rem', width: 'auto' }} />
                        <br />
                        <Button variant='contained' style={{ borderRadius: '100%' }} onClick={() => removeImageFromColor(image)}>
                            x</Button>
                    </div>
                })}
            </div>


            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ textAlign: 'center' }}>צבע</TableCell>
                            <TableCell style={{ textAlign: 'center' }}>שם הצבע</TableCell>
                            <TableCell style={{ textAlign: 'center' }}>כמות</TableCell>
                            <TableCell style={{ textAlign: 'center' }}>תמונות</TableCell>
                            <TableCell style={{ textAlign: 'center' }}></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.keys(colors).map((color, i) => (
                            <TableRow key={i}>
                                <TableCell style={{ margin: '2rem', backgroundColor: colors[color].codeColor }} component="th" scope="row">
                                </TableCell>
                                <TableCell style={{ textAlign: 'center' }}>{colors[color].color}</TableCell>
                                <TableCell style={{ textAlign: 'center' }}>{colors[color].quantity}</TableCell>
                                <TableCell style={{ textAlign: 'center' }}>
                                    <SwipeableViews enableMouseEvents>
                                        {colors[color].images.map((image, i) => {
                                            return <img key={i} src={image.url} style={{ height: '10rem', width: 'auto' }} />
                                        })
                                        }
                                    </SwipeableViews>
                                </TableCell>
                                <TableCell style={{ textAlign: 'center' }}>
                                    <Button variant='contained' onClick={() => removeColor(color)}>מחק</Button>
                                    <br />
                                    <br />
                                    <Button variant='contained' onClick={() => editColor(colors[color], color)}>ערוך</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


        </>
    )
}

export default ColorTable