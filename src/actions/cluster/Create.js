import { createAction } from 'redux-actions';
import { fetch } from '../../utils';
import { API_URL } from '../../backend_url';
import { CLUSTER_CREATE } from '../../constants/ActionTypes';

export const begin = createAction(CLUSTER_CREATE, () => ({
  status: 'pending',
}));

export const success = createAction(CLUSTER_CREATE, cluster => ({
  cluster,
  status: 'success',
}));

export const fail = createAction(CLUSTER_CREATE, error => ({
  status: 'error',
  error,
}));

export const create = name =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/clusters`,
      method: 'post',
      body: {
        name,
      },
    })
      .then(cluster => {
        dispatch(success(cluster));
        return cluster;
      })
      .catch(error => {
        dispatch(fail(error.message));
      });
  };

export const actions = {
  begin,
  success,
  fail,
  create,
};