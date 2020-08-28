import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import constructInputs from './utils/constructInputs';

function Form(props) {
  const {
    className,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className={className}>
      <h2>{title}</h2>
      <form onSubmit={(event) => onSubmit(event, allInputsObject)}>
        {constructInputs(inputArray, props)}
        <div className="form-group">
          <button className="btn btn-primary">{primaryButton.title}</button>
          {tertiaryButton ? (
            <Link to={tertiaryButton.link}>
              <button className="btn btn-tertiary">
                {tertiaryButton.title}
              </button>
            </Link>
          ) : null}
        </div>
      </form>
    </div>
  );
}

export default Form;
