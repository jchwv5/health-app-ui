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
export default async function addPatient(
  patientId,
  firstName,
  lastName,
  ssn,
  email,
  street,
  city,
  state,
  postal,
  age,
  height,
  weight,
  insurance,
  gender,
  setPatientFailure,
  setPatientSuccess,
  setApiError
) {
  await HttpHelper(Constants.ALL_PATIENTS_ENDPOINT, 'POST', {
    firstName,
    lastName,
    ssn,
    email,
    street,
    city,
    state,
    postal,
    age,
    height,
    weight,
    insurance,
    gender
  })
    .then((response) => {
      if (response.ok) {
        setPatientSuccess(true);
        return response.json();
      }
      throw new Error(Constants.API_ERROR);
    })
    .catch(() => {
      setApiError(true);
      setPatientFailure(true);
    });
}
