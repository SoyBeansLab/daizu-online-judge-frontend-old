const langs = ["C", "C++", "Python", "Java"];

module.exports = {
  get() {
    return [200, langs];
  },
};
