/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './AddPatientForm.css';

const AddPatientForm = (props) => {
  const { onClose } = props;
  return (
    <div className="form-popup" id="myForm">
      <form action="/action_page.php" className="form-container">
        <h1>Add A Patient</h1>

        <label htmlFor="firstName"><b>First Name</b></label>
        <input type="text" placeholder="ex. John" name="firstName" required />

        <label htmlFor="lastName"><b>Last Name</b></label>
        <input type="text" placeholder="ex. Smith" name="lastName" required />

        <label htmlFor="ssn"><b>SSN</b></label>
        <input type="text" placeholder="ex. 555-55-5555" name="ssn" required />

        <label htmlFor="email"><b>Email</b></label>
        <input type="text" placeholder="ex. john.smith@gmail.com" name="email" required />

        <label htmlFor="street"><b>Street Address</b></label>
        <input type="text" placeholder="ex. 123 Hogh Street" name="street" required />

        <label htmlFor="city"><b>City</b></label>
        <input type="text" placeholder="ex. Denver" name="city" required />

        <label htmlFor="state"><b>State</b></label>
        <input type="text" placeholder="ex. Colorado" name="state" required />

        <label htmlFor="postal"><b>Postal</b></label>
        <input type="text" placeholder="ex. 55555" name="postal" required />

        <label htmlFor="age"><b>Age</b></label>
        <input type="text" placeholder="ex. 55" name="age" required />

        <label htmlFor="height"><b>Height (in inches)</b></label>
        <input type="text" placeholder="ex. 72" name="height" required />

        <label htmlFor="weight"><b>Weight (in pounds)</b></label>
        <input type="text" placeholder="ex. 195" name="weight" required />

        <label htmlFor="insurance"><b>Insurance Provider</b></label>
        <input type="text" placeholder="ex. Blue Cross" name="insurance" required />

        <label htmlFor="gender"><b>Gender</b></label>
        <input type="text" placeholder="Male, Female or Other" name="gender" required />

        <button type="submit" className="btn">Add Patient</button>
        <button type="button" className="btn cancel" onClick={onClose}>Close</button>
      </form>
    </div>

  );
};

export default AddPatientForm;
