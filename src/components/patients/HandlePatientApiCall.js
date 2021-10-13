import validatePatient from './ValidatePatient';

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
