import React from 'react';
import "../stylesheet/main.scss"
import HeaderComponentContainer from '../containers/HeaderComponentContainer';
import DashBoardComponentContainer from '../containers/DashBoardComponentContainer';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import reducer from "../reducers/reducer";

const _store = createStore(reducer);

class maiAppComponent extends  React.Component{
render(){
    return(
        <Provider store = {_store}>
        <div className="main-app">
            <div className="tab-section "><HeaderComponentContainer/></div>
            <div className="body-section"><DashBoardComponentContainer/></div>
            <div className="footer-section"></div>
        </div>
        </Provider>
    )
}
}
export default maiAppComponent;