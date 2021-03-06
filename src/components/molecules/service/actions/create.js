import { createAction } from 'redux-actions';
import { fetch } from '../../../../utils';
import { SERVICE_CREATE } from '../constants';


const reset = createAction(SERVICE_CREATE, () => ({
  status: 'initial',
}));

const begin = createAction(SERVICE_CREATE, () => ({
  status: 'pending',
}));

const success = createAction(SERVICE_CREATE, service => ({
  service,
  status: 'success',
}));

const fail = createAction(SERVICE_CREATE, error => ({
  status: 'error',
  error,
}));


const create = (name, sshKey, username) =>
  (dispatch, getState) => {
    dispatch(begin());
    const apiUrl = getState().backend.apiUrl;
    fetch({
      url: `${apiUrl}/services`,
      method: 'POST',
      body: {
        name,
        sshKey,
        username,
      },
    })
      .then(service => {
        dispatch(success(service));
        return service;
      })
      .catch(error => {
        dispatch(fail(error.message));
      });
  };


const actions = {
  reset,
  begin,
  success,
  fail,
  create,
};


export default actions;
