import actions from './actionTypes';

const initialState = { productAdded: true };

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_PRODUCT_REQUEST:
      return {
        productAdding: true,
      };
    case actions.ADD_PRODUCT_SUCCESS:
      return {
        productAdded: true,
      };
    case actions.ADD_PRODUCT_FAILURE:
      return {};
    default:
      return state;
  }
};
