import React, { Component } from 'react';
import {connect} from 'react-redux';

function Hello(){
    return Call;
}

function Call(){
    return "nothing";
}

function Test(props) {
console.log("Render ", props);
return <h1>Hello {props.currentState.count}</h1>;

}


function mapStateToProps(state){
    console.log('test is called');
    return {currentState : state}
}

export default connect(mapStateToProps)(Test);