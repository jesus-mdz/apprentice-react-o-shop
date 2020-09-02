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
      <label htmlFor={name}>{title}</label>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">$</span>
        </div>
        <input
          className={`form-control ${
            value === '' && isSubmitted === true ? 'is-invalid' : ''
          }`}
          name={name}
          type="number"
          placeholder={placeholder ? placeholder : ''}
          value={value}
          onChange={onChange}
        />
      </div>
      {value === '' && isSubmitted === true ? (
        <div style={{ display: 'block' }} className="invalid-feedback">
          Please insert a price
        </div>
      ) : null}
    </div>
  );
}

export default PriceInput;
