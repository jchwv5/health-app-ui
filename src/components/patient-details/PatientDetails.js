import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Constants from '../../utils/constants';
import fetchPatientInfo from './PatientDetailsService';
import style from './PatientDetails.module.css';

const PatientDetails = () => {
  const location = useLocation();
  const { id } = location.state;
  const [patient, setPatient] = React.useState({});
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    fetchPatientInfo(setPatient, setApiError, id);
  }, [id]);
  /**
   *
   * @name handleSubmit
   * @description sends request to save valid form data, then displays status toast
   */

  return (
    <div className={style.userField}>
      {apiError && <p className={style.errMsg} data-testid="errMsg">{Constants.API_ERROR}</p>}
      {!apiError && (
      <div className={style.form}>
        <>
          <form>
            <div className={style.userInfo}>
              <p
                type="text"
                id="firstName"
                label="First Name"
                value={patient.firstName}
              />
              <p
                type="text"
                id="lastName"
                label="Last Name"
                value={patient.lastName}
              />
              <p
                type="text"
                id="streetAddress"
                label="Street Address"
                value={patient.street}
              />
              <p
                type="text"
                id="city"
                label="City"
                value={patient.city}
              />
              <p
                id="state"
                label="State"
                value={patient.state}
              />
              <p
                type="text"
                id="postal"
                label="Zip Code"
                value={patient.zipCode}
              />
            </div>
          </form>
        </>
      </div>
      )}
      <div className={style.buttons}>
        <button id="submit" type="button" className={style.saveButton}>
          Save changes
        </button>
        <button type="button" className={style.historyButton}>
          View purchase history
        </button>
      </div>
    </div>
  );
};

export default PatientDetails;
