import { Typography } from '@material-ui/core';
import React from 'react';


const SideColor = ({ colors, handleClickColor, currentColor }) => {

    return <div style={{ left: '-60px', position: 'absolute' }}>
        {colors && Object.keys(colors).map((color, i) => {
            return <div key={i} onClick={() => handleClickColor(color)}
                style={{ marginBottom: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{
                    alignItems: 'center',
                    borderRadius: '100%',
                    border: currentColor == color ? '2px solid black' : '1px solid gray',
                    backgroundColor: colors[color].codeColor,
                    height: '30px', width: '30px'
                }} />
                <Typography>{colors[color].color}</Typography>
            </div>
        })}
        <img />
    </div>
}

export default SideColor;