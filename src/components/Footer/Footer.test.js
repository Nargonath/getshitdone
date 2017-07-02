import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Footer from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
});

it('displays as a footer tag', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.find('footer')).toHaveLength(1);
});

it('links to both authors', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.find('a')).toHaveLength(2);
});
