import findOrCreate from 'Utilities/findOrCreate'
import {iconVariations} from 'Elements/icons/iconHandler/import_icons'

const svgNS = 'http://www.w3.org/2000/svg'
const xlinkNS = 'http://www.w3.org/1999/xlink'

/**
 * create an svg 'use' element referencing an svg symbol
 * @param {string} name - name of symbol to reference
 * @returns {SVGSVGElement}
 */
const createUseTemplate = name => {
  let svgElement = document.createElementNS(svgNS, 'svg')
  let useElement = document.createElementNS(svgNS, 'use')
  useElement.setAttributeNS(svgNS, "href", `#${name}`)
  useElement.setAttributeNS(xlinkNS, "href", `#${name}`)
  svgElement.appendChild(useElement)
  return svgElement
}

//  This is the template for the svg symbol element
const createSymbolTemplate = () => {
  let svgElement = document.createElementNS(svgNS, 'svg')
  let symbolElement = document.createElementNS(svgNS, 'symbol')
  symbolElement.ariaHidden = true
  symbolElement.focusable = "false"
  // symbolElement.classList.add('svg-inline--fa')
  symbolElement.role = 'img'
  svgElement.appendChild(symbolElement)
  return svgElement
}
const cloneIcon = (iconName, as=iconName) => {
  saveSymbol(iconName, as)
  let newIcon = iconTemplate.cloneNode(true)
  newIcon.firstChild.setAttributeNS(svgNS, "href", `#${iconName}`)
  newIcon.firstChild.setAttributeNS(xlinkNS, "href", `#${iconName}`)
  newIcon.classList.add(iconName)
  newIcon.classList.remove('clone')
  return newIcon
}
const cloneSymbol = (iconName, iconSet, iconId, svgData) => {
  /* We take the basic symbol, clone it then add specific features to it*/
  // <svg style="display: none;">
    // <symbol aria-hidden="true" focusable="false"
    // data-prefix="fas"
    // data-icon="chevrons-right"
    // className="svg-inline--fa fa-chevrons-right"
    // role="img" xmlns="http://www.w3.org/2000/svg"
    // id="bullet">
      // <path fill="currentColor"
      //  d=".....">
      // </path>
    // </symbol>
  // </svg>

  let newSymbol = symbolTemplate.cloneNode(true)
  let symbol = newSymbol.firstChild
  symbol.dataset.icon = iconName
  symbol.dataset.prefix = `fa${iconSet[0]}` // fas, fab, far
  symbol.classList.add(`fa-${iconName}`)
  symbol.id = iconId
  let path
}
/**
 * Add an icon to iconSymbols
 * @param {string} name - name for the symbol
 * @param {string} icon - name of font-awesome icon (kebab case)
 */
const saveSymbol = (name, icon=name) => {
  if (name in iconSymbols) {
    return
  }  // first definition wins

  iconSymbols[name] = setupSymbol(name, icon)
}

/**
 * Add groups of icons to the set of available icons
 * @param {array} group - A list of icons (see register_icons.js)
 */
// const addIconGroup = group => {
//   for (const [name, icon] of Object.entries(group)) {
//     saveSymbol(name, icon)
//   }
// }
 /**
 * Create a dom element for an icon symbol
 * @param {string} name for the symbol to be used
 * @param {string} iconName the fontawesome name for the icon
 * @returns {HTMLElement}
 */


const setupSymbol = (name, iconName, iconSet) => {

  let element = document.createElement('I')
  element.classList.add(iconOptions.font, `fa-${iconName}`)
  element.dataset.faSymbol = name
  return element
}

/*
* iconSymbols: an object to accumulate the names of icons to be used on page.
* symbolTemplate: @type {SVGSVGElement} a use element which can be cloned to create a symbol
* iconTemplate:   @type {SVGSVGElement} a use element which can be cloned to create an icon (which uses a symbol)
*                 the use element is added to the DOM at or near a specific element
*/
let iconSymbols = {}
let symbolTemplate = createSymbolTemplate()
let iconTemplate = createUseTemplate()

/**
 * creates an HTML element containing a symbol for each icon which been added to iconSymbols.
 * added to the document body if not already there
 */
const exportSymbols = () => {
  let symbolDiv = findOrCreate('svgSymbols', 'DIV')
  if (!symbolDiv.isConnected) {
    document.body.prepend(symbolDiv)
  }
  for (const [_key, value] of Object.entries(iconSymbols)) {
    symbolDiv.append(value)
  }
}
const initialize = () => {


}
export { cloneIcon, exportSymbols, saveSymbol}
