import React from 'react';
import './App.css';
import { NavLink, HashRouter, Route } from 'react-router-dom';

const about = () => (
  <div>Simple about!!!</div>
);

const settings = () => (
  <div>Settings</div>
);


const clients = () => (
  <div>clients</div>
);
const contact = () => (
  <div>contact</div>
);

function App() {
  return (
  <>
    <div className="sidenav">
      <NavLink activeStyle={{}} to="/#/about">About</NavLink>
      <NavLink activeStyle={{}} to="/#/settings">Settings</NavLink>
      <NavLink activeStyle={{}} to="/#/clients">Clients</NavLink>
      <NavLink activeStyle={{}} to="/#/contact">Contact</NavLink>
    </div>
    
    <div className="main">
      <h2>Sidenav Example</h2>
      <p>This sidenav is always shown.</p>
      <HashRouter basename="/">
        <Route path="/about" exact={true} component = {about} />
        <Route path="/settings" exact={true} component ={settings} />
        <Route path="/clients" exact={true} component = {clients} />
        <Route path="/contact" exact={true} component = {contact} />
      </HashRouter>
    </div>
       
    </>
  );
}

export default App;
