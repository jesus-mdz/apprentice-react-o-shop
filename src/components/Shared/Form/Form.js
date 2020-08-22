import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Input from '../Input/Input';
import { useDispatch } from 'react-redux';

function Form(props) {
  const {
    title,
    inputArray,
    tertiaryButton,
    restart,
    onSubmit,
    isSubmitted,
    setIsSubmitted,
  } = props;
  const [allInputsObject, setAllInputsObject] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    restart();
  }, [dispatch]);

  return (
    <div className="col-lg-4 offset-lg-4">
      <h2>{title}</h2>
      <form onSubmit={(event) => onSubmit(event, allInputsObject)}>
        {inputArray.map((title, index) => (
          <Input
            id={index}
            key={index}
            title={title}
            allInputsObject={allInputsObject}
            setAllInputsObject={setAllInputsObject}
            isSubmitted={isSubmitted}
            setIsSubmitted={setIsSubmitted}
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
