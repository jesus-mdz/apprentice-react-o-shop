import React, { useState, useEffect } from 'react';

function Dropdown(props) {
  const {
    title,
    name,
    dropdownOptions,
    allInputsObject,
    setAllInputsObject,
    isSubmitted,
  } = props;
  const [dropdownValue, setDropdownValue] = useState(
    allInputsObject[`${name}`] || ''
  );

  useEffect(() => {
    setAllInputsObject({ ...allInputsObject, [`${name}`]: dropdownValue });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dropdownValue]);

  const onChange = (event) => {
    setDropdownValue(event.target.value);
  };

  console.log(dropdownValue === '');

  return (
    <div className="form-group">
      <label htmlFor={name}>{title}</label>
      <select
        onChange={onChange}
        className="form-control"
        id="exampleFormControlSelect1"
        defaultValue={dropdownValue}
      >
        {dropdownOptions.map((object, index) => {
          return index === 0 ? (
            <option key={index + 1} value={''}>
              Choose...
            </option>
          ) : (
            <option key={index + 2} value={object.name}>
              {object.name}
            </option>
          );
        })}
      </select>
      {dropdownValue === '' && isSubmitted === true ? (
        <div style={{ display: 'block' }} className="invalid-feedback">
          Please choose a category
        </div>
      ) : null}
    </div>
  );
}

export default Dropdown;
