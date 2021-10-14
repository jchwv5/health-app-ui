import React from 'react';
import Router from 'react-router-dom';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import PatientDetails from '../components/patient-details/PatientDetails';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn()
}));

it('renders successfully', () => {
  jest.spyOn(Router, 'useParams').mockReturnValue({ patientId: '1' });
  const div = document.createElement('div');
  ReactDom.render(<PatientDetails />, div);
  ReactDom.unmountComponentAtNode(div);
});

it('App component matches snapshot', () => {
  jest.spyOn(Router, 'useParams').mockReturnValue({ patientId: '1' });
  const component = renderer.create(<PatientDetails />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
