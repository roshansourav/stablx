import React, {Component} from "react";
import './App.css';
import NavComp from "./components/NavComp";
import MainComp from "./components/MainComp";
import PopComp from "./components/PopComp";

class App extends Component{

  render(){
    return(
      <div>
        <NavComp/>
        <MainComp/>
        <PopComp/>
      </div>
    );
  }
}

export default App;
