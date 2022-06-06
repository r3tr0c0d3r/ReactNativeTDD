/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/App';

// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';
import {render, fireEvent} from '@testing-library/react-native';

it('App renders correctly', () => {
  // renderer.create(<App />);
  const { getByText } = render(<App/>);
  // debug();
  const homeText = getByText(/home/i)
  expect(homeText).not.toBeNull()
});
