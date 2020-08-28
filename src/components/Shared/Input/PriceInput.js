import React, { useState, useEffect } from 'react';

function PriceInput(props) {
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
      <label htmlFor={name}>{title}</label>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">$</span>
        </div>
        <input
          className={`form-control ${value !== '' ? 'is-valid' : ''}`}
          name={name}
          type="number"
          placeholder={placeholder ? placeholder : ''}
          value={value}
          onChange={onChange}
        />
      </div>
      {value === '' && isSubmitted === true ? (
        <div>Please insert a Price</div>
      ) : null}
    </div>
  );
}

export default PriceInput;
