import HttpHelper from '../../utils/HttpHelper';
import constants from '../../utils/constants';

/**
 * Makes call to API to add a new encounter
 * @param {*} id - encoutner ID to be added
 * @param {*} patientId - Patient ID to be associated with encounter
 * @param {*} notes - provider's notes on patient
 * @param {*} visitCode - encounter visit code
 * @param {*} provider - encounter provider
 * @param {*} billingCode - encounter billing code
 * @param {*} icd10 - encounter ICD10
 * @param {*} totalCost - encounter total cost
 * @param {*} copay - encounter copay
 * @param {*} chiefComplaint - patient's primary reason for encounter
 * @param {*} pulse - patient's pulse
 * @param {*} systolic - patient's systolic
 * @param {*} diastolic - patient's diatolic
 * @param {*} date - encounter date
 * @param {*} setEncounterFailure - set state to trigger failure message when call fails
 * @param {*} setEncounterSuccess - set state to trigger success message when encounter succeeds
 * @param {*} setApiError - set API error state if encounter fails
 */
export default async function addEncounter(id,
  patientId,
  notes,
  visitCode,
  provider,
  billingCode,
  icd10,
  totalCost,
  copay,
  chiefComplaint,
  pulse,
  systolic,
  diastolic,
  date,
  setEncounterFailure,
  setEncounterSuccess,
  setApiError) {
  await HttpHelper(`${constants.PATIENT_BY_ID_ENDPOINT + patientId}/encounters/`, 'POST', {
    patientId,
    notes,
    visitCode,
    provider,
    billingCode,
    icd10,
    totalCost,
    copay,
    chiefComplaint,
    pulse,
    systolic,
    diastolic,
    date
  })
    .then((response) => {
      if (response.ok) {
        setEncounterSuccess(true);
        return response.json();
      }
      throw new Error(constants.API_ERROR);
    })
    .catch(() => {
      setApiError(true);
      setEncounterFailure(true);
    });
}
