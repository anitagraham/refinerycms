const paths = require('./paths')
module.exports = {
  // These aliases can be used to refer to the root of each extension
  alias: {
    Core:       paths.ExtensionPath('core'),
    Images:     paths.ExtensionPath('images'),
    Pages:      paths.ExtensionPath('pages'),
    Dragonfly:  paths.ExtensionPath('dragonfly'),
    Resources:  paths.ExtensionPath('resources'),
    Testing:    paths.ExtensionPath('testing')
  }
}
