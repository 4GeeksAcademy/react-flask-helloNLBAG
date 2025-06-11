export const initialStore = () => {
  return {
    token: sessionStorage.getItem("token"),
    user: null,
  };
};

export default function storeReducer(state, action) {
  switch (action.type) {
    case "SET_TOKEN":
      return { ...state, token: action.payload };
    case "SET_USER":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { token: null, user: null };
    default:
      return state;
  }
}
