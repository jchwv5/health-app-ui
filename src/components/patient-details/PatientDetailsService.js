import HttpHelper from '../../utils/HttpHelper';
import Constants from '../../utils/constants';

/**
 * AAPI call to retrieve information for a specific patient to display on the patient details page
 * @param {*} setPatient - state function to set patient details for patient details display
 * @param {*} setApiError - state function to set API error if call fails
 * @param {*} id ID of patient to retrieve from the database
 */
async function fetchPatientInfo(setPatient, setApiError, id) {
  await HttpHelper(Constants.PATIENT_BY_ID_ENDPOINT + id, 'GET')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(Constants.API_ERROR);
    })
    .then(setPatient)
    .catch(() => {
      setApiError(true);
    });
}
export default fetchPatientInfo;
