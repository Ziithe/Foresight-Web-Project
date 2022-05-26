import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import { Route } from "react-router-dom";


class App extends React.Component {
  authenticate(){
    return new Promise(resolve => setTimeout(resolve, 2000))
  }

  componentDidMount(){
    this.authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if(ele){
        ele.classList.add('available')
        setTimeout(() =>{
          ele.outerHTML = ''
        }, 2000)
      }
    })
  }

  render() {
    return (
      <>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/register" component={Register}></Route>


      </>
    )
  }
}

export default App;
