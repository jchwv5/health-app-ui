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
