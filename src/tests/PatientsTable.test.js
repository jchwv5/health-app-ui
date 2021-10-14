import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import PatientsTable from '../components/patients/PatientsTable';

it('renders successfully', () => {
  const div = document.createElement('div');
  ReactDom.render(<PatientsTable />, div);
  ReactDom.unmountComponentAtNode(div);
});

it('App component matches snapshot', () => {
  const component = renderer.create(<PatientsTable />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
