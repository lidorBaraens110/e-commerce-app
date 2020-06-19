import React from 'react';
function allImage() {
    return (
        <div className="firstContainer">
            <img src="https://i.pinimg.com/originals/c1/24/8d/c1248de17d747bc113378cda3f71078a.jpg"
                style={{ height: '400px' }} />
            <img src="https://i.pinimg.com/originals/c1/24/8d/c1248de17d747bc113378cda3f71078a.jpg"
                style={{ height: '400px' }} />
            <img src="https://i.pinimg.com/originals/c1/24/8d/c1248de17d747bc113378cda3f71078a.jpg"
                style={{ height: '400px' }} />
            <img src="https://i.pinimg.com/originals/c1/24/8d/c1248de17d747bc113378cda3f71078a.jpg"
                style={{ height: '400px' }} />
        </div>

    )
}

const styles = {
    headerContainer: {
        display: 'flex',
    },
    icon: {
        fontSize: "30px"
    },
    aboveHeading: {
        backgroundColor: "black",
        fontSize: "20px",
        fontWeight: "600",
        color: "white",
        textAlign: "center"
    }
}


export default allImage;


