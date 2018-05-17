export const state = () => ({});

export const mutations = {};

export const actions = {
  async nuxtServerInit({ dispatch }, context) {
    const posts = [
      {
        title: 'A New Beginning',
        summary: 'This is gonna be great.',
        thumbnail: 'https://placeimg.com/600/200/any',
        id: '1',
        slug: 'a-new-beginning',
      },
      {
        title: 'A Second Beginning',
        summary: 'This is gonna be great.',
        thumbnail: 'https://placeimg.com/600/200/any',
        id: '2',
        slug: 'a-second-beginning',
      },
    ];
    dispatch('posts/load', posts);
  },
};
