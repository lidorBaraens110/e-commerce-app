import React, { useState, useEffect, StrictMode } from 'react';
import Heading from './component/heading';
import Footer from './component/footer';
import About from './component/about';
import Home from './component/home';
import Feed from './component/collectionFeed';
import AddToChart from './component/addToChart';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DelAndRes from './component/deleveryAndResponsible';
import UserDetail from './component/userDetail';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import BeforeThePay from './component/beforeThePay';
import PictureBeforePay from './component/pictureBeforePay';


// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });


function App() {

  const [scroll, setScroll] = useState(23);

  useEffect(() => {
    window.onscroll = () => {
      window.pageYOffset < 23 ? setScroll(23 - window.pageYOffset) : setScroll(0)
    }
  }, [])

  return (
    <StylesProvider jss={jss}>
      <div>
        <Heading styles={{ top: scroll }} className='header' />

        <Router>
          <Switch>
            <Route path="/" exact component={Feed} />
            <Route path="/feed" exact component={Feed} />
            <Route path="/מי-אנחנו" exact component={About} />
            <Route path="/בגדים/:id" component={Feed} />
            <Route path="/add-to-chart" exact component={AddToChart} />
          </Switch>
        </Router>

        <Footer />
      </div>
    </StylesProvider>
  );
}

export default App;
