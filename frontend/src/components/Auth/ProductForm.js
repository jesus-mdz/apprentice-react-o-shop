import React, { useState } from 'react';
import Form from '../Shared/Form/Form';
import productActions from '../../store/product/action';
import { useDispatch } from 'react-redux';
import productArray from './const/productArray';
import ProductCard from '../../pages/ProductCard/ProductCard';

function ProductForm({ className, match }) {
  const productId = parseInt(match.params.id ? match.params.id : '');
  const products = JSON.parse(localStorage.getItem('products')) || [];
  const product = products.find((product) => product.id === productId) || {};

  const [isSubmitted, setIsSubmitted] = useState('');
  const [allInputsObject, setAllInputsObject] = useState(product);
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
        className="col"
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
        allInputsObject={allInputsObject}
        setAllInputsObject={setAllInputsObject}
      />
    </div>
  );
}

export default ProductForm;
