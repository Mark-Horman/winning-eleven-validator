// WinningElevenValidator.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import WinningElevenValidator from './winning-eleven-validator';

describe('WinningElevenValidator', () => {
  it('renders an error message when name is incorrect for topic A', () => {
    const obj = {
      topic: 'A',
      name: 'b',
      description: 'This is a valid description.',
    };
    render(<WinningElevenValidator ojectToValidate={obj} />);
    const errorMessage = screen.getByText(/name must be 'a' for topic A/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it('renders an error message when description is too short for topic A', () => {
    const obj = {
      topic: 'A',
      name: 'a',
      description: 'Too short',
    };
    render(<WinningElevenValidator ojectToValidate={obj} />);
    const errorMessage = screen.getByText(/description must be between 10 and 100 characters for topic A/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it('renders an error message when name is incorrect for topic B', () => {
    const obj = {
      topic: 'B',
      name: 'b',
      description: 'This is a valid description.',
    };
    render(<WinningElevenValidator ojectToValidate={obj} />);
    const errorMessage = screen.getByText(/name must be 'x' for topic B/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it('renders an error message when description is too long for topic B', () => {
    const obj = {
      topic: 'B',
      name: 'x',
      description: 'This description is too long. This description is too long.',
    };
    render(<WinningElevenValidator ojectToValidate={obj} />);
    const errorMessage = screen.getByText(/description must be less than 40 characters for topic B/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it('renders a success message when the object is valid', () => {
    const obj = {
      topic: 'A',
      name: 'a',
      description: 'This description is just right.',
    };
    render(<WinningElevenValidator ojectToValidate={obj} />);
    const successMessage = screen.getByText(/object is valid!/i);
    expect(successMessage).toBeInTheDocument();
  });
});
