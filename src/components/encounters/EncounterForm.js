/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './EncounterForm.css';
import FormItem from '../../utils/FormItem';
import HandleEncounterApiCall from './HandleEncounterApiCall';

/**
 * Modular form to be used for adding new encounters and updating existing encounters
 * @param {*} props - takes in parameters from onClick that calls the form to determine whether
 * form will be used for adding a new encounter or updating an existing one
 * @returns - form component
 */

const EncounterForm = (props) => {
  const { onClose } = props;
  const { encounterApiCall } = props;
  const { patientId } = props;
  const { encounterId } = props;
  const { formHeader } = props;
  const { buttonLabel } = props;
  const { successMsg } = props;
  const [encounterData, setEncounterData] = useState({});
  const [apiError, setApiError] = useState(false);
  const [encounterSuccess, setEncounterSuccess] = useState(false);
  const [encounterFailure, setEncounterFailure] = useState(false);
  const [encounterErrors, setEncounterErrors] = useState({
    visitCode: { dataIsValid: false, errorMessage: '' },
    provider: { dataIsValid: false, errorMessage: '' },
    billingCode: { dataIsValid: false, errorMessage: '' },
    icd10: { dataIsValid: false, errorMessage: '' },
    totalCost: { dataIsValid: false, errorMessage: '' },
    copay: { dataIsValid: false, errorMessage: '' },
    chiefComplaint: { dataIsValid: false, errorMessage: '' },
    pulse: { dataIsValid: false, errorMessage: '' },
    systolic: { dataIsValid: false, errorMessage: '' },
    diastolic: { dataIsValid: false, errorMessage: '' },
    date: { dataIsValid: false, errorMessage: '' }
  });
  /**
 * function to take user input and assign it to the value for that field
 * @param {*} e - input field that is receiving user input
 */
  const handleChange = (e) => {
    setEncounterData((prevValue) => ({ ...prevValue, [e.target.id]: e.target.value }));
  };

  return (
    <div className="formPopup" id="myForm">
      <form action="/action_page.php" className="formContainer">
        <h1 className="formHeader">{formHeader}</h1>
        <p>(fields with a * are required)</p>
        <div className="form">
          <div className="column">
            <FormItem
              className="input"
              type="text"
              id="notes"
              label="Notes"
              placeholder="Please enter any notes"
              onChange={handleChange}
              value={encounterData.notes}
            />
            <FormItem
              className="input"
              type="text"
              id="visitCode"
              label="Visit Code*"
              placeholder="ex. H1H 1H1"
              onChange={handleChange}
              value={encounterData.visitCode}
            />
            <div className="errorDiv">
              {encounterErrors.visitCode.dataIsValid === false && (
              <p className="errorMsg">{encounterErrors.visitCode.errorMessage}</p>
              )}
            </div>
            <FormItem
              className="input"
              type="text"
              id="provider"
              label="Provider*"
              placeholder="ex. Dr. Mitchell"
              onChange={handleChange}
              value={encounterData.provider}
            />
            <div className="errorDiv">
              {encounterErrors.provider.dataIsValid === false && (
              <p className="errorMsg">{encounterErrors.provider.errorMessage}</p>
              )}
            </div>
            <FormItem
              className="input"
              type="text"
              id="billingCode"
              label="Billing Code*"
              placeholder="ex. 123.456.789-00"
              onChange={handleChange}
              value={encounterData.billingCode}
            />
            <div className="errorDiv">
              {encounterErrors.billingCode.dataIsValid === false && (
              <p className="errorMsg">{encounterErrors.billingCode.errorMessage}</p>
              )}
            </div>
          </div>
          <div className="column">
            <FormItem
              className="input"
              type="text"
              id="icd10"
              label="ICD10*"
              placeholder="ex. A12"
              onChange={handleChange}
              value={encounterData.icd10}
            />
            <div className="errorDiv">
              {encounterErrors.icd10.dataIsValid === false && (
              <p className="errorMsg">{encounterErrors.icd10.errorMessage}</p>
              )}
            </div>
            <FormItem
              className="input"
              type="text"
              id="totalCost"
              label="Total Cost*"
              placeholder="ex. 1000"
              onChange={handleChange}
              value={encounterData.totalCost}
            />
            <div className="errorDiv">
              {encounterErrors.totalCost.dataIsValid === false && (
              <p className="errorMsg">{encounterErrors.totalCost.errorMessage}</p>
              )}
            </div>
            <FormItem
              className="input"
              type="text"
              id="copay"
              label="Copay*"
              placeholder="ex. 100"
              onChange={handleChange}
              value={encounterData.copay}
            />
            <div className="errorDiv">
              {encounterErrors.copay.dataIsValid === false && (
              <p className="errorMsg">{encounterErrors.copay.errorMessage}</p>
              )}
            </div>
            <FormItem
              className="input"
              type="text"
              id="chiefComplaint"
              label="Chief Complaint*"
              placeholder="ex. Broken Arm"
              onChange={handleChange}
              value={encounterData.chiefComplaint}
            />
            <div className="errorDiv">
              {encounterErrors.chiefComplaint.dataIsValid === false && (
              <p className="errorMsg">{encounterErrors.chiefComplaint.errorMessage}</p>
              )}
            </div>
          </div>
          <div className="column">
            <FormItem
              className="input"
              type="text"
              id="pulse"
              label="Pulse"
              placeholder="ex. 90"
              onChange={handleChange}
              value={encounterData.pulse}
            />
            <div className="errorDiv">
              {encounterErrors.pulse.dataIsValid === false && (
              <p className="errorMsg">{encounterErrors.pulse.errorMessage}</p>
              )}
            </div>
            <FormItem
              className="input"
              type="text"
              id="systolic"
              label="Systolic"
              placeholder="ex. 100"
              onChange={handleChange}
              value={encounterData.systolic}
            />
            <div className="errorDiv">
              {encounterErrors.systolic.dataIsValid === false && (
              <p className="errorMsg">{encounterErrors.systolic.errorMessage}</p>
              )}
            </div>
            <FormItem
              className="input"
              type="text"
              id="diastolic"
              label="Diastolic"
              placeholder="ex. 88"
              onChange={handleChange}
              value={encounterData.diastolic}
            />
            <div className="errorDiv">
              {encounterErrors.diastolic.dataIsValid === false && (
              <p className="errorMsg">{encounterErrors.diastolic.errorMessage}</p>
              )}
            </div>
            <FormItem
              className="input"
              type="text"
              id="date"
              label="Encounter Date*"
              placeholder="ex. 2020-01-01"
              onChange={handleChange}
              value={encounterData.date}
            />
            <div className="errorDiv">
              {encounterErrors.date.dataIsValid === false && (
              <p className="errorMsg">{encounterErrors.date.errorMessage}</p>
              )}
            </div>
          </div>
        </div>
      </form>
      <div className="buttonWrapper">
        <div className="serverMsgDiv">
          {encounterSuccess === true && (
          <p className="successMsg">{successMsg}</p>
          )}
          {encounterFailure === true && (
          <p className="failureMsg">Oops! Something went wrong!</p>
          )}
        </div>
        <button
          type="submit"
          className="btn"
          id="callButton"
          onClick={() => HandleEncounterApiCall(encounterData,
            patientId,
            encounterId,
            setEncounterSuccess,
            setEncounterFailure,
            encounterErrors,
            setEncounterErrors,
            setApiError,
            encounterApiCall)}
        >
          {buttonLabel}
        </button>
        <button type="button" className="btn cancel" onClick={onClose}>Close</button>
      </div>
    </div>

  );
};

export default EncounterForm;
