export const basic = {
  isPending: (state) => ({ ...state, pending: true }),
  pendingRejected: (state, action) => ({
    ...state,
    pending: null,
    error: action.payload,
  }),
  pendingSuccess: (state, action) => ({
    ...state,
    pending: null,
    data: action.payload,
  }),
}

export const stage2 = {
  isPending: (state) => ({ ...state, pending: true }),
  pendingRejected: (state, action) => ({
    ...state,
    pending: null,
    error: action.payload,
  }),
  storeTimelinePosts: (state, { payload }) => ({
    ...state,
    pending: null,
    posts: {
      timeline: payload,
      profile: state.posts.profile,
    },
  }),
  storeProfilePosts: (state, { payload }) => ({
    ...state,
    pending: null,
    posts: {
      timeline: state.posts.timeline,
      profile: payload,
    },
  }),
}