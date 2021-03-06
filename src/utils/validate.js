/**
 *
 * @name validate
 * @description validates required fields of a form
 * @param {String} type - field type (text, currency, drop-down)
 * @param {String} name - to be displayed in the error toast
 * @param {String} data - value of the form field
 * @returns boolean whether the field is valid, error message if any in the form of an array.
 */

const numRegex = /^\d+$/;
const postalRegex = /^[0-9]{5}(?:-[0-9]{4})?$/;
const dateRegex = /\d{4}-\d{2}-\d{2}/;
const emailRegex = /\S+@\S+\.\S+/;
const ssnRegex = /^\d{3}-\d{2}-\d{4}$/;
const stateRegex = /^(([Aa][EeLlKkSsZzRr])|([Cc][AaOoTt])|([Dd][EeCc])|([Ff][MmLl])|([Gg][AaUu])|([Hh][Ii])|([Ii][DdLlNnAa])|([Kk][SsYy])|([Ll][Aa])|([Mm][EeHhDdAaIiNnSsOoTt])|([Nn][EeVvHhJjMmYyCcDd])|([Mm][Pp])|([Oo][HhKkRr])|([Pp][WwAaRr])|([Rr][Ii])|([Ss][CcDd])|([Tt][NnXx])|([Uu][Tt])|([Vv][TtIiAa])|([Ww][AaVvIiYy]))$/;
const visitCodeRegex = /^[A-Z]\d[A-Z]\s\d[A-Z]\d$/;
const billingCodeRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
const icd10Regex = /^[A-Z]\d{2}$/;
const currencyRegex = /^[1-9][0-9]*\.\d{2}?$/;

const validate = (type, name, data) => {
  let isDataValid = true;
  let errorMsg = '';
  switch (type) {
    case 'numeric':
      if (!data || data.trim() === '') {
        isDataValid = false;
        errorMsg = `${name} field must not be left empty`;
      } else if (!(numRegex).test(data)) {
        isDataValid = false;
        errorMsg = `${name} should be numbers only`;
      }
      break;
    case 'email':
      if (!data || data.trim() === '') {
        isDataValid = false;
        errorMsg = `${name} field must not be left empty`;
      } else if (!(emailRegex.test(data))) {
        isDataValid = false;
        errorMsg = 'Please enter a valid e-mail address';
      }
      break;
    case 'ssn':
      if (!data || data.trim() === '') {
        isDataValid = false;
        errorMsg = `${name} field must not be left empty`;
      } else if (!(ssnRegex.test(data))) {
        isDataValid = false;
        errorMsg = `${name} must be in format XXX-XX-XXXX`;
      }
      break;
    case 'state':
      if (!data || data.trim() === '') {
        isDataValid = false;
        errorMsg = `${name} field must not be left empty`;
      } else if (!(stateRegex.test(data))) {
        isDataValid = false;
        errorMsg = `${name} is invalid`;
      }
      break;
    case 'date':
      if (!data || data.trim() === '') {
        isDataValid = false;
        errorMsg = `${name} field must not be left empty`;
      } else if (!(dateRegex.test(data))) {
        isDataValid = false;
        errorMsg = `${name} must be in the proper format (YYYY-DD-MM)`;
      }
      break;
    case 'currency':
      if (!data || data.trim() === '') {
        isDataValid = false;
        errorMsg = `${name} field must not be left empty`;
      } else if (!(currencyRegex.test(data)) && data !== '0' && data !== '0.00') {
        isDataValid = false;
        errorMsg = `${name} should be in dollars and cents`;
      }
      break;
    case 'postal':
      if (!data || data.trim() === '') {
        isDataValid = false;
        errorMsg = `${name} field must not be left empty`;
      } else if (!(postalRegex.test(data))) {
        isDataValid = false;
        errorMsg = `${name} must be in format XXXXX or XXXXX-XXXX`;
      }
      break;
    case 'gender':
      if (!data || data.trim() === '') {
        isDataValid = false;
        errorMsg = `${name} field must not be left empty`;
      // eslint-disable-next-line quotes
      } else if (data !== "Male" && data !== "Female" && data !== "Other") {
        isDataValid = false;
        errorMsg = `${name} field should be Male, Female, or Other`;
      }
      break;
    case 'visitCode':
      if (!data || data.trim() === '') {
        isDataValid = false;
        errorMsg = `${name} field must not be left empty`;
      } else if (!(visitCodeRegex.test(data))) {
        isDataValid = false;
        errorMsg = `${name} must be in LDL DLD format`;
      }
      break;
    case 'billingCode':
      if (!data || data.trim() === '') {
        isDataValid = false;
        errorMsg = `${name} field must not be left empty`;
      } else if (!(billingCodeRegex.test(data))) {
        isDataValid = false;
        errorMsg = `${name} must be in DDD.DDD.DDD-DD format`;
      }
      break;
    case 'icd10':
      if (!data || data.trim() === '') {
        isDataValid = false;
        errorMsg = `${name} field must not be left empty`;
      } else if (!(icd10Regex.test(data))) {
        isDataValid = false;
        errorMsg = `${name} must be in LDD format`;
      }
      break;
    case 'nonRequiredNum':
      if (data) {
        if (!(numRegex.test(data))) {
          isDataValid = false;
          errorMsg = `${name} must be a number`;
        }
      }
      break;
    case 'required':
      if (!data || data.trim() === '') {
        isDataValid = false;
        errorMsg = `${name} field must not be left empty`;
      }
      break;
    default:
      isDataValid = false;
      errorMsg = `No data provided for ${name} field`;
      break;
  }

  return {
    dataIsValid: isDataValid,
    errorMessage: errorMsg
  };
};

export default validate;
