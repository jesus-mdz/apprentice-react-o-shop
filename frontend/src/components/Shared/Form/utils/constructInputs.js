import React from 'react';
import Input from '../../Input/Input';
import Dropdown from '../../Input/Dropdown';
import PriceInput from '../../Input/PriceInput';

export default (array, props) => {
  return array.map((object, index) => {
    const inputProps = {
      id: index,
      key: index,
      title: object.title,
      name: object.name,
      type: object.type,
      dropdownOptions: object.dropdownOptions,
      placeholder: object.placeholder,
      allInputsObject: props.allInputsObject,
      setAllInputsObject: props.setAllInputsObject,
      isSubmitted: props.isSubmitted,
      setIsSubmitted: props.setIsSubmitted,
      updatedForm: props.updatedForm,
    };

    if (object.type === 'input') {
      return <Input {...inputProps} />;
    } else if (object.type === 'dropdown') {
      return <Dropdown {...inputProps} />;
    } else if (object.type === 'price') {
      return <PriceInput {...inputProps} />;
    }
  });
};
