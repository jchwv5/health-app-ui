/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import './PatientsTable.css';
import fetchPatients from './DataViewService';
import PatientForm from './PatientForm';
import addPatient from './AddPatientService';
import deletePatientById from './DeletePatientService';

const PatientsTable = () => {
  // eslint-disable-next-line no-unused-vars
  const [patients, setPatients] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [apiError, setApiError] = useState(false);
  const [showAddPatientModal, setShowAddPatientModal] = useState(false);
  const [deleteCount, setDeleteCount] = useState(0);
  const [deleteError, setDeleteError] = useState(0);

  useEffect(() => {
    fetchPatients(setPatients, setApiError);
  }, [deleteCount, showAddPatientModal]);

  const showModal = () => {
    setShowAddPatientModal(true);
  };

  // eslint-disable-next-line no-unused-vars
  const PatientMap = ({ data }) => data.map((patient) => (
    <tr key={patient.id}>
      <td className="deletePatient">
        <button
          type="submit"
          className="deletePatientButton"
          variant="contained"
          onClick={() => {
            if (patient.encounters.length > 0) {
              setDeleteError(patient.id);
            } else if (patient.encounters.length === 0) {
              deletePatientById(setApiError, setDeleteCount, patient.id);
            }
          }}
        >
          <DeleteIcon />
        </button>
      </td>
      <td>
        {patient.firstName}
        <a href={`patients/details/${patient.id}`} className="rowLink" />
      </td>
      <td>
        {patient.lastName}
        <a href={`patients/details/${patient.id}`} className="rowLink" />
      </td>
      <td>
        {patient.age}
        <a href={`patients/details/${patient.id}`} className="rowLink" />
      </td>
      <td>
        {patient.gender}
        <a href={`patients/details/${patient.id}`} className="rowLink" />
      </td>
      <td className="errors noHover">{deleteError === patient.id && <div className="errorDiv">CANNOT DELETE A PATIENT WITH ENCOUNTERS</div>}</td>
    </tr>
  ));

  return (
    <div>
      <h3 className="pateintsHeader">Patients</h3>
      <table className="patientsTable">
        <thead>
          <tr className="noHover">
            <th className="deleteHeader" />
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
        {showAddPatientModal && (
        <PatientForm
          onClose={() => setShowAddPatientModal(false)}
          patientApiCall={addPatient}
          patientId={null}
          formHeader="Add a Patient"
          buttonLabel="Add Patient"
          successMsg="Patient Updated Successfully!"
        />
        )}
        <button type="submit" className="addPatientButton" onClick={() => showModal()}>
          Add a Patient
        </button>
      </div>
    </div>
  );
};
export default PatientsTable;
