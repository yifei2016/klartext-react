import React from 'react';
import { Route, Switch } from 'react-router-dom'
import SignIn from '../components/SignIn'
import Search from '../components/Search'

const Routes = () => {
  <div>
    <Switch>
        <Route exact path="/" component={Search} />
      <Route exact path="/signin" component={SignIn}/>
    </Switch>
  </div>
}
export default Routes
