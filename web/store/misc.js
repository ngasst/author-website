import types from '../types';

export const state = () => ({
  list: {
    en: '',
    fr: '',
  },
  current: '',
});

export const mutations = {
  [types.LOAD_BIOS](state, bios) {
    Object.assign(state, { list: bios });
  },
  [types.LOAD_SINGLE_BIO](state, bio) {
    Object.assign(state, { current: bio });
  },
};
export const actions = {
  load({ commit }, bios) {
    commit(types.LOAD_BIOS, bios);
  },
  set({ commit }, bio) {
    commit(types.LOAD_SINGLE_BIO, bio);
  },
};
export const getters = {
  bios: state => state.list,
  bio: state => state.current,
};
