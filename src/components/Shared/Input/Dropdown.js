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
  const [dropdownValue, setDropdownValue] = useState('');

  useEffect(() => {
    setAllInputsObject({ ...allInputsObject, [`${name}`]: dropdownValue });
  }, [dropdownValue]);

  const onChange = (event) => {
    setDropdownValue(event.target.value);
  };

  return (
    <div className="form-group">
      <label htmlFor="exampleFormControlSelect1">{title}</label>
      <select
        onChange={onChange}
        className="form-control"
        id="exampleFormControlSelect1"
      >
        {dropdownOptions.map((object, index) => {
          return index === 0 ? (
            <option key="1" value={''}>
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
        <div>Please choose a Category</div>
      ) : null}
    </div>
  );
}

export default Dropdown;
