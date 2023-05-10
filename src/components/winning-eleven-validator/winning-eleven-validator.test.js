import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WinningElevenValidator from './WinningElevenValidator';

describe('<WinningElevenValidator />', () => {
  test('it should mount', () => {
    render(<WinningElevenValidator />);
    
    const winningElevenValidator = screen.getByTestId('WinningElevenValidator');

    expect(winningElevenValidator).toBeInTheDocument();
  });
});

describe("validateObject function", () => {
  it("should return null if object passes validation for topic A", () => {
    const myObject = {
      "topic": "A",
      "name": "a",
      "description": "something that is more than 10 and less than 100 characters"
    };
    expect(validateObject(myObject)).toBeNull();
  });

  it("should return an error message if object fails validation for topic A", () => {
    const myObject = {
      "topic": "A",
      "name": "b",
      "description": "something that is too long and fails the validation"
    };
    expect(validateObject(myObject)).toBe("Name must be 'a' for topic A");
  });

  it("should return null if object passes validation for topic B", () => {
    const myObject = {
      "topic": "B",
      "name": "x",
      "description": "short description"
    };
    expect(validateObject(myObject)).toBeNull();
  });

  it("should return an error message if object fails validation for topic B", () => {
    const myObject = {
      "topic": "B",
      "name": "y",
      "description": "a description that is too long and fails the validation"
    };
    expect(validateObject(myObject)).toBe("Name must be 'x' for topic B");
  });
});
