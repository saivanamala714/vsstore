import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home';
import Cart from './components/Cart';
import Search from './components/Search';
import Menu, {SubMenu, MenuItem} from 'rc-menu';
import 'rc-menu/assets/index.css';
import store from './store';
import Test from './components/Test';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';

function selectPage(name){

    switch (name) {
        case 'home': return <Provider store={store}><Home></Home> </Provider>;
        case 'cart': return <Provider store={store}><Cart></Cart> </Provider>;
        case 'search': return <Provider store={store}><Search></Search> </Provider>;
    }
}

function test(e){
    //*missing--validation comes here
    //*enhancement - handle this with react routing

    //item page  rendering
    const container = selectPage(e.item.props.id);
    ReactDOM.render(container,document.getElementById('test'));
}

ReactDOM.render(
    <Provider store={store}>
        <div>
    <Menu onClick={test} mode={"horizontal"} >
        <MenuItem id={'home'}>HOME</MenuItem>
        <MenuItem id={'cart'}>CART</MenuItem>
        <MenuItem id={'search'}>SEARCH</MenuItem>
    </Menu>
    <div id={'test'}><Home></Home></div>
        </div>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
