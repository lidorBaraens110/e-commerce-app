import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers/index';
import NavBar from './navBar';
import EditItem from './screens/EditItem';
import AddItem from './screens/AddItem';
import ItemList from './screens/ItemList';
import OrderDetail from './screens/OrderDetail';
import OrderList from './screens/OrderList';
import CreateCoupon from './screens/CreateCoupon';

import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset, ThemeProvider } from '@material-ui/core/styles';
import CustomTheme from './assets/CustomTheme';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const initialState = {}
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

function App() {

  return (
    <ThemeProvider theme={CustomTheme}>
      <StylesProvider jss={jss}>
        <Provider store={store}>
          <Router >
            <NavBar />
            <Switch />
            <Route path="/" exact component={ItemList} />
            <Route path="/addItem" component={AddItem} />
            <Route path="/editItem/:id" component={EditItem} />
            <Route path="/orderList" component={OrderList} />
            <Route path='/order/:id' component={OrderDetail} />
            <Route path="/createCoupon" component={CreateCoupon} />
            <Switch />
          </Router>
        </Provider>
      </StylesProvider>
    </ThemeProvider>

  );
}

export default App;
