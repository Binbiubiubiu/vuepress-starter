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
  git: {
    changelog:
      "npx auto-changelog --stdout --commit-limit false -u --template ./changelog.hbs"
  },
  hooks: {
    "after:bump": "npx auto-changelog -p"
  }
};
