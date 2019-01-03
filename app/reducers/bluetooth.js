const INITIAL_STATE = {
  data: [],
  status: null,
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "BLUETOOTH_CONNECT":
      return {
        ...state,
        status: "loading",
        data: null,
        error: null
      };

    case "BLUETOOTH_CONNECT_SUCCESS":
      return {
        ...state,
        status: "success",
        data: action.data,
        error: null
      };

    case "BLUETOOTH_CONNECT_FAILURE":
      return {
        ...state,
        status: "failure",
        error: action.error
      };

    default:
      return state;
  }
};
