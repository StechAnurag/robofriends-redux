import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';

export const setSearchfield = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

// special reducer for thunk

export const requestRobots = () => dispatch => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: users }))
    .catch(err => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: err }));
};
