import React, { useState, useEffect } from 'react';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import Container from '../src/containers/Container';


//Basic Test with React-test-renderer
it('renders correctly react-test-renderer', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Container />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});