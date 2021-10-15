/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect
} from 'react-router-dom';
import PatientsTable from '../patients/PatientsTable';
import PatientDetails from '../patient-details/PatientDetails';

/**
 * Main app for router
 * @name App
 * @returns component
 */
const App = () => (
  <div className="app-container">
    <BrowserRouter>
      <Switch>
        <div className="content-container">
          <Route
            exact
            path="/"
            render={() => (
              <Redirect to="/patients" />
            )}
          />
          <Route exact path="/patients" render={() => <PatientsTable />} />
          <Route exact path="/patients/details/:patientId" render={() => <PatientDetails />} />
        </div>
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
