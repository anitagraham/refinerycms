// $(function() {
//   $switch_anchor = $('#editor_switch a').not('.ie7 #editor_switch a, .ie6 #editor_switch a');
// });

const unwanted = ['ie6', 'ie7']

// Filter out elements which have an ancestor with any of the selectors in 'unwanted'
const notTheseAncestors = element => unwanted.every(selector => !element.closest(selector))
const siteBarEditorSwitches = siteBar => siteBar.querySelectorAll('.editor_switch a').filter(link => notTheseAncestors(link))
export default siteBarEditorSwitches
