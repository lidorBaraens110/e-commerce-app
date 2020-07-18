import React, { useState, useEffect } from 'react';
import Heading from './component/footer&header/heading';
import Footer from './component/footer&header/footer';
import About from './component/screens/about';
import Home from './component/screens/home';
import Feed from './component/screens/collectionFeed';
import AddToChart from './component/screens/addToChart';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DelAndRes from './component/screens/deleveryAndResponsible';
// import UserDetail from './component/sideComponent/userDetail';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import CashRegister from './component/screens/cashRegister';
// import PictureBeforePay from './component/screens/pictureBeforePay';
import WishList from './component/screens/wishList';
import CollectionFeed from './component/screens/collectionFeed';
import Cart from './component/screens/cart';
import EditItem from './component/screens/editItem';
import CreditCard from './component/screens/creditCard';

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
      <Router>
        <Heading styles={{ top: scroll }} className='header' />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/משלוחים-אחריות" component={DelAndRes} />
          <Route path="/about" component={About} />
          <Route path='/wishList' component={WishList} />
          <Route path="/add" exact component={AddToChart} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/edititem" exact component={EditItem} />
          <Route path="/cashregister" exact component={CashRegister} />
          <Route path="/creditcard" exact component={CreditCard} />
          <Route path="/:id" exact component={Feed} />
        </Switch>
        <Footer />
      </Router>
    </StylesProvider>

  );
}

export default App;
