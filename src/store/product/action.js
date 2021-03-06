import actionTypes from './actionTypes';
import productServices from '../../services/productService';
import history from '../../utils/history';

const productActions = {
  addProduct,
  getProducts,
};

function addProduct(product) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.ADD_PRODUCT_REQUEST,
      product: product.title,
    });

    productServices.addProduct(product).then(
      (product) => {
        dispatch({ type: actionTypes.ADD_PRODUCT_SUCCESS, product });
        history.push('/admin-products');
      },
      (error) => {
        dispatch({ type: actionTypes.ADD_PRODUCT_FAILURE, error });
      }
    );
  };
}

function getProducts() {
  return (dispatch) => {
    dispatch({
      type: actionTypes.GET_PRODUCTS_REQUEST,
    });

    productServices
      .getProducts()
      .then(
        (products) => {
          dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, products });
        },
        (error) => {
          dispatch({ type: actionTypes.GET_PRODUCTS_FAILURE, error });
        }
      )
      .then(() => {
        history.push('/admin-products');
      });
  };
}

export default productActions;
