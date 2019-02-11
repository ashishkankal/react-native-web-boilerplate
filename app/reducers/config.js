const initialState = {
  test: "app"
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_CONFIG":
      return { ...state, ...payload };

    default:
      return state;
  }
};
