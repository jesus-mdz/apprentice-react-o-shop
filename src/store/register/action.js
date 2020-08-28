import actionTypes from './actionTypes';
import userServices from '../../services/userService';
import history from '../../utils/history';

const registerActions = {
  register,
};

<<<<<<< HEAD
function register(user) {
  return (dispatch) => {
    dispatch({ type: actionTypes.REGISTER_REQUEST, user: user.username });

    userServices.register(user).then(
=======
function register(firstName, lastName, username, password) {
  return (dispatch) => {
    dispatch({ type: actionTypes.REGISTER_REQUEST, user: { username } });

    userServices.register(firstName, lastName, username, password).then(
>>>>>>> 8a02c4eed773935bd9df9954006c807f46ab40c7
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
