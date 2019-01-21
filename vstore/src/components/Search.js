import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/Home.css';
import axios from 'axios';
import ReactTable from 'react-table';
import "react-table/react-table.css";

const columns = [{Header:"Item Name", accessor: 'name'},
                 {Header:"Price", accessor: 'price'},
                 {Header:"Description", accessor: 'description'}];

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {items:[], filteredItems:[],dataLoaded:true};
    this.searchRef = React.createRef();
    this.getAllItems = this.getAllItems.bind(this);
    this.getError = this.getError.bind(this);
    this.getResponse = this.getResponse.bind(this);
    this.startTime = 0;
    this.endTime = 0;
    this.responseTime = 0;
    this.recordsCount = 0;
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    //stop rendering the component while API calls are in progress
    return nextState.dataLoaded;
  }

  //Axios Get Call
  search(db){
    this.startTime = Date.now();
    const serviceURL = "http://localhost:9003";
    const searchURL = serviceURL+"/"+db+"/getItems";
    this.setState({dataLoaded: false});
    axios.get(searchURL)
       .then((response)=>{this.getResponse(response)})
       .catch((error)=>{this.getError(error)})
       .finally(()=> this.close())
  }

  getResponse(response){
    var items = response.hasOwnProperty('data')?response.data:[];
    this.setState({items});
  }

  getError(error){
   console.log(`Error : ${error}` );
  }

  close(){
    this.endTime = Date.now();
    this.responseTime = Math.floor((this.endTime - this.startTime));
    this.recordsCount = this.state.items.length;
    console.log("Response finished in ", this.responseTime , "s", "Loaded : ", this.recordsCount, " records.");
    this.setState({dataLoaded: true});
  }

  getAllItems = (e) =>{
    debugger;
    this.search(e.target.id);

    const inputVal = this.searchRef.current.value;
  };

  render() {
    var value = this.searchRef.current ? this.searchRef.current.valid:'t';
    const {items} = this.state;

    return (
      <div className="Search">
       <input id={'searchKey'} ref={this.searchRef}></input>
       <button onClick={this.getAllItems} id={"oracle"}>Get All From Oracle</button>
       <button onClick={this.getAllItems} id={"mongo"}>Get All From Mongo</button>
       <ReactTable data={items} columns={columns}></ReactTable>
        <p> Response time : {Math.floor(this.responseTime/1000)}'s ({this.responseTime}'ms ), loaded {this.recordsCount} Records. <u> {(new Date).toTimeString()} </u></p>
      </div>
    );
  }
}
export default Search;
