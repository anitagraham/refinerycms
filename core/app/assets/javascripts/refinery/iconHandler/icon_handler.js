import * as variations from 'Elements/icons/iconHandler/import_icons'
// importing icon svgs

// Icon svgs are located directly in the fontawesome kit as svg files

// can't use these consts as require.context will only accept string literals
// const iconPath = 'Images/fa-icons/**/*.svg'
// const iconRE = /\.svg$/

let allIcons
const iconsByIconset  = variations.byFolder
const importIcons = r => {
  const iconnameRE = /(?<folder>[\w-]+)\/(?<iconName>[\w-]+)\.svg/
  let icons = {
    solid: {},
    regular: {}
  };
  r.keys().map((item, index) => {
    let {folder, iconName} = item.match(iconnameRE).groups
    icons[folder][iconName] = r(item);
  });
  return icons;
}
const loadIcons = () => importIcons(require.context('Images/fa-icons/**/*', true, /\.svg$/, 'sync'))

/* = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = */
const sendIconToPage = (icon, iconName, iconSetName) => {
  symbols.addIcon()


}
const writeIconsToPage = (iconSet, iconSetName) => {
  console.log(`Writing ${iconSetName} icons to the page`)
  Object.keys(iconSet).forEach(iconName => writeIconToPage(iconSet[iconName], iconName, iconSetName))
}
const iconsToPage = icons =>{
  console.log(Object.keys(allIcons))
  Object.keys(icons).forEach(iconSetName => writeIconsToPage(icons[iconSetName], iconSetName))
}

/* = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = */
const getIcon = (key, value) => {
  const re = /(?<folder>[\w-]+)\/(?<iconName>[\w-]+)\.svg/
  const defaultAttributes = {
    folder:'solid',
    symbol: true,
    title: false
  }

  let {folder, iconName} = key.match(re).groups
  let attributes = {iconName: iconName,  ...defaultAttributes, ...iconVariations[name]}
}


/**
 *  This group of functions is used to add icons to elements
 */

/**
 * Add a named icon to any child of parent if the child has classname "<name>_icon", or data-icons="icon_name"
 * @param {string} icon - name of icon to be added
 */
function addIcon(icon) {
  let selectors = `.${icon}_icon, [data-icons="${icon}"]`
  this.querySelectorAll(selectors).forEach(el => el.prepend(symbols.cloneClone(icon)))
  return (this)
}

/**
 * For the odd case when an icon needs to be added to an element that hasn't got an identifiable parent. Just add the icon into the element
 * @param {string} name  the fontawesome name for icon: (eg: circle-arrow-up)
 * @param {string} alias the local name for the icon. (eg:  = rollup)
 */
function addIconTo(name, alias = name) {
  this.prepend(symbols.cloneIcon(name))
  return (this)
}


const initialize = () =>  {
  allIcons = loadIcons()
  iconsToPage(allIcons)
}

const iconHandler = {
  containerElements: [],
  init: initialize(),
}
export default iconHandler

