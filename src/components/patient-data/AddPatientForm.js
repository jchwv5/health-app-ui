/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './AddPatientForm.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import validate from '../../utils/validate';
import FormItem from '../../utils/FormItem';
import addPatient from './AddPatientService';

const AddPatientForm = (props) => {
  const { onClose } = props;
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

  const hasErrors = (errorInfo) => {
    const errorList = [];

    Object.values(errorInfo).forEach((e) => {
      if (e.dataIsValid === false) {
        errorList.push(e.dataIsValid);
      }
    });
    if (errorList.length > 0) return true;
    return false;
  };

  const handleChange = (e) => {
    setPatientData((prevValue) => ({ ...prevValue, [e.target.id]: e.target.value }));
  };

  const validatePatient = (patient) => {
    const statelessPatientErrors = {
      ...patientErrors,
      firstName: validate('required', 'First name', patient.firstName),
      lastName: validate('required', 'Last name', patient.lastName),
      ssn: validate('ssn', 'SSN', patient.ssn),
      email: validate('email', 'Email', patient.email),
      street: validate('required', 'State', patient.street),
      city: validate('required', 'City', patient.city),
      state: validate('state', 'State', patient.state),
      postal: validate('postal', 'Zip code', patient.postal),
      age: validate('numeric', 'Age', patient.age),
      height: validate('numeric', 'Height', patient.height),
      weight: validate('numeric', 'Weight', patient.weight),
      insurance: validate('required', 'Insurance', patient.insurance),
      gender: validate('gender', 'Gender', patient.gender)
    };
    setPatientErrors(statelessPatientErrors);

    return { statelessPatientErrors };
  };

  const handleAddPatient = (patient) => {
    setPatientFailure(false);
    setPatientSuccess(false);
    const { statelessPatientErrors } = validatePatient(patient);
    const patientHasErrors = hasErrors(statelessPatientErrors);
    if (!patientHasErrors) {
      addPatient(patient.firstName,
        patient.lastName,
        patient.ssn,
        patient.email,
        patient.street,
        patient.city,
        patient.state,
        patient.postal,
        patient.age,
        patient.height,
        patient.weight,
        patient.insurance,
        patient.gender,
        setPatientFailure,
        setPatientSuccess,
        setApiError);
    }
  };

  return (
    <div className="formPopup" id="myForm">
      <form action="/action_page.php" className="formContainer">
        <h1>Add A Patient</h1>
        <div className="form">
          <div className="column">
            <FormItem
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
          <p className="successMsg">Patient Added Successfully!</p>
          )}
          {patientFailure === true && (
          <p className="failureMsg">Oops! Something went wrong!</p>
          )}
        </div>
        <button type="submit" className="btn" onClick={() => handleAddPatient(patientData)}>Add Patient</button>
        <button type="button" className="btn cancel" onClick={onClose}>Close</button>
      </div>
      <div className="modalCover" />
    </div>

  );
};

export default AddPatientForm;
