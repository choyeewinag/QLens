import React, { useState, useEffect } from 'react';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import MongoSchemaIDE from '../src/Components/MongoSchemaIDE';
import Container from '../src/containers/Container';
import mongoSchema from '../src/containers/Container';
import render from '@testing-library/react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Codemirror from 'codemirror';
import {UnControlled as CodeMirror} from 'react-codemirror2';
require('codemirror/mode/javascript/javascript');
import '../../node_modules/codemirror/lib/codemirror.css';
import '../../node_modules/codemirror/theme/dracula.css';
const _ = require('lodash');
import PropTypes from "prop-types";

jest.mock('../src/Components/MongoSchemaIDE', () => {
    const ComponentToMock = () => <div />;
    return ComponentToMock;
  });
  

// test("Default to GraphQL tab's content", () => {
//     const div = document.createElement('div');
//     const {getByTestId} = render (
//         <div className="codeboxContainer">
//       <Tabs>
//       <TabList>
//         <Tab>GraphQL Schemas</Tab>
//         <Tab>MongoDB Schemas</Tab>
//       </TabList>
//       <TabPanel data-testid="GraphQL Schema Content">
//         <div className="codebox2">
//           <CodeMirror
//             value={_.isEmpty(graphQLSchema) ? `/*

// *** Input MongoDB Uri ***
// *** Click Add Selected Schemas ***
// *** View GraphQL Schemas Here ***

// */` : combined}
//             options={{
//               mode: 'javascript',
//               lineWrapping: true,
//               theme: 'dracula',
//               lineNumbers: true,
//               // lineSeparator: ",",
//               // autoCloseBrackets: true,
//               cursorScrollMargin: 48,
//               indentUnit: 2,
//               tabSize: 2,
//               styleActiveLine: true,
//               smartIndent: true,
//             }}
//             />
//         </div>
//       </TabPanel>
//       <TabPanel data-testid="MongoDB Schema Content">
//         <div className="codebox">
//           <CodeMirror
//           value={_.isEmpty(selectedSchemaData[0]) ? `/*

// *** MongoDB Schemas will be displayed here ***

// */` : formattedMongo}
//           options={{
//             mode: 'javascript',
//             lineWrapping: true,
//             theme: 'dracula',
//             lineNumbers: true,
//             // autoCloseBrackets: true,
//             cursorScrollMargin: 48,
//             indentUnit: 2,
//             tabSize: 2,
//             styleActiveLine: true,
//             smartIndent: true,
//             // lineSeparator: ",",
//           }}
//           />
//         </div>
//       </TabPanel>
//       </Tabs>
//     </div>
//     );
//     const GraphQLSchemaContent = getByTestId("content");
//     expect(content.textContent).toBe("Something");
// })

//Basic Test with React-test-renderer
it('renders correctly react-test-renderer', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<MongoSchemaIDE />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
});