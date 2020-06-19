import React, { useState, useEffect } from 'react';
import Heading from './component/heading';
import Body from './component/body';
import Footer from './component/footer';

function Home() {


    const [scroll, setScroll] = useState(23);


    useEffect(() => {
        window.onscroll = () => {
            window.pageYOffset < 23 ? setScroll(23 - window.pageYOffset) : setScroll(0)
        }
    }, [])

    return (
        <div>
            <Heading styles={{ top: scroll }} className='header' />
            <hr />
            <Body />
            <hr />
            <Footer />
        </div>
    );
}

export default Home;
