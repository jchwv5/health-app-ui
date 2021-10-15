import validatePatient from './ValidatePatient';

/**
 * checks whether the patient provided has passed validation
 * @param {*} errorInfo - stateless error list passed in by validation function
 * @returns - array containing all validation errors
 */
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

/**
 * validates the passed patient, then parses patient to be passed to specified API call
 * @param {*} patient - patient to be validated
 * @param {*} patientId - patient ID
 * @param {*} setPatientSuccess - state function to be passed to API call
 * @param {*} setPatientFailure - state function to be passed to API call
 * @param {*} patientErrors - errors array to be passed to validation method
 * @param {*} setPatientErrors - state function to set patient errors to trigger error divs if
 * patient fails validation
 * @param {*} setApiError state function to be passed to API call
 * @param {*} patientApiCall - specific API call to be made if patient passes validation
 */
const handlePatientApiCall = (patient,
  patientId,
  setPatientSuccess,
  setPatientFailure,
  patientErrors,
  setPatientErrors,
  setApiError,
  patientApiCall) => {
  setPatientFailure(false);
  setPatientSuccess(false);
  const { statelessPatientErrors } = validatePatient(patient, patientErrors, setPatientErrors);
  const patientHasErrors = hasErrors(statelessPatientErrors);
  if (!patientHasErrors) {
    patientApiCall(
      patientId,
      patient.firstName,
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
      setApiError
    );
  }
};

export default handlePatientApiCall;
