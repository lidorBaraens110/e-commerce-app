import React, { useState } from 'react';
import PictureDetail from './pictureDetail';

function PictureList() {

    const [PicList, setPicList] = useState([])

    return (

        <div style={{ marginTop: '8rem', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '2rem', fontSize: '2rem' }}>חדש</h2>
            <PictureDetail price='275 ש"ח' title='חולצה' src="https://i.pinimg.com/originals/c1/24/8d/c1248de17d747bc113378cda3f71078a.jpg" />
            <PictureDetail price='250 ש"ח' title='מכנס' src="https://i.pinimg.com/originals/c1/24/8d/c1248de17d747bc113378cda3f71078a.jpg" />
        </div>
    )
}

export default PictureList;