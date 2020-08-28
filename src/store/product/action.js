import actionTypes from './actionTypes';
import productServices from '../../services/productService';
import history from '../../utils/history';

const productActions = {
  addProduct,
};

function addProduct(product) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.ADD_PRODUCT_REQUEST,
      product: product.username,
    });

    productServices.addProduct(product).then(
      (product) => {
        console.log(product);
        dispatch({ type: actionTypes.ADD_PRODUCT_SUCCESS, product });
        history.push('/');
      },
      (error) => {
        dispatch({ type: actionTypes.ADD_PRODUCT_FAILURE, error });
      }
    );
  };
}

export default productActions;
