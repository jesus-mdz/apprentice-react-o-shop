import React, { useState, useEffect } from 'react';

function Input(props) {
  const {
    type,
    title,
    allInputsObject,
    setAllInputsObject,
    isSubmitted,
  } = props;
  const [value, setValue] = useState('');

  useEffect(() => {
    allInputsObject[`${title}`] = value;
    setAllInputsObject(allInputsObject);
  }, [value]);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="form-group">
      <input
        className={`input100 ${value === '' ? 'is-valid' : ''}`}
        type={type}
        name={title}
        placeholder={title}
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
