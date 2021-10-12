/**
 *
 * @name validate
 * @description validates required fields of a form
 * @param {String} type - field type (text, currency, drop-down)
 * @param {String} name - to be displayed in the error toast
 * @param {String} data - value of the form field
 * @returns boolean whether the field is valid, error message if any in the form of an array.
 */
const currencyRegex = /^\$?\d+(?:\.\d\d)$/;
const alphaRegex = /^[a-zA-Z\s]+$/;
const alphaNumRegex = /^([1-zA-Z0-1@.\s]{1,255})$/;
const numRegex = /^\d+$/;
const postalRegex = /^[0-9]{5}(?:-[0-9]{4})?$/;
const dateRegex = /((\d{2})|(\d))\/((\d{2})|(\d))/;
const emailRegex = /\S+@\S+\.\S+/;
const ssnRegex = /^(?!666|000|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4}$/;
const stateRegex = /^(([Aa][EeLlKkSsZzRr])|([Cc][AaOoTt])|([Dd][EeCc])|([Ff][MmLl])|([Gg][AaUu])|([Hh][Ii])|([Ii][DdLlNnAa])|([Kk][SsYy])|([Ll][Aa])|([Mm][EeHhDdAaIiNnSsOoTt])|([Nn][EeVvHhJjMmYyCcDd])|([Mm][Pp])|([Oo][HhKkRr])|([Pp][WwAaRr])|([Rr][Ii])|([Ss][CcDd])|([Tt][NnXx])|([Uu][Tt])|([Vv][TtIiAa])|([Ww][AaVvIiYy]))$/;

const validate = (type, name, data) => {
  let isDataValid = true;
  let errorMsg = '';
  switch (type) {
    case 'text':
      if (!data || data.trim() === '') {
        isDataValid = false;
        errorMsg = `${name} field must not be left empty`;
      } else if (!(alphaRegex).test(data)) {
        isDataValid = false;
        errorMsg = `${name} should be letters only`;
      }
      break;
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
        errorMsg = `${name} must be in the proper format (DD/MM)`;
      }
      break;
    case 'currency':
      if (!data || data.trim() === '') {
        isDataValid = false;
        errorMsg = `${name} field must not be left empty`;
      } else if (!(currencyRegex.test(data))) {
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
    case 'alphaNum':
      if (!data || data.trim() === '') {
        isDataValid = false;
        errorMsg = `${name} field must not be left empty`;
      } else if (!(alphaNumRegex.test(data))) {
        isDataValid = false;
        errorMsg = `${name} field should be alphabetic or numeric`;
      }
      break;
    case 'gender':
      if (!data || data.trim() === '') {
        isDataValid = false;
        errorMsg = `${name} field must not be left empty`;
      // eslint-disable-next-line quotes
      } else if (data !== "male" && data !== "female" && data !== "other" && data !== "Male" && data !== "Female" && data !== "Other") {
        isDataValid = false;
        errorMsg = `${name} field should be male, female, or other`;
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
