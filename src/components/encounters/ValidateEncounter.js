import validate from '../../utils/validate';
/**
 * validates encounter based on specific parameters
 * @param {*} encounter - encounter to be validated
 * @param {*} encounterErrors - errors to base stateless errors
 * @param {*} setEncounterErrors - state function to set errors
 * @returns - array of stateless errors
 */
const validateEncounter = (encounter, encounterErrors, setEncounterErrors) => {
  const statelessEncounterErrors = {
    ...encounterErrors,
    visitCode: validate('visitCode', 'Visit Code', encounter.visitCode),
    provider: validate('required', 'Provider', encounter.provider),
    billingCode: validate('billingCode', 'Billing Code', encounter.billingCode),
    icd10: validate('icd10', 'ICD10', encounter.icd10),
    totalCost: validate('currency', 'Total Cost', encounter.totalCost),
    copay: validate('currency', 'Copay', encounter.copay),
    chiefComplaint: validate('required', 'Chief Complaint', encounter.chiefComplaint),
    pulse: validate('nonRequiredNum', 'Pulse', encounter.pulse),
    systolic: validate('nonRequiredNum', 'Systolic', encounter.systolic),
    diastolic: validate('nonRequiredNum', 'Diastolic', encounter.diastolic),
    date: validate('date', 'Date', encounter.date)
  };
  setEncounterErrors(statelessEncounterErrors);

  return { statelessEncounterErrors };
};

export default validateEncounter;
