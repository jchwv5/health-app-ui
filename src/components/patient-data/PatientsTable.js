/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
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

  const handleClick = (e) => {
    console.log(e);
  };

  // eslint-disable-next-line no-unused-vars
  const PatientMap = ({ data }) => data.map((patient) => (
    <tr key={patient.id} onClick={() => handleClick(patient.id)}>
      <td>{patient.firstName}</td>
      <td>{patient.lastName}</td>
      <td>{patient.age}</td>
      <td>{patient.gender}</td>
    </tr>
  ));

  return (
    <div>
      <h3>Patients</h3>
      <table className="patientsTable">
        <thead>
          <tr className="noHover">
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          <PatientMap data={patients} />
        </tbody>
      </table>
      <div className="wrapper">
        <button type="submit" className="addPatientButton">
          Add a Patient
        </button>
      </div>
    </div>
  );
};
export default PatientsTable;
