---
---

// width functions
function getWidth(){
  return window.innerWidth
}

function BiggerThen991() {
  return getWidth() >= 992
}

//register service worker

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('{{ "/assets/sw.js" | relative_url }}')
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
  let SidebarInstances = getUninitialised(".sidenav");// get all the unintilised sidebars
  let MatirliseSidebarInstances = M.Sidenav.init(SidebarInstances, {"edge": "right"});// initialise them
  SidebarInstances.forEach(markAsInitialised);        // mark them as initialised
  
  //initlise sidebar close buttons
  let sidebarCloseBtns = getUninitialised(".closeSidenavs");// get all the unintilised sidebar close buttons
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
  let collapsableElementInstances = getUninitialised(".collapsible");                            // get all the unintilised collapsables
  let CollapsableInstances = M.Collapsible.init(collapsableElementInstances, {}); // initialise them
  collapsableElementInstances.forEach(markAsInitialised);                                             // mark them as initialised
}

// zoomable images
function initliseZoomableImages () {
  let zoomableElementInstances = getUninitialised(".materialboxed");                  // get all the unintilised zoomable images
  let ZoomableInstances = M.Materialbox.init(zoomableElementInstances, {}); // initialise them
  zoomableElementInstances.forEach(markAsInitialised);                                          // mark them as initialised
}

//initlise components
export default function initliseComponents () {
  initialiseSidebars();
  initiliseCollapsables();
  initliseZoomableImages();
}

initliseComponents()
