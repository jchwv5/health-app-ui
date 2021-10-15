import HttpHelper from '../../utils/HttpHelper';
import Constants from '../../utils/constants';

/**
 * API call to delete a patient from the database,
 * provided that they have no encounters associated with them
 * @param {*} setApiError - state function to set API error if call fails
 * @param {*} setDeleteCount - state function to trigger page display to reload
 * @param {*} id - ID of patient to be deleted
 */
async function deletePatientById(setApiError, setDeleteCount, id) {
  await HttpHelper(Constants.PATIENT_BY_ID_ENDPOINT + id, 'DELETE')
    .catch(() => {
      setApiError(true);
    });
  setDeleteCount(id);
}

export default deletePatientById;
