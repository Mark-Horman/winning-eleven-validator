import React from "react";

const validateObject = (obj) => {
    if (obj.topic === "A") {
        if (obj.name !== "a") {
            return "Name must be 'a' for topic A";
        }
        if (obj.description.length < 10 || obj.description.length > 100) {
            return "Description must be between 10 and 100 characters for topic A";
        }
    } else if (obj.topic === "B") {
        if (obj.name !== "x") {
            return "Name must be 'x' for topic B";
        }
        if (obj.description.length > 40) {
            return "Description must be less than 40 characters for topic B";
        }
    } else {
        // handle other topics here with their respective rules
    }
    return null; // return null if no validation errors were found
}

const WinningElevenValidator = ({ ojectToValidate }) => {
    const validationError = validateObject(ojectToValidate);

    if (validationError) {
        return (
            <div className="card">
                <p>Object {ojectToValidate.topic.toString()}</p>
                <p className="error">{validationError}</p>
            </div>
        );
    } else {
        return (
            <div className="card">
                <p>Object {ojectToValidate.topic.toString()}</p>
                <p className="success">Object is valid!</p>
            </div>
        );
    }
}

export default WinningElevenValidator;
