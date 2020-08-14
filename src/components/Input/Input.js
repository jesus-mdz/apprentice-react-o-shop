import React, { useState, useEffect } from 'react';

function Input(props) {
  const { type, title, isValid, amountTrueArr, setAmountTrueArr } = props;

  const [field, setField] = useState('');

  useEffect(() => {
    if (field !== '' && doesCurrentFieldExistOnArray() === false) {
      setAmountTrueArr([...amountTrueArr, { input: title, validate: true }]);
    } else if (field === '' && doesCurrentFieldExistOnArray() === true) {
      setAmountTrueArr(amountTrueArr.filter((obj) => obj.input !== title));
    }
  }, [field]);

  const onChange = (e) => {
    setField(e.target.value);
  };

  const doesCurrentFieldExistOnArray = () => {
    const results = amountTrueArr.find((obj) => {
      return obj.input === title;
    });

    return results && results.input ? true : false;
  };

  return (
    <div className="form-group">
      <input
        className={`input100 ${
          field === '' && isValid === false ? 'is-valid' : ''
        }`}
        type={type}
        name={title}
        placeholder={title}
        value={field}
        onChange={onChange}
      />
      {field === '' && isValid === false ? (
        <div>{title} cannot be empty</div>
      ) : null}
    </div>
  );
}

export default Input;
