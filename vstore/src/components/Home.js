import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/Home.css';
import {connect} from 'react-redux';

class Home extends Component {

  constructor(props){
    super(props);
    this.addItem = this.addItem.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('component updated')
    return true;
  }

  addItem = () =>{
    //connect to redux store and add the data
    console.log(this.props.reduxState.count);

    console.log('Item has been added');
  }

  render() {
    console.log('Render ', this.props);
    return (
      <div className="Home">
        <form onSubmit={this.props.testButton}>
       <fieldset>
         <legend>Add Item </legend>
         <table>
           <thead></thead>
           <tbody>
           <tr><td>Item Name</td><td><input id={"name"}></input></td></tr>
           <tr><td>Price</td><td><input id={"price"}></input></td></tr>
           <tr><td>Description</td><td><input id={"description"}></input></td></tr>
           </tbody>
         </table>
           <button type={"submit"}>Add Item</button>
       </fieldset>
        </form>
      </div>
    );
  }
}

var mapStateToProps = (state) =>{
  return {reduxState : state};
}

var mapDispatchToProps = (dispatch) =>{
  return {testButton: (e)=>{
    e.preventDefault();
    dispatch(
      {type:"ADD_ITEM" , data: e.target}

      )}};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
