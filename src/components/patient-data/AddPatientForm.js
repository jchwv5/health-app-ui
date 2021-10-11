/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './AddPatientForm.css';

const AddPatientForm = (props) => {
  const { onClose } = props;
  return (
    <div className="form-popup" id="myForm">
      <form action="/action_page.php" className="form-container">
        <h1>Add A Patient</h1>
        <div className="form">
          <div className="column">
            <div className="patientInput">
              <label htmlFor="firstName"><b>First Name</b></label>
              <input type="text" placeholder="ex. John" name="firstName" required />
            </div>
            <div className="patientInput">
              <label htmlFor="lastName"><b>Last Name</b></label>
              <input type="text" placeholder="ex. Smith" name="lastName" required />
            </div>
            <div className="patientInput">
              <label htmlFor="ssn"><b>SSN</b></label>
              <input type="text" placeholder="ex. 555-55-5555" name="ssn" required />
            </div>
            <div className="patientInput">
              <label htmlFor="email"><b>Email</b></label>
              <input type="text" placeholder="ex. john.smith@gmail.com" name="email" required />
            </div>
          </div>
          <div className="column">
            <label htmlFor="street"><b>Street Address</b></label>
            <input type="text" placeholder="ex. 123 Hogh Street" name="street" required />
            <div className="patientInput">
              <label htmlFor="city"><b>City</b></label>
              <input type="text" placeholder="ex. Denver" name="city" required />
            </div>
            <div className="patientInput">
              <label htmlFor="state"><b>State</b></label>
              <input type="text" placeholder="ex. Colorado" name="state" required />
            </div>
            <div className="patientInput">
              <label htmlFor="postal"><b>Postal</b></label>
              <input type="text" placeholder="ex. 55555" name="postal" required />
            </div>
          </div>
          <div className="column">
            <div className="patientInput">
              <label htmlFor="age"><b>Age</b></label>
              <input type="text" placeholder="ex. 55" name="age" required />
            </div>
            <div className="patientInput">
              <label htmlFor="height"><b>Height (in inches)</b></label>
              <input type="text" placeholder="ex. 72" name="height" required />
            </div>
            <div className="patientInput">
              <label htmlFor="weight"><b>Weight (in pounds)</b></label>
              <input type="text" placeholder="ex. 195" name="weight" required />
            </div>
            <div className="patientInput">
              <label htmlFor="insurance"><b>Insurance Provider</b></label>
              <input type="text" placeholder="ex. Blue Cross" name="insurance" required />
            </div>
            <div className="patientInput">
              <label htmlFor="gender"><b>Gender</b></label>
              <input type="text" placeholder="Male, Female or Other" name="gender" required />
            </div>
          </div>
        </div>
      </form>
      <div className="buttonWrapper">
        <button type="submit" className="btn">Add Patient</button>
        <button type="button" className="btn cancel" onClick={onClose}>Close</button>
      </div>
      <div className="modalCover" />
    </div>

  );
};

export default AddPatientForm;
