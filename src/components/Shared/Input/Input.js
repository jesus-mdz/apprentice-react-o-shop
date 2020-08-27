import React, { useState, useEffect } from 'react';

function Input(props) {
  const {
    title,
    name,
    placeholder,
    allInputsObject,
    setAllInputsObject,
    isSubmitted,
  } = props;
  const [value, setValue] = useState('');

  useEffect(() => {
    setAllInputsObject({ ...allInputsObject, [`${name}`]: value });
  }, [value]);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="form-group">
      <input
        className={`form-control ${value !== '' ? 'is-valid' : ''}`}
        name={name}
        placeholder={placeholder ? placeholder : ''}
        value={value}
        onChange={onChange}
      />
      {value === '' && isSubmitted === true ? (
        <div>{title} cannot be empty</div>
      ) : null}
    </div>
  );
}

export default Input;
