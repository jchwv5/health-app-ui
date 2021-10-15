import validate from '../../utils/validate';

/**
 * validates patient based on specific parameters
 * @param {*} patient - patient to be validated
 * @param {*} patientErrors - errors to base stateless errors
 * @param {*} setPatientErrors - state function to set errors
 * @returns - array of stateless errors
 */
const validatePatient = (patient, patientErrors, setPatientErrors) => {
  const statelessPatientErrors = {
    ...patientErrors,
    firstName: validate('required', 'First name', patient.firstName),
    lastName: validate('required', 'Last name', patient.lastName),
    ssn: validate('ssn', 'SSN', patient.ssn),
    email: validate('email', 'Email', patient.email),
    street: validate('required', 'Street', patient.street),
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

export default validatePatient;
