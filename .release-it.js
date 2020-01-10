module.exports = {
  git: {
    tagName: "${version}",
    commitMessage: ":bookmark: ${version}",
    tagAnnotation: ":bookmark: ${version}"
  },
  github: {
    release: true
  },
  npm: false
};
