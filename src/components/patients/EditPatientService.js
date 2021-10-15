import HttpHelper from '../../utils/HttpHelper';
import constants from '../../utils/constants';

/**
 * API call to edit a patient in the database
 * @param {*} patientId - ID of patient to be edited
 * @param {*} firstName - first name of patient
 * @param {*} lastName - last name of patient
 * @param {*} ssn - ssn of patient
 * @param {*} email - email of patient
 * @param {*} street - street address of patient
 * @param {*} city - city of patient
 * @param {*} state - state of patient
 * @param {*} postal - zip code of patient
 * @param {*} age - age of patient
 * @param {*} height - height of patient
 * @param {*} weight - weight of patient
 * @param {*} insurance - patient's insurance provider
 * @param {*} gender - gender of patient
 * @param {*} setPatientFailure - state function to trigger success message if call succeeds
 * @param {*} setPatientSuccess - state function to triger failure message if call fails
 * @param {*} setApiError - state function to set API error if call fails
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
