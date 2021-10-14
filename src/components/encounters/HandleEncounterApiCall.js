import validateEncounter from './ValidateEncounter';

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

const handlePatientApiCall = (encounter,
  patientId,
  encounterId,
  setEncounterSuccess,
  setEncounterFailure,
  encounterErrors,
  setEncounterErrors,
  setEncounterApiError,
  encounterApiCall) => {
  setEncounterFailure(false);
  setEncounterSuccess(false);
  const { statelessEncounterErrors } = validateEncounter(encounter,
    encounterErrors,
    setEncounterErrors);
  const patientHasErrors = hasErrors(statelessEncounterErrors);
  if (!patientHasErrors) {
    encounterApiCall(
      encounterId,
      patientId,
      encounter.notes,
      encounter.visitCode,
      encounter.provider,
      encounter.billingCode,
      encounter.icd10,
      encounter.totalCost,
      encounter.copay,
      encounter.chiefComplaint,
      encounter.pulse,
      encounter.systolic,
      encounter.diastolic,
      encounter.date,
      setEncounterFailure,
      setEncounterSuccess,
      setEncounterApiError
    );
  }
};

export default handlePatientApiCall;
