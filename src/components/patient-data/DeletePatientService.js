import HttpHelper from '../../utils/HttpHelper';
import Constants from '../../utils/constants';

/**
 * Handles the request to the endpoint on the backend to delete the product
 * with the matching product id
 * @name deleteProductById
 * @description Utilizes HttpHelper to make a get request to an API
 * @param {*} setApiError sets error if response other than 200 is returned
 * @param {*} id The ID for the product that is to be deleted.
 * @returns Sends toast notifcation if it succeeds, else sets state for apiError
 */
async function deletePatientById(setApiError, setDeleteCount, id) {
  await HttpHelper(Constants.PATIENT_BY_ID_ENDPOINT + id, 'DELETE')
    .catch(() => {
      setApiError(true);
    });
  setDeleteCount(id);
}

export default deletePatientById;
