import siteBarEditorSwitches from 'refinery/site_bar'
import adminInit from 'refinery/admin'
import subMenu from 'refinery/submenu'
import interface from 'refinery/interface'
import submitContinue from 'refinery/submit_continue'
import ajaxyPagination from 'refinery/ajaxy_pagination'
import domReady from 'refinery/ready'

domReady(() => {
  let siteBarSwitches = siteBarEditorSwitches;
  init_interface();
  init_flash_messages();
  init_submit_continue();
  init_modal_dialogs();
  init_tooltips();
  init_ajaxy_pagination();

  if (typeof (window.onpopstate) == "object") {
    $(window).bind('popstate', function (e) {
      // this fires on initial page load too which we don't need.
      if (!initialLoad) {
        $(document).paginateTo((location.pathname + location.href.split(location.pathname)[1]));
      }
      initialLoad = false;
    });
  }


})
