import React from 'react';
import ProductForm from '../../components/Auth/ProductForm';

function AdminProductsNew(props) {
  const { history, match } = props;
  return (
    <ProductForm
      className="p-5 row col-10 offset-1"
      history={history}
      match={match}
    />
  );
}

export default AdminProductsNew;
