import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';


class Aggregate extends Component{
  render(){
    return (

      <div style={{width:"50%",display:"inline-block"}}>
        <h2>Number Text</h2>
      </div> 

    );
  }
}

class Filter extends Component{
  render(){
    return(
      
      <div className="filter">
      <h2>Filter</h2>
      <input type="text" />
      <button id="filter">Filter</button>        
      </div>    


    );
  }
}
class Playlist extends Component{
  render(){
    return(
      
      <div className="playlist">
        <img alt="test"/>
        <h3>Playlist Name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
          </ul>       
      </div>    


    );
  }
}

class App extends Component {
  render() {
    let color = "#ff00ff";
    let headerstyle = {color,fontSize:'50px'}
    return (
      <div className="App">
        <header className="App-header">
          <h1>SEO TOOL</h1>
          <Aggregate/>
          <Aggregate/>
          <Filter/>
          <Playlist/>   
        </header>
      </div>
    );
  }
}

export default App;
