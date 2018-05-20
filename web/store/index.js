export const state = () => ({});

export const mutations = {};

export const actions = {
  async nuxtServerInit({ dispatch }, context) {
    const res = await context.$axios.get('/posts');
    dispatch('posts/load', res.data);
  },
};
