module.exports = {
  git: {
    tagName: "${version}",
    commitMessage: ":bookmark: ${version}",
    tagAnnotation: ":bookmark: ${version}"
  },
  github: {
    release: true
  },
  npm: false,
  plugins: {
    "@release-it/conventional-changelog": {
      preset: "angular",
      infile: "CHANGELOG.md"
    }
  }
};
