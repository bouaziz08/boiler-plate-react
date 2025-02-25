/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Overview from 'pages/Overview/Loadable';
import LoginPage from 'pages/LoginPage/Loadable';

import Unauthorized from 'pages/Unauthorized/Loadable';
import NotFound from 'pages/NotFound/Loadable';
import AddStock from 'containers/AddStock/Loadable';
import AddDemande from 'containers/AddDemande/Loadable';
import SideBar from 'containers/SideBar';
import Header from 'containers/Header';
import UpdateStock from 'containers/Updatestock/Loadable';
import GlobalStyle from '../../global-styles';
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <SideBar />
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/add-stock" component={AddStock} />
          <Route exact path="/add-demande" component={AddDemande} />
          <Route exact path="/update-stock" component={UpdateStock} />
          <Route exact path="/overview" component={Overview} />
          <Route exact path="/unauthorized" component={Unauthorized} />
          <Route exact path="/not-found" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
        <GlobalStyle />
      </BrowserRouter>
    </>
  );
}
