import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import EncounterForm from '../components/encounters/EncounterForm';

it('renders successfully', () => {
  const div = document.createElement('div');
  ReactDom.render(<EncounterForm />, div);
  ReactDom.unmountComponentAtNode(div);
});

it('App component matches snapshot', () => {
  const component = renderer.create(<EncounterForm />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('form validation fails empty form', () => {
  const { getByLabelText, getByText } = render(<EncounterForm buttonLabel="Edit Encounter" />);
  fireEvent.change(getByLabelText('Visit Code*'), { target: { value: '' } });
  fireEvent.change(getByLabelText('Provider*'), { target: { value: '' } });
  fireEvent.change(getByLabelText('Billing Code*'), { target: { value: '' } });
  fireEvent.change(getByLabelText('ICD10*'), { target: { value: '' } });
  fireEvent.change(getByLabelText('Total Cost*'), { target: { value: '' } });
  fireEvent.change(getByLabelText('Copay*'), { target: { value: '' } });
  fireEvent.change(getByLabelText('Chief Complaint*'), { target: { value: '' } });
  fireEvent.change(getByLabelText('Encounter Date*'), { target: { value: '' } });
  fireEvent.click(getByText('Edit Encounter'));

  expect(getByText('Visit Code field must not be left empty',
    'Provider field must not be left empty',
    'Billing Code field must not be left empty',
    'ICD10 field must not be left empty',
    'Total Cost field must not be left empty',
    'Copay field must not be left empty',
    'Chief Complaint field must not be left empty',
    'Encounter Date field must not be left empty')).toBeInTheDocument();
});

it('form validation fails invalid Date field', () => {
  const { getByLabelText, getByText } = render(<EncounterForm buttonLabel="Edit Encounter" />);
  fireEvent.change(getByLabelText('Visit Code*'), { target: { value: 'H1H 1H1' } });
  fireEvent.change(getByLabelText('Provider*'), { target: { value: 'Dr. Mitchell' } });
  fireEvent.change(getByLabelText('Billing Code*'), { target: { value: '123.456.789-00' } });
  fireEvent.change(getByLabelText('ICD10*'), { target: { value: 'A12' } });
  fireEvent.change(getByLabelText('Total Cost*'), { target: { value: '1000' } });
  fireEvent.change(getByLabelText('Copay*'), { target: { value: '100' } });
  fireEvent.change(getByLabelText('Chief Complaint*'), { target: { value: 'Broken Arm' } });
  fireEvent.change(getByLabelText('Encounter Date*'), { target: { value: 'fdjshaskjfhs' } });
  fireEvent.click(getByText('Edit Encounter'));

  expect(getByText('Date must be in the proper format (YYYY-DD-MM)')).toBeInTheDocument();
});

it('form validation fails invalid Non-Required Number field', () => {
  const { getByLabelText, getByText } = render(<EncounterForm buttonLabel="Edit Encounter" />);
  fireEvent.change(getByLabelText('Visit Code*'), { target: { value: 'H1H 1H1' } });
  fireEvent.change(getByLabelText('Provider*'), { target: { value: 'Dr. Mitchell' } });
  fireEvent.change(getByLabelText('Billing Code*'), { target: { value: '123.456.789-00' } });
  fireEvent.change(getByLabelText('ICD10*'), { target: { value: 'A12' } });
  fireEvent.change(getByLabelText('Total Cost*'), { target: { value: '1000' } });
  fireEvent.change(getByLabelText('Copay*'), { target: { value: '100' } });
  fireEvent.change(getByLabelText('Chief Complaint*'), { target: { value: 'Broken Arm' } });
  fireEvent.change(getByLabelText('Pulse'), { target: { value: 'kjfsdahsdkj' } });
  fireEvent.change(getByLabelText('Encounter Date*'), { target: { value: '2020-01-01' } });
  fireEvent.click(getByText('Edit Encounter'));

  expect(getByText('Pulse must be a number')).toBeInTheDocument();
});

it('form validation fails invalid Currency field', () => {
  const { getByLabelText, getByText } = render(<EncounterForm buttonLabel="Edit Encounter" />);
  fireEvent.change(getByLabelText('Visit Code*'), { target: { value: 'H1H 1H1' } });
  fireEvent.change(getByLabelText('Provider*'), { target: { value: 'Dr. Mitchell' } });
  fireEvent.change(getByLabelText('Billing Code*'), { target: { value: '123.456.789-00' } });
  fireEvent.change(getByLabelText('ICD10*'), { target: { value: 'A12' } });
  fireEvent.change(getByLabelText('Total Cost*'), { target: { value: 'dsfjkhsakjh' } });
  fireEvent.change(getByLabelText('Copay*'), { target: { value: '100' } });
  fireEvent.change(getByLabelText('Chief Complaint*'), { target: { value: 'Broken Arm' } });
  fireEvent.change(getByLabelText('Encounter Date*'), { target: { value: '2020-01-01' } });
  fireEvent.click(getByText('Edit Encounter'));

  expect(getByText('Total Cost should be in dollars and cents')).toBeInTheDocument();
});

it('form validation fails invalid ICD10 field', () => {
  const { getByLabelText, getByText } = render(<EncounterForm buttonLabel="Edit Encounter" />);
  fireEvent.change(getByLabelText('Visit Code*'), { target: { value: 'H1H 1H1' } });
  fireEvent.change(getByLabelText('Provider*'), { target: { value: 'Dr. Mitchell' } });
  fireEvent.change(getByLabelText('Billing Code*'), { target: { value: '123.456.789-00' } });
  fireEvent.change(getByLabelText('ICD10*'), { target: { value: 'dsjkhsfk' } });
  fireEvent.change(getByLabelText('Total Cost*'), { target: { value: '1000' } });
  fireEvent.change(getByLabelText('Copay*'), { target: { value: '100' } });
  fireEvent.change(getByLabelText('Chief Complaint*'), { target: { value: 'Broken Arm' } });
  fireEvent.change(getByLabelText('Encounter Date*'), { target: { value: '2020-01-01' } });
  fireEvent.click(getByText('Edit Encounter'));

  expect(getByText('ICD10 must be in LDD format')).toBeInTheDocument();
});

it('form validation fails invalid Billing Code field', () => {
  const { getByLabelText, getByText } = render(<EncounterForm buttonLabel="Edit Encounter" />);
  fireEvent.change(getByLabelText('Visit Code*'), { target: { value: 'H1H 1H1' } });
  fireEvent.change(getByLabelText('Provider*'), { target: { value: 'Dr. Mitchell' } });
  fireEvent.change(getByLabelText('Billing Code*'), { target: { value: 'ksjdafhskjhf' } });
  fireEvent.change(getByLabelText('ICD10*'), { target: { value: 'A12' } });
  fireEvent.change(getByLabelText('Total Cost*'), { target: { value: '1000' } });
  fireEvent.change(getByLabelText('Copay*'), { target: { value: '100' } });
  fireEvent.change(getByLabelText('Chief Complaint*'), { target: { value: 'Broken Arm' } });
  fireEvent.change(getByLabelText('Encounter Date*'), { target: { value: '2020-01-01' } });
  fireEvent.click(getByText('Edit Encounter'));

  expect(getByText('Billing Code must be in DDD.DDD.DDD-DD format')).toBeInTheDocument();
});

it('form validation fails invalid Visit Code field', () => {
  const { getByLabelText, getByText } = render(<EncounterForm buttonLabel="Edit Encounter" />);
  fireEvent.change(getByLabelText('Visit Code*'), { target: { value: 'jkhsdahfkdsh' } });
  fireEvent.change(getByLabelText('Provider*'), { target: { value: 'Dr. Mitchell' } });
  fireEvent.change(getByLabelText('Billing Code*'), { target: { value: '123.456.789-00' } });
  fireEvent.change(getByLabelText('ICD10*'), { target: { value: 'A12' } });
  fireEvent.change(getByLabelText('Total Cost*'), { target: { value: '1000' } });
  fireEvent.change(getByLabelText('Copay*'), { target: { value: '100' } });
  fireEvent.change(getByLabelText('Chief Complaint*'), { target: { value: 'Broken Arm' } });
  fireEvent.change(getByLabelText('Encounter Date*'), { target: { value: '2020-01-01' } });
  fireEvent.click(getByText('Edit Encounter'));

  expect(getByText('Visit Code must be in LDL DLD format')).toBeInTheDocument();
});
