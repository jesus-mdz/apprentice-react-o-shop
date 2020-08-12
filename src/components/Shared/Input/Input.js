import React, { useState, useEffect } from 'react';

function Input(props) {
  const { type, title, isValid, amountTrueArray, setAmountTrueArray } = props;

  const [value, setValue] = useState('');

  useEffect(() => {
    if (value !== '' && doesCurrentFieldExistOnArray() === false) {
      setAmountTrueArray([...amountTrueArray, { title: value, valid: true }]);
    } else if (value === '' && doesCurrentFieldExistOnArray() === true) {
      setAmountTrueArray(amountTrueArray.filter((obj) => obj.input !== title));
    }
  }, [value]);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const doesCurrentFieldExistOnArray = () => {
    const results = amountTrueArray.find((obj) => {
      return obj.input === title;
    });

    return results && results.input ? true : false;
  };

  return (
    <div className="form-group">
      <input
        className={`input100 ${
          value === '' && isValid === false ? 'is-valid' : ''
        }`}
        type={type}
        name={title}
        placeholder={title}
        value={value}
        onChange={onChange}
      />
      {value === '' && isValid === false ? (
        <div>{title} cannot be empty</div>
      ) : null}
    </div>
  );
}

export default Input;
