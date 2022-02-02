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

export const global = {
  isPending: (state) => ({ ...state, pending: true }),
  pendingRejected: (state, action) => ({
    ...state,
    pending: null,
    error: action.payload,
  }),
  pendingSuccess: (state, { payload }) => ({
    ...state,
    pending: null,
    activeUser: payload.activeUser,
    posts: payload.posts
  }),
}