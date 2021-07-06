import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Mail from './components/Mail';
import EmailList from './components/EmailList';
import SendMail from './components/SendMail';
import { useSelector } from 'react-redux';
import Login from './components/Login';

function App() {
  const user=useSelector(state=>state.user)
  const modal=useSelector(state=>state.modal)
  console.log(user)
  
  return (
    <Router>
      {
        !user.user ? (
          <Login/>
        ) : (
          <div className="App">
          <Header/>
         
         <div className="app-body">
          <Sidebar/>
          <Switch>
            <Route exact path="/mail" component={Mail}/> 
            <Route exact path="/" component={EmailList}/> 
          </Switch>
          </div>
        {modal.modal && <SendMail/>}
        </div>
        )
      }
   
    </Router>
  );
}

export default App;
 