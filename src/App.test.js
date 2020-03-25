import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import ReactDOM from "react-dom";
import App from './App';

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// it("App loads with initial state of 0", () => {
//   const { container } = render(<App />);
//   const countValue = getByTestId(container, "div");
//   expect(countValue.textContent).toBe("0");
// });