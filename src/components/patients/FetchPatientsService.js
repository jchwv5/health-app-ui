import HttpHelper from '../../utils/HttpHelper';
import constants from '../../utils/constants';

/**
 * function to retrieve all patients from the database
 */
export default async function fetchPatients(setPatients, setApiError) {
  await HttpHelper(constants.ALL_PATIENTS_ENDPOINT, 'GET')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(constants.API_ERROR);
    })
    .then(setPatients)
    .catch(() => {
      setApiError(true);
    });
}
