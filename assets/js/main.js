// width functions
function getWidth(){
  return window.innerWidth
}

function BiggerThen991() {
  return getWidth() >= 992
}

//register service worker

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
    .then (reg => {console.info ('Service Worker registration successfull:', reg);})
    .catch(err => {console.error('Service Worker registration failed:',      err);});
  };

//ui

function getUninitialised(cssSelection) {
  return document.querySelectorAll(cssSelection + ":not(.initialised)")
}
function markAsInitialised(element) {
  element.classList.add("initialised")
}

//side bar
function initialiseSidebars () {
  // initlise sidebar
  var SidebarInstances = getUninitialised(".sidenav");// get all the unintilised sidebars
  var MatirliseSidebarInstances = M.Sidenav.init(SidebarInstances, {"edge": "right"});// initialise them
  SidebarInstances.forEach(markAsInitialised);        // mark them as initialised
  
  //initlise sidebar close buttons
  var sidebarCloseBtns = getUninitialised(".closeSidenavs");// get all the unintilised sidebar close buttons
  sidebarCloseBtns.forEach((elem) => {
    elem.onclick = () => {// add there onclick event to close the sidebar
      if (!BiggerThen991()) {
        for ( let _ = 0; _ <= MatirliseSidebarInstances.length ; _++ ) {
          MatirliseSidebarInstances[_].close();
        }
      }
    }
    markAsInitialised(elem)// mark the elem as initilised
  })
}

//collapsable
function initiliseCollapsables () {
  var collapsableElementInstances = getUninitialised(".collapsible");             // get all the unintilised collapsables
  var CollapsableInstances = M.Collapsible.init(collapsableElementInstances), {});// initialise them
  collapsableElementInstances.forEach(markAsInitialised);                         // mark them as initialised
}

// zoomable images
function initliseZoomableImages () {
  var zoomableElementInstances = getUninitialised(".materialboxed");       // get all the unintilised zoomable images
  var ZoomableInstances = M.Materialbox.init(zoomableElementInstances, {});// initialise them
  zoomableElementInstances.forEach(markAsInitialised);                     // mark them as initialised
}

//initlise components
function initliseCompoents () {
  initialiseSidebars()
  initiliseCollapsables()
  initliseZoomableImages()
}

initliseCompoents()
