import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import Card from '@material-ui/core/Card';

const PictureSwipe = ({ pictures }) => {

    const [index, setIndex] = useState(0);

    const handleSwitching = () => {
        if (index < pictures.length - 1) {
            setIndex(preValue => preValue + 1)
        } else setIndex(preValue => preValue - 1)
    }

    return (
        <div>
            <SwipeableViews enableMouseEvents index={index} onChangeIndex={handleSwitching}>
                {pictures.map((pic, ind) => {
                    return <Card key={ind} style={{ borderRadius: '0', height: '30rem', width: '100%' }}>
                        <img src={pic} alt='pictures' height='100%' />
                    </Card>
                })}
            </SwipeableViews>
            {pictures.map((pic, i) => {
                return <div
                    key={i}
                    id={i}
                    style={{
                        padding: '0.3rem',
                        marginLeft: '0.3rem',
                        display: "inline-block",
                        backgroundColor: i === index ? 'black' : 'white',
                        borderRadius: '50%',
                        border: 'solid black 1px'
                    }} ></div>
            })}
        </div>

    )
}
export default PictureSwipe;