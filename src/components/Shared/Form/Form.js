import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Input from '../Input/Input';
import { useDispatch } from 'react-redux';
import loginActions from '../../../store/login/action';
import registerActions from '../../../store/register/action';

function Form(props) {
  const { title, inputArray, tertiaryButton } = props;
  const [isValid, setIsValid] = useState('');
  const [amountTrueArray, setAmountTrueArray] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (title === 'Login') {
      dispatch(loginActions.logout());
    }
  }, [dispatch]);

  const onSubmit = (event) => {
    event.preventDefault();
    const inputLength = inputArray.length;
    const trueLength = amountTrueArray.length;

    if (inputLength === trueLength) {
      setIsValid(true);

      if (title === 'Login') {
        dispatch(
          loginActions.login(amountTrueArray[0].value, amountTrueArray[1].value)
        );
      } else {
        dispatch(
          registerActions.register(
            amountTrueArray[0].value,
            amountTrueArray[1].value,
            amountTrueArray[2].value,
            amountTrueArray[3].value
          )
        );
      }
    } else {
      event.preventDefault();
      setIsValid(false);
    }
  };

  return (
    <div className="col-lg-4 offset-lg-4">
      <h2>{title}</h2>
      <form onSubmit={onSubmit}>
        {inputArray.map((title, i) => (
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
