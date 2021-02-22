import React, { useState, useEffect } from 'react';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import CheckBox from '../src/Components/CheckBox';

//Basic Test with React-test-renderer
it('renders correctly react-test-renderer', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<CheckBox />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});

