//https://www.robinwieruch.de/react-testing-jest
//https://jestjs.io/docs/en/snapshot-testing

  import React from 'react';
  import renderer from 'react-test-renderer';
  import CheckBox from '../src/Components/CheckBox';
  import MongoDBURI from '../src/Components/MongoDBURI'; // had to comment out public css file
//   import DropDownMenu from '../src/Components/DropDownMenu'; // had to comment out public css file
//   import MongoSchemaIDE from '../src/Components/MongoSchemaIDE'; // had to comment out public css file

  describe('My Test Suite', () => {
    it('My Test Case', () => {
      expect(true).toEqual(true);
    });
  });
   
  describe('CheckBox Component Renders Correctly', () => {
    test('snapshot of CheckBox Component renders', () => {
      const component = renderer.create(<CheckBox/>);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('MongoDBURI Component Renders Correctly', () => {
    test('snapshot of MongoDBURI Component renders', () => {
      const component = renderer.create(<MongoDBURI/>);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

//   describe('DropDownMenu Component Renders Correctly', () => {
//     test('snapshot of DropDownMenu Component renders', () => {
//       const component = renderer.create(<DropDownMenu/>);
//       let tree = component.toJSON();
//       expect(tree).toMatchSnapshot();
//     });
//   });

//   describe('MongoSchemaIDE Component Renders Correctly', () => {
//     test('snapshot of MongoSchemaIDE Component renders', () => {
//       const component = renderer.create(<MongoSchemaIDE/>);
//       let tree = component.toJSON();
//       expect(tree).toMatchSnapshot();
//     });
//   });