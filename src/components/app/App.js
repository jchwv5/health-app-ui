/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DataTable from '../product-data-view/DataTable';

/**
 * @name App
 * @returns component
 */
const App = () => (
  <div className="app-container">
    <ToastContainer />
    <BrowserRouter>
      <Switch>
        <div className="content-container">
          <Route exact path="/" render={() => <DataTable />} />
        </div>
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
