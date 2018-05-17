import types from '../types';

export const state = () => ({
  loaded: [],
  current: {},
});
export const mutations = {
  [types.LOAD_POSTS](state, posts) {
    Object.assign(state, { loaded: posts });
  },
  [types.LOAD_SINGLE_POST](state, posts) {
    Object.assign(state, { current: post });
  },
};
export const actions = {
  load({ commit }, posts) {
    commit(types.LOAD_POSTS, posts);
  },
  set({ commit }, post) {
    commit(types.LOAD_SINGLE_POST, post);
  },
};
export const getters = {
  loadedPosts: state => state.loaded,
};
