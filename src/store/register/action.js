import actionTypes from './actionTypes';
import userServices from '../../services/userService';
import history from '../../utils/history';

const registerActions = {
  register,
};

function register(firstName, lastName, username, password) {
  return (dispatch) => {
    dispatch({ type: actionTypes.REGISTER_REQUEST, user: { username } });

    userServices.register(firstName, lastName, username, password).then(
      (user) => {
        dispatch({ type: actionTypes.REGISTER_SUCCESS, user });
        history.push('/');
      },
      (error) => {
        dispatch({ type: actionTypes.REGISTER_FAILURE, error });
      }
    );
  };
}

export default registerActions;
