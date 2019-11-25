export const reducer = (data, action) => {
  switch (action.type) {
    case "REQUEST_SENDING":
      return {
        loading: true,
        data: []
      };
    case "REQUEST_SUCCESS":
      return {
        loading: false,
        data: action.data
      };
    case "REQUEST_FAILED":
      return {
        loading: false,
        data: action.data
      };
    default:
      return {};
  }
};
