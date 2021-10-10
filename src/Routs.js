import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MessageComponent from './container/MessageComponent';
export const Routes = () => {
  return (
    <div>
      
      <Switch>
 
         <Route exact path="/" component={MessageComponent}> 
       
        </Route>
      
      </Switch>
    </div>
  );
};