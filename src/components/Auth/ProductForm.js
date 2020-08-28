import React, { useState } from 'react';
import Form from '../Shared/Form/Form';
import productActions from '../../store/product/action';
import { useDispatch } from 'react-redux';
import productArray from './const/productArray';
import ProductCard from '../../pages/ProductCard/ProductCard';

function ProductForm({ className }) {
  const [isSubmitted, setIsSubmitted] = useState('');
  const [allInputsObject, setAllInputsObject] = useState({});
  const dispatch = useDispatch();

  const onSubmit = (event, object) => {
    event.preventDefault();
    setIsSubmitted(true);

    if (
      object.title !== '' &&
      object.price !== isNaN() &&
      object.category !== '' &&
      object.imageUrl !== ''
    ) {
      dispatch(productActions.addProduct(object));
      setAllInputsObject({ ...object });
    } else {
      event.preventDefault();
    }
  };

  return (
    <div className={className}>
      <Form
        type="text"
        title="Add New Product"
        inputArray={productArray}
        primaryButton={{ title: 'Save Product' }}
        restart={() => {
          return null;
        }}
        onSubmit={onSubmit}
        isSubmitted={isSubmitted}
        setIsSubmitted={setIsSubmitted}
        allInputsObject={allInputsObject}
        setAllInputsObject={setAllInputsObject}
      />
      <ProductCard
        title={allInputsObject.title}
        price={allInputsObject.price}
        imageUrl={allInputsObject.imageUrl}
      />
    </div>
  );
}

export default ProductForm;
