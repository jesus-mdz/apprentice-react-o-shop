import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import constructInputs from './utils/constructInputs';

function Form(props) {
  const {
    title,
    inputArray,
    primaryButton,
    tertiaryButton,
    restart,
    onSubmit,
    allInputsObject,
  } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    restart();
  }, [dispatch]);

  return (
    <div>
      <h2>{title}</h2>
      <form onSubmit={(event) => onSubmit(event, allInputsObject)}>
        {constructInputs(inputArray, props)}
        <div className="form-group">
          <button className="btn btn-primary">{primaryButton.title}</button>
          {tertiaryButton ? (
            <button className="btn btn-tertiary">
              <Link to={tertiaryButton.link}>{tertiaryButton.title}</Link>
            </button>
          ) : null}
        </div>
      </form>
    </div>
  );
}

export default Form;
