import constants from '../../utils/constants';
import HttpHelper from '../../utils/HttpHelper';

/**
 * gets all encounters associated with a patientID from the API
 * @param {*} setEncounters - sets state for encounters to be shown on patient details page
 * @param {*} setApiError - sets API error if call fails
 * @param {*} id - patient ID to get encounters for
 */
async function fetchEncounters(setEncounters, setApiError, id) {
  await HttpHelper(`${constants.PATIENT_BY_ID_ENDPOINT + id}/encounters`, 'GET')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(constants.API_ERROR);
    })
    .then(setEncounters)
    .catch(() => {
      setApiError(true);
    });
}
/**
 * gets a specific encounter from the API to display in encounter details display
 * @param {*} setEncounter - sets state for encounter to be displayed
 * @param {*} setApiError - sets state for API error if call fails
 * @param {*} patientId - patient ID associated with the encounter
 * @param {*} encounterId - ID of the encounter to be retrieved
 */
async function fetchEncounterById(setEncounter, setApiError, patientId, encounterId) {
  await HttpHelper(`${constants.PATIENT_BY_ID_ENDPOINT + patientId}/encounters/${encounterId}`, 'GET')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(constants.API_ERROR);
    })
    .then(setEncounter)
    .catch(() => {
      setApiError(true);
    });
}

export { fetchEncounters, fetchEncounterById };
