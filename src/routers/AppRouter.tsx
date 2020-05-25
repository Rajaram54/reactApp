
import React from 'react';
import App from '../app/App';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
  
  const NotFound = () => (
    <div>Page not found 404!!!</div>
  );
  
  const AppRouter = () => (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={App} exact={true}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  )

  export default AppRouter;