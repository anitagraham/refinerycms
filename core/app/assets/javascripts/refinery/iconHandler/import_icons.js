// now icons are located directly in the fontawesome kit as svg files
import iconData from './iconVariations.json'


const variationsBy = keyField => {
  const defaultFields = {
    font: 'solid',
    iconName: null
  }
  const validFields = Object.keys(defaultFields)
  const valueFields = validFields.filter(fieldName => fieldName !== keyField)
  let keys = []
  let newVariations = {}
  const newKeyField = key => {
    newVariations[key] = {}
    keys.push(key)
  }

  console.log(`Getting variations by ${keyField}`)

  try {
    if (!validFields.includes(keyField)) {
      throw new Error(`${keyField} is not a valid field`)
    }

  } catch(message) {
    log.error(message)
  }

  /* iconData:
    "arrowleft": {
      "iconName": "circle-arrow-left",
      "font": "solid"
  }
   symbolName: arrowleft  (default: iconName - hyphens)
               iconName:  circle-arrow-left (the font-awesome name for this icon)
               font: the fontawesome fontSet we want to get it from (default: solid)

   */
  for (let symbolName in iconData) {

    let variation = {...defaultFields, ...{iconName: symbolName}, ...iconData[symbolName], }
    let key = variation[keyField]

    // on first encounter of a keyField value create a new entry in newVariations
    if (!keys.includes(key)) {
      newKeyField(key)
    }

    newVariations[variation[keyField]][symbolName] = variation
  }
  return newVariations
}

const iconVariations = {
  icons: {},
  byFolder: variationsBy('folder'),
  // byIconName: variationsBy('iconName')
}

export default iconVariations
