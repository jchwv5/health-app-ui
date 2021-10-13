import HttpHelper from '../../utils/HttpHelper';
import constants from '../../utils/constants';

/**
 *
 * @name updateProducts
 * @description Utilizes HttpHelper to make a get request to an API
 * @param {*} setUpdatedProducts updates products
 * @param {*} setApiError sets error if response other than 200 is returned
 * @returns updates state for products if 200 response, else sets state for apiError
 */
export default async function updatePatient(id,
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
  setApiError) {
  await HttpHelper(constants.PATIENT_BY_ID_ENDPOINT + id, 'PUT', {
    id,
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
      throw new Error(constants.API_ERROR);
    })
    .catch(() => {
      setApiError(true);
      setPatientFailure(true);
    });
}
