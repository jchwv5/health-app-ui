import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import PatientForm from '../components/patients/PatientForm';

it('renders successfully', () => {
  const div = document.createElement('div');
  ReactDom.render(<PatientForm />, div);
  ReactDom.unmountComponentAtNode(div);
});

it('App component matches snapshot', () => {
  const component = renderer.create(<PatientForm />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('form validation fails empty form', () => {
  const { getByLabelText, getByText } = render(<PatientForm buttonLabel="Edit Patient" />);
  fireEvent.change(getByLabelText('First Name'), { target: { value: '' } });
  fireEvent.change(getByLabelText('Last Name'), { target: { value: '' } });
  fireEvent.change(getByLabelText('SSN'), { target: { value: '' } });
  fireEvent.change(getByLabelText('Email'), { target: { value: '' } });
  fireEvent.change(getByLabelText('Street'), { target: { value: '' } });
  fireEvent.change(getByLabelText('City'), { target: { value: '' } });
  fireEvent.change(getByLabelText('State'), { target: { value: '' } });
  fireEvent.change(getByLabelText('Zip Code'), { target: { value: '' } });
  fireEvent.change(getByLabelText('Age'), { target: { value: '' } });
  fireEvent.change(getByLabelText('Height (in Inches)'), { target: { value: '' } });
  fireEvent.change(getByLabelText('Weight (in Pounds)'), { target: { value: '' } });
  fireEvent.change(getByLabelText('Insurance Provider'), { target: { value: '' } });
  fireEvent.change(getByLabelText('Gender'), { target: { value: '' } });
  fireEvent.click(getByText('Edit Patient'));

  expect(getByText('Gender field must not be left empty',
    'Insurance provider field must not be left empty',
    'Weight field must not be left empty',
    'Height field must not be left empty',
    'Age field must not be left empty',
    'Zip code field must not be left empty',
    'State field must not be left empty',
    'City field must not be left empty',
    'Street field must not be left empty',
    'Email field must not be left empty',
    'SSN field must not be left empty',
    'Last name field must not be left empty',
    'First name field must not be left empty')).toBeInTheDocument();
});

it('form fails invalid Email Field', () => {
  const { getByLabelText, getByText } = render(<PatientForm buttonLabel="Edit Patient" />);
  fireEvent.change(getByLabelText('First Name'), { target: { value: '55' } });
  fireEvent.change(getByLabelText('Last Name'), { target: { value: 'Smith' } });
  fireEvent.change(getByLabelText('SSN'), { target: { value: '555-55-5555' } });
  fireEvent.change(getByLabelText('Email'), { target: { value: 'john.smith@gmail.com' } });
  fireEvent.change(getByLabelText('Street'), { target: { value: '123 Test Street' } });
  fireEvent.change(getByLabelText('City'), { target: { value: 'Denver' } });
  fireEvent.change(getByLabelText('State'), { target: { value: 'CO' } });
  fireEvent.change(getByLabelText('Zip Code'), { target: { value: 'ksdfjahskdjhfdaksj' } });
  fireEvent.change(getByLabelText('Age'), { target: { value: '55' } });
  fireEvent.change(getByLabelText('Height (in Inches)'), { target: { value: '72' } });
  fireEvent.change(getByLabelText('Weight (in Pounds)'), { target: { value: '195' } });
  fireEvent.change(getByLabelText('Insurance Provider'), { target: { value: 'Blue Cross' } });
  fireEvent.change(getByLabelText('Gender'), { target: { value: 'Male' } });
  fireEvent.click(getByText('Edit Patient'));

  expect(getByText('Zip code must be in format XXXXX or XXXXX-XXXX')).toBeInTheDocument();
});

it('form validation fails invalid Email Field', () => {
  const { getByLabelText, getByText } = render(<PatientForm buttonLabel="Edit Patient" />);
  fireEvent.change(getByLabelText('First Name'), { target: { value: '55' } });
  fireEvent.change(getByLabelText('Last Name'), { target: { value: 'Smith' } });
  fireEvent.change(getByLabelText('SSN'), { target: { value: '555-55-5555' } });
  fireEvent.change(getByLabelText('Email'), { target: { value: 'kjdsafhkfjhfa' } });
  fireEvent.change(getByLabelText('Street'), { target: { value: '123 Test Street' } });
  fireEvent.change(getByLabelText('City'), { target: { value: 'Denver' } });
  fireEvent.change(getByLabelText('State'), { target: { value: 'CO' } });
  fireEvent.change(getByLabelText('Zip Code'), { target: { value: '12345' } });
  fireEvent.change(getByLabelText('Age'), { target: { value: '55' } });
  fireEvent.change(getByLabelText('Height (in Inches)'), { target: { value: '72' } });
  fireEvent.change(getByLabelText('Weight (in Pounds)'), { target: { value: '195' } });
  fireEvent.change(getByLabelText('Insurance Provider'), { target: { value: 'Blue Cross' } });
  fireEvent.change(getByLabelText('Gender'), { target: { value: 'Male' } });
  fireEvent.click(getByText('Edit Patient'));

  expect(getByText('Please enter a valid e-mail address')).toBeInTheDocument();
});

it('form validation fails invalid SSN Field', () => {
  const { getByLabelText, getByText } = render(<PatientForm buttonLabel="Edit Patient" />);
  fireEvent.change(getByLabelText('First Name'), { target: { value: '55' } });
  fireEvent.change(getByLabelText('Last Name'), { target: { value: 'Smith' } });
  fireEvent.change(getByLabelText('SSN'), { target: { value: 'kjfhdkasjf' } });
  fireEvent.change(getByLabelText('Email'), { target: { value: 'john.smith@gmail.com' } });
  fireEvent.change(getByLabelText('Street'), { target: { value: '123 Test Street' } });
  fireEvent.change(getByLabelText('City'), { target: { value: 'Denver' } });
  fireEvent.change(getByLabelText('State'), { target: { value: 'CO' } });
  fireEvent.change(getByLabelText('Zip Code'), { target: { value: '12345' } });
  fireEvent.change(getByLabelText('Age'), { target: { value: '55' } });
  fireEvent.change(getByLabelText('Height (in Inches)'), { target: { value: '72' } });
  fireEvent.change(getByLabelText('Weight (in Pounds)'), { target: { value: '195' } });
  fireEvent.change(getByLabelText('Insurance Provider'), { target: { value: 'Blue Cross' } });
  fireEvent.change(getByLabelText('Gender'), { target: { value: 'Male' } });
  fireEvent.click(getByText('Edit Patient'));

  expect(getByText('SSN must be in format XXX-XX-XXXX')).toBeInTheDocument();
});

it('form validation fails invalid State Field', () => {
  const { getByLabelText, getByText } = render(<PatientForm buttonLabel="Edit Patient" />);
  fireEvent.change(getByLabelText('First Name'), { target: { value: '55' } });
  fireEvent.change(getByLabelText('Last Name'), { target: { value: 'Smith' } });
  fireEvent.change(getByLabelText('SSN'), { target: { value: '555-55-5555' } });
  fireEvent.change(getByLabelText('Email'), { target: { value: 'john.smith@gmail.com' } });
  fireEvent.change(getByLabelText('Street'), { target: { value: '123 Test Street' } });
  fireEvent.change(getByLabelText('City'), { target: { value: 'Denver' } });
  fireEvent.change(getByLabelText('State'), { target: { value: 'kjdshfksjah' } });
  fireEvent.change(getByLabelText('Zip Code'), { target: { value: '12345' } });
  fireEvent.change(getByLabelText('Age'), { target: { value: '55' } });
  fireEvent.change(getByLabelText('Height (in Inches)'), { target: { value: '72' } });
  fireEvent.change(getByLabelText('Weight (in Pounds)'), { target: { value: '195' } });
  fireEvent.change(getByLabelText('Insurance Provider'), { target: { value: 'Blue Cross' } });
  fireEvent.change(getByLabelText('Gender'), { target: { value: 'Male' } });
  fireEvent.click(getByText('Edit Patient'));

  expect(getByText('State is invalid')).toBeInTheDocument();
});

it('form validation fails invalid Numeric Field', () => {
  const { getByLabelText, getByText } = render(<PatientForm buttonLabel="Edit Patient" />);
  fireEvent.change(getByLabelText('First Name'), { target: { value: 'John' } });
  fireEvent.change(getByLabelText('Last Name'), { target: { value: 'Smith' } });
  fireEvent.change(getByLabelText('SSN'), { target: { value: '555-55-5555' } });
  fireEvent.change(getByLabelText('Email'), { target: { value: 'john.smith@gmail.com' } });
  fireEvent.change(getByLabelText('Street'), { target: { value: '123 Test Street' } });
  fireEvent.change(getByLabelText('City'), { target: { value: 'Denver' } });
  fireEvent.change(getByLabelText('State'), { target: { value: 'CO' } });
  fireEvent.change(getByLabelText('Zip Code'), { target: { value: '12345' } });
  fireEvent.change(getByLabelText('Age'), { target: { value: '55' } });
  fireEvent.change(getByLabelText('Height (in Inches)'), { target: { value: '72' } });
  fireEvent.change(getByLabelText('Weight (in Pounds)'), { target: { value: 'kdsafl;fk;l' } });
  fireEvent.change(getByLabelText('Insurance Provider'), { target: { value: 'Blue Cross' } });
  fireEvent.change(getByLabelText('Gender'), { target: { value: 'Male' } });
  fireEvent.click(getByText('Edit Patient'));

  expect(getByText('Weight should be numbers only')).toBeInTheDocument();
});

it('form validation fails invalid Gender Field', () => {
  const { getByLabelText, getByText } = render(<PatientForm buttonLabel="Edit Patient" />);
  fireEvent.change(getByLabelText('First Name'), { target: { value: 'John' } });
  fireEvent.change(getByLabelText('Last Name'), { target: { value: 'Smith' } });
  fireEvent.change(getByLabelText('SSN'), { target: { value: '555-55-5555' } });
  fireEvent.change(getByLabelText('Email'), { target: { value: 'john.smith@gmail.com' } });
  fireEvent.change(getByLabelText('Street'), { target: { value: '123 Test Street' } });
  fireEvent.change(getByLabelText('City'), { target: { value: 'Denver' } });
  fireEvent.change(getByLabelText('State'), { target: { value: 'CO' } });
  fireEvent.change(getByLabelText('Zip Code'), { target: { value: '12345' } });
  fireEvent.change(getByLabelText('Age'), { target: { value: '55' } });
  fireEvent.change(getByLabelText('Height (in Inches)'), { target: { value: '72' } });
  fireEvent.change(getByLabelText('Weight (in Pounds)'), { target: { value: '195' } });
  fireEvent.change(getByLabelText('Insurance Provider'), { target: { value: 'Blue Cross' } });
  fireEvent.change(getByLabelText('Gender'), { target: { value: 'ksdajfhskd' } });
  fireEvent.click(getByText('Edit Patient'));

  expect(getByText('Gender field should be male, female, or other')).toBeInTheDocument();
});
