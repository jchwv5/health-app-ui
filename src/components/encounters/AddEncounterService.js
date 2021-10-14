import HttpHelper from '../../utils/HttpHelper';
import constants from '../../utils/constants';

/**
 *
 * @name updateEncounter
 * @description Utilizes HttpHelper to make a get request to an API
 * @param {*} setUpdatedProducts updates products
 * @param {*} setApiError sets error if response other than 200 is returned
 * @returns updates state for products if 200 response, else sets state for apiError
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
