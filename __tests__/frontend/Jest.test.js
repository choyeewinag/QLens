import * as React from 'react';
import '../../__mocks__/SetupTests';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { server, rest } from '../../__mocks__/MockServer';


// import React components
import CheckBox from '../../src/Components/CheckBox';
import DropDownMenu from '../../src/Components/DropDownMenu';
import MongoDBURI from '../../src/Components/MongoDBURI';
import MongoSchemaIDE from '../../src/Components/MongoSchemaIDE';
import PlaygroundButton from '../../src/Components/PlaygroundButton';
import TreeGraph from '../../src/Components/TreeGraph';
import App from '../../src/App';

// prep the mock contexts
let realUseContext;
let useContextMock;

document.createRange = () => {
    const range = new Range();
  
    range.getBoundingClientRect = jest.fn();
  
    range.getClientRects = jest.fn(() => ({
      item: () => null,
      length: 0,
    }));
  
    return range;
  };

// establish API mocking before all tests
beforeAll(() => server.listen());
// set up the mock context before each test
beforeEach(() => {
  realUseContext = React.useContext;
  useContextMock = React.useContext = jest.fn();
});


// reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios)
afterEach(() => {
    // clean up the mock context
    React.useContext = realUseContext;
    server.resetHandlers();
  });
  // clean up once the tests are done
  afterAll(() => server.close());
  
  describe('Renders App', () => {
    describe('Renders App', () => {
      test('renders App', () => {
        render(<App />);
      });
    });

})