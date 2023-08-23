const path = require('path');
const RefineryRoot = path.resolve(__dirname, '..','..','..', 'refinerycms')
const Utilities = path.resolve(AppRoot, 'javascripts', 'src', 'utilities')

const ExtensionPath = name => path.resolve(RefineryRoot, name)
module.exports = {
  ExtensionPath, RefineryRoot, Utilities
}
