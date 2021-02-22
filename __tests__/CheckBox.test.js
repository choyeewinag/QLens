import React, { useState, useEffect } from 'react';
import renderer from 'react-test-renderer';
import CheckBox from '../src/Components/CheckBox';
import ShallowRenderer from 'react-test-renderer/shallow';

//Check if testing works
// describe('My Test Suite', () => {
//   it('My Test Case', () => {
//       expect(true).toEqual(true);
//   });
//   });

//snapshots

describe('CheckBox Component Renders Correctly', () => {
test('snapshot of CheckBox Component renders', () => {
    const component = renderer.create(<CheckBox/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
});

// import TestRenderer from 'react-test-renderer';
// import ShallowRenderer from 'react-test-renderer/shallow';


// Basic Test with React-test-renderer
// it('renders correctly react-test-renderer', () => {
//   const renderer = new ShallowRenderer();
//   renderer.render(<Basic />);
//   const result = renderer.getRenderOutput();
//
//   expect(result).toMatchSnapshot();
// });

