import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import App from '../components/app/App';

it('renders successfully', () => {
  const div = document.createElement('div');
  ReactDom.render(<App />, div);
  ReactDom.unmountComponentAtNode(div);
});

it('App component matches snapshot', () => {
  const component = renderer.create(<App />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
