import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/Cart.css';
import {connect} from 'react-redux';

class Cart extends Component {
   constructor(props){
     super(props);
     this.state = {cleared: true}
     this.clear = this.clear.bind(this);
     this.checkout = this.checkout.bind(this);
   }

   //to render the page when cleared

   clear = () => {
    this.props.clear();
    this.setState({cleared:true});
   }

   checkout = () =>{
       this.props.checkout();
       this.setState({cleared:true});
   }

  render() {
    return (

      <div className="cart">
          <table>
          <thead>
          <th>Item Name</th>
          <th>Price</th>
          <th>Description</th>
          </thead>
          <tbody>
          {this.props.items.items.map((e)=>{return <tr><td>{e.name}</td><td>{e.price}</td><td>{e.description}</td></tr>})}
          </tbody>
          </table>

       <button onClick={this.clear}>Clear Cart</button>
       <button onClick={this.checkout}>Check Out</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {items: state};
}

function mapDispatchToProps(dispatch) {
   return{
       clear: ()=>{dispatch({type:"CLEAR"})},
       checkout: ()=>{dispatch({type:"CHECKOUT"})}
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
