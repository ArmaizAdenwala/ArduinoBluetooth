const INITIAL_STATE = {
  data: [],
  status: null,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'BLUETOOTH':
      return {
        ...state,
        status: 'LOADING',
        data: null,
        error: null,
      };

    case 'BLUETOOTH_SUCCESS':
      return {
        ...state,
        status: 'SUCCESS',
        data: action.data,
      };

    case 'BLUETOOTH_FAILURE':
      return {
        ...state,
        status: 'FAILURE',
        error: action.error,
      };

    default:
      return state;
  }
};
