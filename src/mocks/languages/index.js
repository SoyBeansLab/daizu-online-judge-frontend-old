const langs = {
  C: "text/x-csrc",
  "C++": "text/x-c++src",
  Python: "text/x-python",
};

module.exports = {
  get() {
    return [200, langs];
  },
};
