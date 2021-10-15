import validateEncounter from './ValidateEncounter';
/**
 * checks whether the encounter provided has passed validation
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
 * validates the passed encounter, then parses encounter to be passed to specified API call
 * @param {*} encounter - encounter to be validated
 * @param {*} patientId - patient ID associated with the encounter
 * @param {*} encounterId - ID of the encounter
 * @param {*} setEncounterSuccess - state function to be passed to API call
 * @param {*} setEncounterFailure - state function to be passed to API call
 * @param {*} encounterErrors - errors array to be passed to validation method
 * @param {*} setEncounterErrors - state function to set encounter errors to trigger error divs if
 * encounter fails validation
 * @param {*} setEncounterApiError state function to be passed to API call
 * @param {*} encounterApiCall - specific API call to be made if encounter passes validation
 */
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
