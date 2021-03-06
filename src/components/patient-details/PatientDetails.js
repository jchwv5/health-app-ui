import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Constants from '../../utils/constants';
import fetchPatientInfo from './PatientDetailsService';
import './PatientDetails.css';
import PatientForm from '../patients/PatientForm';
import updatePatient from '../patients/EditPatientService';
import { fetchEncounters, fetchEncounterById } from '../encounters/FetchEncountersService';
import EncounterForm from '../encounters/EncounterForm';
import updateEncounter from '../encounters/EditEncounterService';
import addEncounter from '../encounters/AddEncounterService';

/**
 * Patient details component for viewing and editing patient and encounter details
 * @returns patient details page
 */
const PatientDetails = () => {
  const params = useParams();
  const { patientId } = params;
  const [editEncounterId, setEditEncounterId] = useState(0);
  const [patient, setPatient] = useState({});
  const [patientApiError, setPatientApiError] = useState(false);
  const [encounters, setEncounters] = useState([]);
  const [encounterDetailsId, setEncounterDetailsId] = useState(1);
  const [encounterDetails, setEncounterDetails] = useState({});
  const [encounterApiError, setEncounterApiError] = useState(false);
  const [showEditPatientModal, setShowEditPatientModal] = useState(false);
  const [showEncounterDetails, setShowEncounterDetails] = useState(false);
  const [showAddEncounterModal, setShowAddEncounterModal] = useState(false);
  const [showEditEncounterModal, setShowEditEncounterModal] = useState(false);

  /**
 *Updates page dynamically when any information has been changed
 */
  useEffect(() => {
    fetchEncounters(setEncounters, setEncounterApiError, patientId);
    fetchPatientInfo(setPatient, setPatientApiError, patientId);
    fetchEncounterById(setEncounterDetails, setEncounterApiError, patientId, encounterDetailsId);
  }, [patientId,
    encounterDetailsId,
    showEditPatientModal,
    showAddEncounterModal,
    showEditEncounterModal]);

  /**
 *Triggers encounter details fields to become visible on button click
 * @param {*} id
 */
  const handleViewDetails = (id) => {
    setEncounterDetailsId(id);
    setShowEncounterDetails(true);
  };

  /**
   * Triggers edit encounter form to become visible on button click
   * @param {*} encounterId - id of encounter to be edited
   */
  const handleEditEncounterDetails = (encounterId) => {
    setShowEditEncounterModal(true);
    setEditEncounterId(encounterId);
  };

  /**
   * Maps array of encounters associated with patient to be displayed in the encounters table
   * @returns - mapped encounter objects to be displayed in encounters table
   */
  const EncounterMap = ({ data }) => data.map((encounter) => (
    <tr key={encounter.id}>
      <td className="viewEditDetails">
        <button
          type="submit"
          className="viewDetailsButton"
          variant="contained"
          onClick={() => handleViewDetails(encounter.id)}
        >
          View Details
        </button>
        <button
          type="submit"
          className="editDetailsButton"
          variant="contained"
          onClick={() => handleEditEncounterDetails(encounter.id)}
        >
          Edit
        </button>
      </td>
      <td className="encounterIdTd">
        {encounter.id}
      </td>
      <td className="encountersTd">
        {encounter.visitCode}
      </td>
      <td className="encountersTd">
        {encounter.provider}
      </td>
      <td className="encountersTd">
        {encounter.date}
      </td>
    </tr>
  ));

  return (
    <div className="userField">
      <div>
        {patientApiError && <p className="errMsg" data-testid="errMsg">{Constants.API_ERROR}</p>}
        {!patientApiError && (
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
        <div className="encountersContainter">
          <h4 className="encountersHeader">Encounters</h4>
          <button
            type="submit"
            className="addEncounterButton"
            variant="contained"
            onClick={() => setShowAddEncounterModal(true)}
          >
            Add Encounter
          </button>
          {encounterApiError && <p className="errMsg" data-testid="errMsg">{Constants.API_ERROR}</p>}
          {!encounterApiError && (
          <table className="encountersTable">
            <thead>
              <tr className="noHover">
                <th className="viewEditDetails" />
                <th>ID</th>
                <th>Visit Code</th>
                <th>Provider</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <EncounterMap data={encounters} />
            </tbody>
          </table>
          )}
        </div>
        {showEncounterDetails && (
        <div>
          <h4>Encounter Details</h4>
          <div className="userInfo">
            <div className="column">
              <p>
                Encounter ID:
                {' '}
                {encounterDetails.id}
              </p>
              <p>
                Notes:
                {' '}
                {encounterDetails.notes}
              </p>
              <p>
                Visit Code:
                {' '}
                {encounterDetails.visitCode}
              </p>
              <p>
                Provider:
                {' '}
                {encounterDetails.provider}
              </p>
            </div>
            <div className="column">
              <p>
                Billing Code:
                {' '}
                {encounterDetails.billingCode}
              </p>
              <p>
                ICD10:
                {' '}
                {encounterDetails.icd10}
              </p>
              <p>
                Total Cost:
                {' '}
                {encounterDetails.totalCost.toFixed(2)}
              </p>
              <p>
                Copay:
                {' '}
                {encounterDetails.copay.toFixed(2)}
              </p>
            </div>
            <div className="column">
              <p>
                Chief Complaint:
                {' '}
                {encounterDetails.chiefComplaint}
              </p>
              <p>
                Pulse:
                {' '}
                {encounterDetails.pulse}
              </p>
              <p>
                Systolic:
                {' '}
                {encounterDetails.systolic}
              </p>
              <p>
                Diastolic:
                {' '}
                {encounterDetails.diastolic}
              </p>
              <p>
                Date:
                {' '}
                {encounterDetails.date}
              </p>
            </div>
            <div className="buttonWrapper">
              <button
                type="submit"
                className="closeButton"
                onClick={() => setShowEncounterDetails(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
        )}
      </div>
      {/*
      displays patient form in edit patient mode
       */}
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
      {/*
      displays encounter form in edit encounter mode
       */}
      {showEditEncounterModal && (
      <EncounterForm
        onClose={() => setShowEditEncounterModal(false)}
        encounterApiCall={updateEncounter}
        patientId={patientId}
        encounterId={editEncounterId}
        formHeader="Edit Encounter"
        buttonLabel="Edit Encounter"
        successMsg="Encounter Updated Successfully!"
      />
      )}
      {/*
      displays encounter form in add encounter mode
       */}
      {showAddEncounterModal && (
      <EncounterForm
        onClose={() => setShowAddEncounterModal(false)}
        encounterApiCall={addEncounter}
        patientId={patientId}
        encounterId={null}
        formHeader="Add Encounter"
        buttonLabel="Add Encounter"
        successMsg="Encounter Added Successfully!"
      />
      )}
    </div>
  );
};

export default PatientDetails;
