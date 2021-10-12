/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PatientsTable from '../patient-data/PatientsTable';

/**
 * @name App
 * @returns component
 */
const App = () => (
  <div className="app-container">
    <BrowserRouter>
      <Switch>
        <div className="content-container">
          <Route exact path="/patients" render={() => <PatientsTable />} />
        </div>
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
