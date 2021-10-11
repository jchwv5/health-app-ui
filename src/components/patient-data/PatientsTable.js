/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './PatientsTable.css';
import fetchPatients from './DataViewService';

const PatientsTable = () => {
  // eslint-disable-next-line no-unused-vars
  const [patients, setPatients] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [apiError, setApiError] = useState(false);
  useEffect(() => {
    fetchPatients(setPatients, setApiError);
  }, []);

  // eslint-disable-next-line no-unused-vars
  const PatientMap = ({ data }) => data.map((patient) => (
    <tr className="clickable-row" key={patient.id} a href="patients/details/">
      <td>{patient.firstName}</td>
      <td>{patient.lastName}</td>
      <td>{patient.age}</td>
      <td>{patient.gender}</td>
    </tr>
  ));

  return (
    <div>
      <button type="submit" className="addPatientButton">
        Add a Patient
      </button>
      <Table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          <PatientMap data={patients} />
        </tbody>
      </Table>
    </div>
  );
};
export default PatientsTable;
