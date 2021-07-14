import React, { useState } from 'react';
import { DialogTitle, Dialog, Typography, makeStyles, Grid, useTheme, useMediaQuery } from '@material-ui/core';
import DisplayItem from '../displayItem';
import ExtentTable from '../ExtendTable';
import ItemPageContent from '../itemPageContent';
import useStyles from './style';


function CommonItem({ item, lastColor, handleCart, update }) {
    const classes = useStyles();
    const [dialogState, setDialogState] = useState(false)
    const [currentImage, setCurrentImage] = useState(0);
    const [currentColor, setCurrentColor] = useState(lastColor);
    const theme = useTheme();
    const mobileView = useMediaQuery(theme.breakpoints.down('xs'))

    const handleMouseOver = (i) => {
        setCurrentImage(i)
    }

    const handleClickColor = (color) => {
        setCurrentColor(color)
        setCurrentImage(0)
    }

    return (
        <div className={classes.container}>
            {
                item && <DialogForm open={dialogState}
                    onClose={() => setDialogState(false)}
                    extentTable={item.oneSize.extent}
                />
            }
            {!mobileView && <Typography style={{ color: 'gray', padding: '0.5rem 0', fontSize: '0.8rem' }}>{item.type} / {item.name}</Typography>
            }
            <Grid container style={{ padding: mobileView && '0', display: 'flex', margin: 0, maxWidth: '100%' }}>
                <Grid item
                    xs={12} sm={6} lg={6} md={6} xl={6}

                >
                    <DisplayItem images={currentColor && item.oneSize.colors[currentColor].images}
                        currentImage={currentImage}
                        handleMouseOver={handleMouseOver}
                        avatarImage={item.oneSize.colors[currentColor].images[currentImage].url}
                    />
                </Grid>
                <Grid item
                    xs={12} sm={1} lg={1} md={1} xl={1}
                ></Grid>
                <Grid item
                    xs={12} sm={5} lg={5} md={5} xl={5}
                >
                    <ItemPageContent
                        item={item}
                        currentColor={currentColor}
                        handleClickColor={handleClickColor}
                        handleCart={handleCart}
                        update={update}
                        setDialogState={setDialogState}
                    />
                </Grid>
            </Grid>
        </div >
    );
}

export default CommonItem;

const DialogForm = ({ onClose, open, extentTable }) => {
    const classes = useStyles();
    return <Dialog fullWidth={true} open={open} onClose={onClose} className={classes.dialogContainer}>
        <DialogTitle className={classes.dialogHeader}>טבלת מידות</DialogTitle>
        <ExtentTable extent={extentTable} />
    </Dialog>
}