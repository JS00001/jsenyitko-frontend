import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

import Home from './Components/Home';
import Error404 from './Components/Error404';
import Dashboard from './Components/Dashboard';

export default class App extends React.Component {
  render() {
    return (
      <SnackbarProvider maxSnack={1}>
        <Router>
          <Switch>

            <Route exact path="/dashboard">
              <Dashboard/>
            </Route>

            <Route exact path="/">
              <Home/>
            </Route>

            <Route>
              <Error404/>
            </Route>

          </Switch>
        </Router>
      </SnackbarProvider>
    )
  }
}