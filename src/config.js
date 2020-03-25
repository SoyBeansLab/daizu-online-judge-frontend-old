const getValue = (val, defaultVal) => {
  if (val === void 0) {
    return defaultVal;
  } else {
    return val;
  }
};

export const config = {
  DEV_API_SERVER: getValue(process.env.REACT_APP_API_SERVER, ""),
};
