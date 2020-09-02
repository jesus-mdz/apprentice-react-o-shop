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
  const [value, setValue] = useState(allInputsObject[`${name}`] || '');

  useEffect(() => {
    setAllInputsObject({ ...allInputsObject, [`${name}`]: value });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="form-group">
      {title ? <label htmlFor={name}>{title}</label> : null}
      <input
        className={`form-control ${
          value === '' && isSubmitted === true ? 'is-invalid' : ''
        }`}
        name={name}
        placeholder={placeholder ? placeholder : ''}
        value={value}
        onChange={onChange}
      />
      {value === '' && isSubmitted === true ? (
        <div className="invalid-feedback">
          {title ? title : placeholder} cannot be empty
        </div>
      ) : null}
    </div>
  );
}

export default Input;
