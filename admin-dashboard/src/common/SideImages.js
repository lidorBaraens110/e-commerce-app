import React from 'react';


const SideImages = ({ images, handleMouseOver, currentImage }) => {
    return <div style={{ right: '-60px', position: 'absolute', flex: 1 }}>
        {images && images.map((image, i) => {
            return <div key={i} onMouseOver={() => handleMouseOver(i)}
                style={{ height: '4rem', width: '3rem', position: 'relative', marginBottom: '1rem', border: currentImage == i ? '2px solid black' : '1px solid gray' }}>
                <img src={image.url} style={{ height: '100%', width: '100%' }} />
            </div>
        })}
        <img />

    </div>
}

export default SideImages;