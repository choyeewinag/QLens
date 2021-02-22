import React, { useState, useEffect } from 'react';
import Container from '../src/containers/Container';
import { render, fireEvent, queryByPlaceholderText, queryByTestId } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';

import fetchMock from 'fetch-mock'
// import {submit} from '../src/containers/Container';

document.createRange = () => {
  const range = new Range();

  range.getBoundingClientRect = jest.fn();

  range.getClientRects = () => {
    return {
      item: () => null,
      length: 0,
      [Symbol.iterator]: jest.fn()
    };
  };

  return range;
}


//Basic Test with React-test-renderer
it('renders correctly react-test-renderer', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Container />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});

xit('MongoURI input button renders correctly', () => {
  const {queryByTestId} = render(<Container />)
  expect(queryByTestId('MongoURIInputButton')).toBeTruthy()
})


// const starWarDummyData = {
//     "people": {
//       "_id": {
//         "primaryKey": true,
//         "type": "Object",
//         "required": true
//       },
//       "name": {
//         "key": true,
//         "type": "string",
//         "required": true
//       },
//       "mass": {
//         "type": "string",
//         "required": false
//       },
//       "hair_color": {
//         "key": true,
//         "type": "string",
//         "required": false
//       },
//       "skin_color": {
//         "key": true,
//         "type": "string",
//         "required": false
//       },
//       "eye_color": {
//         "type": "string",
//         "required": false
//       },
//       "birth_year": {
//         "type": "string",
//         "required": false
//       },
//       "gender": {
//         "type": "string",
//         "required": true
//       },
//       "species": {
//         "key": true,
//         "type": "string",
//         "required": false
//       },
//       "homeworld": {
//         "key": true,
//         "type": "string",
//         "required": false
//       },
//       "height": {
//         "type": "number",
//         "required": false
//       },
//       "homeworld_id": {
//         "foreignKey": true,
//         "references": "planets",
//         "key": true,
//         "type": "Object",
//         "required": true
//       },
//       "species_id": {
//         "foreignKey": true,
//         "references": "species",
//         "key": true,
//         "type": "Object",
//         "required": true
//       },
//       "films": {
//         "type": "Array",
//         "required": true
//       },
//       "__v": {
//         "type": "number",
//         "required": true
//       }
//     },
//     "planets": {
//       "_id": {
//         "primaryKey": true,
//         "type": "Object",
//         "required": true
//       },
//       "name": {
//         "key": true,
//         "type": "string",
//         "required": false
//       },
//       "rotation_period": {
//         "type": "number",
//         "required": false
//       },
//       "orbital_period": {
//         "type": "number",
//         "required": false
//       },
//       "diameter": {
//         "type": "number",
//         "required": false
//       },
//       "climate": {
//         "type": "string",
//         "required": false
//       },
//       "gravity": {
//         "key": true,
//         "type": "string",
//         "required": false
//       },
//       "terrain": {
//         "key": true,
//         "type": "string",
//         "required": false
//       },
//       "surface_water": {
//         "type": "string",
//         "required": false
//       },
//       "population": {
//         "type": "number",
//         "required": false
//       },
//       "__v": {
//         "type": "number",
//         "required": true
//       }
//     },
//     "species": {
//       "_id": {
//         "primaryKey": true,
//         "type": "Object",
//         "required": true
//       },
//       "name": {
//         "key": true,
//         "type": "string",
//         "required": true
//       },
//       "classification": {
//         "type": "string",
//         "required": true
//       },
//       "average_height": {
//         "type": "string",
//         "required": true
//       },
//       "average_lifespan": {
//         "type": "string",
//         "required": true
//       },
//       "hair_colors": {
//         "key": true,
//         "type": "string",
//         "required": true
//       },
//       "skin_colors": {
//         "key": true,
//         "type": "string",
//         "required": true
//       },
//       "language": {
//         "key": true,
//         "type": "string",
//         "required": true
//       },
//       "homeworld": {
//         "type": "string",
//         "required": false
//       },
//       "homeworld_id": {
//         "foreignKey": true,
//         "references": "planets",
//         "key": true,
//         "type": "Object",
//         "required": true
//       },
//       "eye_colors": {
//         "type": "string",
//         "required": true
//       },
//       "__v": {
//         "type": "number",
//         "required": true
//       }
//     },
//     "films": {
//       "_id": {
//         "primaryKey": true,
//         "type": "Object",
//         "required": true
//       },
//       "title": {
//         "type": "string",
//         "required": true
//       },
//       "episode_id": {
//         "type": "number",
//         "required": true
//       },
//       "opening_crawl": {
//         "type": "string",
//         "required": true
//       },
//       "director": {
//         "key": true,
//         "type": "string",
//         "required": true
//       },
//       "producer": {
//         "type": "string",
//         "required": true
//       },
//       "release_date": {
//         "type": "Date",
//         "required": true
//       },
//       "__v": {
//         "type": "number",
//         "required": true
//       }
//     }
//   }


// test("fetches schemas from backend correctly when Submit button is clicked ", () => {
//   const url = "mongodb+srv://jake:testpassword@cluster0.j7bmf.mongodb.net/starwars?retryWrites=true&w=majority"
//   fetchMock.getOnce(url,starWarDummyData)

//   const response = submit()
//   expect(response).toEqual(starWarDummyData)
// })