import handleResponse from './handleResponse';

export const productService = {
  addProduct,
  getProducts,
};

function addProduct(product) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  };

  return fetch(`/products/add`, requestOptions).then(handleResponse);
}

function getProducts() {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  return fetch(`/products`, requestOptions).then(handleResponse);
}

export default productService;
