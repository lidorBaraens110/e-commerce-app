import React, { useState } from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex'
    },
    imagesWrap: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    imagesMidWrap: {
        position: 'relative',
        padding: '2px',
        borderStyle: 'solid',
        display: 'flex',
        alignItems: 'center'
    },
    image: {
        cursor: 'pointer', height: '60px', width: '45px',
        [theme.breakpoints.down('xs')]: {
            height: '52px', width: '39px'
        }
    },
    colorsWrap: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    colorsMidWrap: {
        position: 'relative',
        borderRadius: '100%',
        borderWidth: '1px',
        borderStyle: 'solid',
        display: 'flex',
        alignItems: 'center'
    },
    colors: {
        cursor: 'pointer',
        borderRadius: '50%',
        border: '1px solid gray',
        height: '15px', width: '15px',
        [theme.breakpoints.down('xs')]: {
            height: '10px', width: '10px'
        }
    }

}))

const SideColor = ({ colors, handleClickColor, currentColor, images }) => {

    const classes = useStyles()
    const [colorHover, setColorHover] = useState()
    const handleMouseOver = (color) => {
        setColorHover(color)
    }
    const handleMouseLeave = () => {
        setColorHover('')
    }
    return <div className={classes.container}>
        {colors && Object.keys(colors).map((color, i) => {
            return images ? <div style={{
                marginLeft: i !== Object.keys(colors).length && '0.5rem'
            }} key={i} onClick={() => handleClickColor(color)}
                className={classes.imagesWrap}
            >
                <div style={{
                    borderWidth: color === colorHover ? '1px' : '1px',
                    borderColor: currentColor == color || color === colorHover ? 'black' : 'white',
                }}
                    className={classes.imagesMidWrap}>
                    <img onMouseLeave={handleMouseLeave}
                        onMouseOver={() => handleMouseOver(color)}
                        src={colors[color].images[0].url} className={classes.image}
                    />
                </div>
            </div>
                :
                <div className={classes.colorsWrap} key={i} onClick={() => handleClickColor(color)}
                >
                    <div
                        className={classes.colorsMidWrap}
                        style={{ borderColor: color === colorHover ? 'black' : 'white' }}>
                        <div
                            onMouseLeave={handleMouseLeave}
                            onMouseOver={() => handleMouseOver(color)}
                            style={{ backgroundColor: colors[color].codeColor }}
                            className={classes.colors}
                        />
                    </div>
                </div>
        })}
        <img />
    </div >
}

export default SideColor;