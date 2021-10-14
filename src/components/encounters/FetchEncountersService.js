import constants from '../../utils/constants';
import HttpHelper from '../../utils/HttpHelper';

/**
 *
 * @name fetchProducts
 * @description Utilizes HttpHelper to make a get request to an API
 * @param {*} setProducts sets state for products
 * @param {*} setApiError sets error if response other than 200 is returned
 * @returns sets state for products if 200 response, else sets state for apiError
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
