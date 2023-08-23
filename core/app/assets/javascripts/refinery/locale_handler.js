// 23/8/23 Couldn't find evidence that this is in use anymore. Locale picking/switching has changed?

const isVisible = element => element.style.display !== "none"
const toggleDisplayNone = element =>  element.style.display = isVisible(element) ? 'none' : ''

const currentLocaleElement = document.querySelector('#current_locale li a')


const displayNone = event => {
  let otherLocales = document.getElementById('other_locales')
  let actions = event.target.querySelectorAll('span.action')
  Array.from(actions).forEach(span => toggleDisplayNone(span))
  otherLocales.classList.toggle('hide_animation')
}

currentLocaleElement.addEventListener('click', displayNone)



$("#other_locales").animate
opacity: "toggle"
height: "toggle"
  , 250
$("html,body").animate
scrollTop: $("#other_locales").parent().offset().top, 250
e.preventDefault()
