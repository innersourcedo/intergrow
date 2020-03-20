import React, { useState } from 'react';
import { Modal } from 'reactstrap';
// import logo from './logo.svg';
import '../css/App.css';
import Login from './account/login';
import RegisterUser from './account/register-user';
import Home from './core/home';


import {Route,Switch} from 'react-router-dom';


// class App extends React.Component{
  
//   render(){
const App = () => {

    const [token, setToken] = useState('');

    const userLogin = (tok) => {
      setToken(tok);
      console.log(token)
    }

    return (
      <div className='text-center mt-4 mb-5 py-5' style={{textAlignVertical: 'center'}}>
          <Login userLogin={userLogin}/>
      </div>
    );
  

}

export default App;
