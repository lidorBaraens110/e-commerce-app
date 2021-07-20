import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset, ThemeProvider } from '@material-ui/core/styles';
import CustomTheme from './assets/CustomTheme';

import thunk from 'redux-thunk';

import { store, persistor } from './redux/reducers';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { PersistGate } from 'redux-persist/integration/react';

//screens
import Heading from './component/footer&header/heading';
import Footer from './component/footer&header/footer';
import About from './component/screens/about';
import Home from './component/screens/home';
import Feed from './component/screens/collectionFeed';
import Cart from './component/screens/Cart';
import DelAndRes from './component/screens/deleveryAndResponsible';
import CashRegister from './component/screens/cashRegister';
import WishList from './component/screens/wishList';
import ItemPage from './component/screens/ItemPage';
import CreditCard from './component/screens/creditCard';
import SuccessPage from './component/screens/SuccessPage';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
  '@global': {
    '*::-webkit-scrollbar': {
      [theme.breakpoints.down('sm')]: {
        width: 0
      },
      width: '0.3rem',
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': ' 0 0 3px rgba(0,0,0,0.00)',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      // outline: '1px solid slategrey',
    },
  },
}))
// import Cart from './component/screens/cart';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function App() {
  const classes = useStyle();

  // const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)))

  return (

    <ThemeProvider theme={CustomTheme}>
      <StylesProvider jss={jss}>
        <PersistGate loading={null} persistor={persistor}>
          <Provider store={store}>
            <Router>
              <Heading />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/משלוחים-אחריות" component={DelAndRes} />
                <Route path="/about" component={About} />
                <Route path='/wishList' component={WishList} />
                <Route path="/add/:id" exact component={ItemPage} />
                <Route path="/cart" exact component={Cart} />
                <Route path="/cashRegister" exact component={CashRegister} />
                <Route path="/creditCard" exact component={CreditCard} />
                <Route path="/items/:id" exact component={Feed} />
                <Route path='/successPage' exact component={SuccessPage} />
              </Switch>
              <Footer />
            </Router>
          </Provider>
        </PersistGate>
      </StylesProvider>
    </ThemeProvider>

  );
}

export default App;
