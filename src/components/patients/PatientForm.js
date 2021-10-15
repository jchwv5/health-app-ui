/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './PatientForm.css';
import FormItem from '../../utils/FormItem';
import handlePatientApiCall from './HandlePatientApiCall';

/**
 * Modular form to be used for adding new patients and updating existing patients
 * @param {*} props - takes in parameters from onClick that calls the form to determine whether
 * form will be used for adding a new patient or updating an existing one
 * @returns - form component
 */
const PatientForm = (props) => {
  const { onClose } = props;
  const { patientApiCall } = props;
  const { patientId } = props;
  const { formHeader } = props;
  const { buttonLabel } = props;
  const { successMsg } = props;
  const [patientData, setPatientData] = useState({});
  const [apiError, setApiError] = useState(false);
  const [patientSuccess, setPatientSuccess] = useState(false);
  const [patientFailure, setPatientFailure] = useState(false);
  const [patientErrors, setPatientErrors] = useState({
    firstName: { dataIsValid: false, errorMessage: '' },
    lastName: { dataIsValid: false, errorMessage: '' },
    ssn: { dataIsValid: false, errorMessage: '' },
    email: { dataIsValid: false, errorMessage: '' },
    street: { dataIsValid: false, errorMessage: '' },
    city: { dataIsValid: false, errorMessage: '' },
    state: { dataIsValid: false, errorMessage: '' },
    postal: { dataIsValid: false, errorMessage: '' },
    age: { dataIsValid: false, errorMessage: '' },
    height: { dataIsValid: false, errorMessage: '' },
    weight: { dataIsValid: false, errorMessage: '' },
    insurance: { dataIsValid: false, errorMessage: '' },
    gender: { dataIsValid: false, errorMessage: '' }
  });

  const handleChange = (e) => {
    setPatientData((prevValue) => ({ ...prevValue, [e.target.id]: e.target.value }));
  };

  return (
    <div className="formPopup" id="myForm">
      <form action="/action_page.php" className="formContainer">
        <h1 className="formHeader">{formHeader}</h1>
        <div className="form">
          <div className="column">
            <FormItem
              className="input"
              type="text"
              id="firstName"
              label="First Name"
              placeholder="ex. John"
              onChange={handleChange}
              value={patientData.firstName}
            />
            <div className="errorDiv">
              {patientErrors.firstName.dataIsValid === false && (
              <p className="errorMsg">{patientErrors.firstName.errorMessage}</p>
              )}
            </div>
            <FormItem
              className="input"
              type="text"
              id="lastName"
              label="Last Name"
              placeholder="ex. Smith"
              onChange={handleChange}
              value={patientData.lastName}
            />
            <div className="errorDiv">
              {patientErrors.lastName.dataIsValid === false && (
              <p className="errorMsg">{patientErrors.lastName.errorMessage}</p>
              )}
            </div>
            <FormItem
              className="input"
              type="text"
              id="ssn"
              label="SSN"
              placeholder="ex. 555-55-5555"
              onChange={handleChange}
              value={patientData.ssn}
            />
            <div className="errorDiv">
              {patientErrors.ssn.dataIsValid === false && (
              <p className="errorMsg">{patientErrors.ssn.errorMessage}</p>
              )}
            </div>
            <FormItem
              className="input"
              type="text"
              id="email"
              label="Email"
              placeholder="ex. john.smith@gmail.com"
              onChange={handleChange}
              value={patientData.email}
            />
            <div className="errorDiv">
              {patientErrors.email.dataIsValid === false && (
              <p className="errorMsg">{patientErrors.email.errorMessage}</p>
              )}
            </div>
          </div>
          <div className="column">
            <FormItem
              className="input"
              type="text"
              id="street"
              label="Street"
              placeholder="123 Test Street"
              onChange={handleChange}
              value={patientData.street}
            />
            <div className="errorDiv">
              {patientErrors.street.dataIsValid === false && (
              <p className="errorMsg">{patientErrors.street.errorMessage}</p>
              )}
            </div>
            <FormItem
              className="input"
              type="text"
              id="city"
              label="City"
              placeholder="ex. Denver"
              onChange={handleChange}
              value={patientData.city}
            />
            <div className="errorDiv">
              {patientErrors.city.dataIsValid === false && (
              <p className="errorMsg">{patientErrors.city.errorMessage}</p>
              )}
            </div>
            <FormItem
              className="input"
              type="text"
              id="state"
              label="State"
              placeholder="ex. CO"
              onChange={handleChange}
              value={patientData.state}
            />
            <div className="errorDiv">
              {patientErrors.state.dataIsValid === false && (
              <p className="errorMsg">{patientErrors.state.errorMessage}</p>
              )}
            </div>
            <FormItem
              className="input"
              type="text"
              id="postal"
              label="Zip Code"
              placeholder="ex. 55555-5555"
              onChange={handleChange}
              value={patientData.postal}
            />
            <div className="errorDiv">
              {patientErrors.postal.dataIsValid === false && (
              <p className="errorMsg">{patientErrors.postal.errorMessage}</p>
              )}
            </div>
          </div>
          <div className="column">
            <FormItem
              className="input"
              type="text"
              id="age"
              label="Age"
              placeholder="ex. 54"
              onChange={handleChange}
              value={patientData.age}
            />
            <div className="errorDiv">
              {patientErrors.age.dataIsValid === false && (
              <p className="errorMsg">{patientErrors.age.errorMessage}</p>
              )}
            </div>
            <FormItem
              className="input"
              type="text"
              id="height"
              label="Height (in Inches)"
              placeholder="ex. 72"
              onChange={handleChange}
              value={patientData.height}
            />
            <div className="errorDiv">
              {patientErrors.height.dataIsValid === false && (
              <p className="errorMsg">{patientErrors.height.errorMessage}</p>
              )}
            </div>
            <FormItem
              className="input"
              type="text"
              id="weight"
              label="Weight (in Pounds)"
              placeholder="ex. 195"
              onChange={handleChange}
              value={patientData.weight}
            />
            <div className="errorDiv">
              {patientErrors.weight.dataIsValid === false && (
              <p className="errorMsg">{patientErrors.weight.errorMessage}</p>
              )}
            </div>
            <FormItem
              className="input"
              type="text"
              id="insurance"
              label="Insurance Provider"
              placeholder="ex. Blue Cross"
              onChange={handleChange}
              value={patientData.insurance}
            />
            <div className="errorDiv">
              {patientErrors.insurance.dataIsValid === false && (
              <p className="errorMsg">{patientErrors.insurance.errorMessage}</p>
              )}
            </div>
            <FormItem
              className="input"
              type="text"
              id="gender"
              label="Gender"
              placeholder="Enter Male, Female or Other"
              onChange={handleChange}
              value={patientData.gender}
            />
            <div className="errorDiv">
              {patientErrors.gender.dataIsValid === false && (
              <p className="errorMsg">{patientErrors.gender.errorMessage}</p>
              )}
            </div>
          </div>
        </div>
      </form>
      <div className="buttonWrapper">
        <div className="serverMsgDiv">
          {patientSuccess === true && (
          <p className="successMsg">{successMsg}</p>
          )}
          {patientFailure === true && (
          <p className="failureMsg">Oops! Something went wrong!</p>
          )}
        </div>
        <button
          type="submit"
          className="btn"
          onClick={() => handlePatientApiCall(patientData,
            patientId,
            setPatientSuccess,
            setPatientFailure,
            patientErrors,
            setPatientErrors,
            setApiError,
            patientApiCall)}
        >
          {buttonLabel}
        </button>
        <button type="button" className="btn cancel" onClick={onClose}>Close</button>
      </div>
    </div>

  );
};

export default PatientForm;
