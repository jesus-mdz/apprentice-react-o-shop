import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Input from '../Input/Input';
import { useDispatch } from 'react-redux';

function Form(props) {
  const { title, inputArr, tertiaryButton, actions } = props;
  const [isValid, setIsValid] = useState('');
  const [amountTrueArray, setAmountTrueArray] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.logout());
  }, [dispatch]);

  const onSubmit = (event) => {
    const inputLength = inputArr.length;
    const trueLength = amountTrueArray.length;

    if (inputLength === trueLength) {
      amountTrueArray.map((inputObject) => {
        const { field } = inputObject;
      });
      setIsValid(true);
      dispatch(actions.login());
    } else {
      event.preventDefault();
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
            amountTrueArray={amountTrueArray}
            setAmountTrueArray={setAmountTrueArray}
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
