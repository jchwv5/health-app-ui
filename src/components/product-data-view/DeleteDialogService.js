import HttpHelper from '../../utils/HttpHelper';
import Constants from '../../utils/constants';

/**
 * Handles the request to the endpoint on the backend to fetch the product information from
 * the database to check for purchases.
 * @name fetchPurchaseInfo
 * @description Utilizes HttpHelper to make a get request to an API
 * @param {*} setPurchases sets state for the purchases
 * @param {*} setApiError sets error if response other than 200 is returned
 * @param {*} id The product ID to check the database for purchases
 * @returns sets state for purchases if 200 response, else sets state for apiError
 */
async function fetchEncounterInfo(setEncounters, setApiError, patientId) {
  await HttpHelper(`patients/${patientId}/encounters`, 'GET')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(Constants.API_ERROR);
    })
    .then(setEncounters)
    .catch(() => {
      setApiError(true);
    });
}

export default fetchEncounterInfo;
