import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../Input/Input';

function Form(props) {
  const { title, inputArr, tertiaryButton } = props;
  const [isValid, setIsValid] = useState('');
  const [amountTrueArr, setAmountTrueArr] = useState([]);

  const onSubmit = (e) => {
    const inputLength = inputArr.length;
    const trueLength = amountTrueArr.length;

    if (inputLength === trueLength) {
      setIsValid(true);
    } else {
      e.preventDefault();
      setIsValid(false);
    }
  };

  return (
    <div className="col-lg-4 offset-lg-4">
      <h2>{title}</h2>
      <form onSubmit={onSubmit}>
        {inputArr.map((title, i) => (
          <Input
            key={i}
            title={title}
            isValid={isValid}
            amountTrueArr={amountTrueArr}
            setAmountTrueArr={setAmountTrueArr}
          />
        ))}
        <div className="form-group">
          <button className="btn btn-primary">{title}</button>
          <button className="btn btn-tertiary">
            <Link to={tertiaryButton.link}>{tertiaryButton.title}</Link>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
