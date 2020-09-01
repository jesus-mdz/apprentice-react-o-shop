import actions from './actionTypes';

const initialState = { userRegistered: true };

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.REGISTER_REQUEST:
      return {
        userRegistering: true,
      };
    case actions.REGISTER_SUCCESS:
      return {
        userRegistered: true,
      };
    case actions.REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
};
