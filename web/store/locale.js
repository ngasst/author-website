import types from '../types';

export const state = () => ({
  locales: ['en', 'fr'],
  locale: 'en',
});

export const mutations = {
  [types.SET_LANG](state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale;
    }
  },
};

export const actions = {
  english({ commit }) {
    commit(types.SET_LANG, 'en');
  },
  french({ commit }) {
    commit(types.SET_LANG, 'fr');
  },
  set({ commit }, locale) {
    commit(types.SET_LANG, locale);
  },
};

export const getters = {
  locale: state => state.locale,
};
