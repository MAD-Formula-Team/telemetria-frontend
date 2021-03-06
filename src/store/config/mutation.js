import {
  FETCH_FAILED,
  FETCH_DONE
} from './action';

const mutations = {
  [FETCH_DONE] (state, payload) {
    /* eslint-disable-next-line */
    const { created_at, update_at, __v, _id, version, ...rest } = payload;
    state.sensors = rest;
  },
  [FETCH_FAILED](){}
};

export default mutations