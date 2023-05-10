import React from "react";
import './App.css';

import WinningElevenValidator from "./components/winning-eleven-validator/winning-eleven-validator";


const validObject = {
  "topic": "A",
  "name": "a",
  "description": "something that is more than 10 and less than 100 characters"
};

const invalidObject = {
    "topic": "B",
    "name": "z",
    "description": "something that is less than 40 chars"
};

const unvalidatedObject = {
    "topic": "D",
    "name": "d",
    "description": "something that has no validation rules set, so will return VALID response"
};

const App = () => {
  return (
      <div className="app">
          <header className="app-header">
              Winning Eleven Validator code test
          </header>

          <WinningElevenValidator ojectToValidate={validObject} />
          <WinningElevenValidator ojectToValidate={invalidObject} />
          <WinningElevenValidator ojectToValidate={unvalidatedObject} />
      </div>
  );
}

export default App;
