import React, { useState, useEffect } from 'react';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import { render, fireEvent, queryByTestId, queryByPlaceholderText } from '@testing-library/react';
import MongoDBURI from '../src/Components/MongoDBURI';
import '@testing-library/jest-dom/extend-expect'

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

// const Button = ({onClick, submitbtn }) => (
//   <input onClick={onClick}> {submit}</input>
// )

// xtest('calls onClick prop when clicked', () => {
//   const handleClick = jest.fn()
//   render(<Button onClick={handleClick}>Click Me</Button>)
//   fireEvent.click(screen.getByTest(/click me/i))
//   expect(handleClick).toHaveBeenCalledTimes(1)
// })


//https://testing-library.com/docs/dom-testing-library/example-intro/


//Basic Test with React-test-renderer
xit('renders correctly react-test-renderer', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<MongoDBURI />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });


  describe("Input value", () => {
    xit ("updates on change", () =>{
      const {queryByPlaceholderText} = render(<MongoDBURI />)

      const URIInput = queryByPlaceholderText(' Input Your MongoDB URI');

      fireEvent.change(URIInput, {target: {value: "test"}})

      expect(URIInput.value).toBe("test")
    })

  })


//placeholdertext and ID works  
xit('MongoURI placeholder works correctly', () => {
  const {queryByPlaceholderText} = render(<MongoDBURI />)
  expect(queryByPlaceholderText(" Input Your MongoDB URI")).toBe(" Input Your MongoDB URI")
})
xit('MongoURI input box exists', () => {
  const {queryByTestId} = render(<MongoDBURI />)
  expect(queryByTestId("MongoURIInputButton")).toBe("MongoURIInputButton")
})