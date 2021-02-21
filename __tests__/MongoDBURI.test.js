import React, { useState, useEffect } from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MongoDBURI from '../src/Components/MongoDBURI';

//Basic Test with React-test-renderer
it('renders correctly react-test-renderer', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<MongoDBURI />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });