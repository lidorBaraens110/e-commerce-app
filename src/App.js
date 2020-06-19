import React, { useState, useEffect } from 'react';
import Heading from './component/heading';
import Body from './component/body';
import Footer from './component/footer';
import About from './component/about';
import PictureList from './component/pictureList';

function App() {


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
      <PictureList />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
