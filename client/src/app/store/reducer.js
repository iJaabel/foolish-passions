export const common = {
  pending: (state) => ({ ...state, pending: !state.pending }),
  rejected: (state, { payload }) => ({
    ...state,
    error: payload,
  }),
  success: (state, { payload }) => ({
    ...state,
    data: payload,
  }),
}

export const userReducer = {
  pending: (state) => ({ ...state, pending: !state.pending }),
  rejected: (state, { payload }) => ({
    ...state,
    error: payload,
  }),

  storeActiveUser: (state, { payload }) => ({
    ...state,
    active: payload,
    lib: state.lib,
    pending: state.pending ? !state.pending : state.pending,
    error: {},
  }),
  storeLib: (state, {payload}) => ({
    ...state,
    active: state.active,
    lib: payload,
    pending: state.pending ? !state.pending : state.pending,
    error: {},
  })
}

export const postReducer = {
  pending: (state) => ({ ...state, pending: !state.pending }),
  rejected: (state, { payload }) => ({
    ...state,
    pending: state.pending ? !state.pending : state.pending,
    error: payload,
  }),

  storeCollection: (state, { payload }) => ({
    ...state,
    owner: state.owner,
    collection: payload,
    pending: state.pending ? !state.pending : state.pending,
    error: {},
  }),
  storeOwner: (state, { payload }) => ({
    ...state,
    owner: payload,
    collection: state.collection,
    pending: state.pending ? !state.pending : state.pending,
    error: {},
  }),
}

