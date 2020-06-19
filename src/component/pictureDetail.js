import React from 'react';

function PictureDetail(prop) {

    return (
        <div style={{ textAlign: "center", color: 'grey', lineHeight: '1.5' }}>
            <img src={prop.src}
                style={{ height: '300px' }} />
            <h3>{prop.title}</h3>
            <p>{prop.price}</p>
        </div>
    )
}

export default PictureDetail