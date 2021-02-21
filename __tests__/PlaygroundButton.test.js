import React, { useState, useEffect } from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import PlaygroundButton from '../src/Components/PlaygroundButton';

//Basic Test with React-test-renderer
it('renders correctly react-test-renderer', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<PlaygroundButton />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });