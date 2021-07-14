import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        flex: 1, display: 'flex', flexDirection: 'column'
    },
    image: {
        height: 'auto', maxWidth: '100%', marginBottom: '0.5rem',
    }
})

const SideImages = ({ images, handleMouseOver, currentImage }) => {

    const classes = useStyles();

    return <div className={classes.container}>
        {images && images.map((image, i) => {
            return <img
                alt='avatarImage'
                key={i}
                onMouseOver={() => handleMouseOver(i)}
                src={image.url}
                className={classes.image}
                style={{ border: currentImage === i && '2px solid black' }} />
        })}
        <img />

    </div>
}

export default SideImages;