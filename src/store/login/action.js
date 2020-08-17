import actionTypes from './actionTypes';
import userServices from '../../services/userService';
import history from '../../utils/history';

const loginActions = {
  login,
  logout,
};

function login(username, password) {
  return (dispatch) => {
    dispatch({ type: actionTypes.LOGIN_REQUEST, user: { username } });

    userServices.login(username, password).then(
      (user) => {
        dispatch({ type: actionTypes.LOGIN_SUCCESS, user });
        history.push('/');
      },
      (error) => {
        dispatch({ type: actionTypes.LOGIN_FAILURE, error });
      }
    );
  };
}

function logout() {
  userServices.logout();
  return { type: actionTypes.LOGOUT };
}

export default loginActions;
