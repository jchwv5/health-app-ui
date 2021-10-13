import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Constants from '../../utils/constants';
import fetchPatientInfo from './PatientDetailsService';
import './PatientDetails.css';
import PatientForm from '../patients/PatientForm';
import updatePatient from '../patients/EditPatientService';

const PatientDetails = () => {
  const params = useParams();
  const { patientId } = params;
  const [patient, setPatient] = React.useState({});
  const [apiError, setApiError] = useState(false);
  const [showEditPatientModal, setShowEditPatientModal] = useState(false);

  useEffect(() => {
    fetchPatientInfo(setPatient, setApiError, patientId);
  }, [patientId, showEditPatientModal]);
  /**
   *
   * @name handleSubmit
   * @description sends request to save valid form data, then displays status toast
   */

  return (
    <div className="userField">
      {apiError && <p className="errMsg" data-testid="errMsg">{Constants.API_ERROR}</p>}
      {!apiError && (
      <div className="userDisplay">
        <>
          <a href="/patients"><p>Back to All Patients</p></a>
          <h3 className="detailsHeader">Patient Details</h3>
          <div className="userInfo">
            <div className="column">
              <p>
                First Name:
                {' '}
                {patient.firstName}
              </p>
              <p>
                Last Name:
                {' '}
                {patient.lastName}
              </p>
              <p>
                SSN:
                {' '}
                {patient.ssn}
              </p>
              <p>
                Email:
                {' '}
                {patient.email}
              </p>
            </div>
            <div className="column">
              <p>
                Street:
                {' '}
                {patient.street}
              </p>
              <p>
                City:
                {' '}
                {patient.city}
              </p>
              <p>
                State:
                {' '}
                {patient.state}
              </p>
              <p>
                Zip Code:
                {' '}
                {patient.postal}
              </p>
            </div>
            <div className="column">
              <p>
                Age:
                {' '}
                {patient.age}
              </p>
              <p>
                Height:
                {' '}
                {patient.height}
              </p>
              <p>
                Weight:
                {' '}
                {patient.weight}
              </p>
              <p>
                Insurance:
                {' '}
                {patient.insurance}
              </p>
              <p>
                Gender:
                {' '}
                {patient.gender}
              </p>
            </div>
            <div className="buttonWrapper">
              <button
                type="submit"
                className="editButton"
                onClick={() => setShowEditPatientModal(true)}
              >
                Edit Patient
              </button>
            </div>
          </div>
        </>
      </div>
      )}
      {showEditPatientModal && (
        <PatientForm
          onClose={() => setShowEditPatientModal(false)}
          patientApiCall={updatePatient}
          patientId={patientId}
          formHeader="Edit Patient"
          buttonLabel="Edit Patient"
          successMsg="Patient Updated Successfully!"
        />
      )}
      <div className="encountersContainter">
        <h4 className="encountersHeader">Encounters</h4>
        <table className="patientsTable">
          <thead>
            <tr className="noHover">
              <th className="deleteHeader" />
              <th>Encounter ID</th>
              <th>Visit Code</th>
              <th>Provider</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody />
        </table>
      </div>
    </div>
  );
};

export default PatientDetails;
