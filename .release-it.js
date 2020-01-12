module.exports = {
  git: {
    tagName: "${version}",
    commitMessage: ":bookmark: ${version}",
    tagAnnotation: ":bookmark: ${version}",
    changelog:
      "npx auto-changelog --stdout --commit-limit false -u --template ./changelog.hbs"
  },
  hooks: {
    "after:bump": "npx auto-changelog -p"
  },
  github: {
    release: true,
    releaseName: "${version}"
  },
  npm: false
};
