---
layout: default
title: home
barba-page-namespace: home
---

<div id="home"></div>
# <i class="material-icons inherit-font-size">home</i> matirlize-jekyll-theme
A jekyll theme utilizing [The Matirlize Libary](https://materializecss.com/) but with a few improvements such as:
<ul class="browser-default">
    <li>sidebars that automatically hide/close depending on device size with a button for smaller devices. See: <a href="#sidebars">sidebars</a></li>
    <li>Optional alignment settings. See: <a href="#alignment">alignment</a></li>
    <li>an improved hover effect on cards with the card clearly rasing on hover (use the `no-hover-effect` class to disable)</li>
    <li>Divs that can have a link that makes the whole thing clickable. See: <a href="#divs">clickable-divs</a></li>
    <li>Some added footer styles. See: <a href="#footers">footers</a></li>
    <li>added sections styles. See: <a href="#sections">sections</a></li>
    <li>added a tag element. See: <a href="#tags">tags</a></li>
    <li>added a service worker that caches files as they are loaded</li>
    <li>added barba js to animate between pages smoothly</li>
    <li>`img` and `i` elements are now the same size as the text when inside a pargraph</li>
    <li>improved contrast on links</li>
    <li>an added "display-block" helper class</li>
    <li>an added "circle" helper class to make something a circle</li>
    <li>an added "center-text helper class to center something's text</li>
</ul>


<div id="installation"></div>
## <i class="material-icons inherit-font-size">file_download</i> Installation
### GH pages
add this to your ```_config.yml```
```
remote_theme: "godalming123/matirlize-jekyll-theme"
```
### Other hosting
Just copy other all the files from the `main` branch (except the readme) into you jekyll project and your done! This also works for github pages but you will have to manually update the files.

<div id="docs"></div>
## <i class="material-icons inherit-font-size">insert_drive_file</i> Docs

<div id="sections"></div>
### Sections
I have added custom sections EG:
```html
<section class="section-padded">
    a section
</section>
<section class="section-padded slight-bg-color-change">
    another section section with a defferent color
    <button clas="btn waves-light">a button</button>
</section>
```

<div id="tags"></div>
### Tags
You can add custom tags. EG:
```html
<span class="tag">A tag</span>
<span class="tag">And another</span>
<span class="tag">Why not</span>
<span class="tag">Just one more</span>
```

<div id="divs"></div>
### Clickable divs
You can add `a` tags that have the same dimensions as a div to make it clickable EG:
```html
<div class="clickable-div" style="background: grey; padding: 5px; border-radius: 3px;">
    <!-- content -->
    <h1>hellooo!</h1>
    <!-- url -->
    <a href="#some-link" class="clickable-div-link">You should'nt see this text</a>
</div>
```

<div id="footers"></div>
### Footers
To add a bottom footer simply use:
```html
<footer>
    <h1>I'm a footer</h1>
    <p>some text</p>
</footer>
```

<div id="alignment"></div>
### Alignment
To enable my alignment setting where text (headers and paragraphs `li`'s and blockquete's) are centered with left-aligned text and a max width and `img`'s are centered without a max width.
Use:
```
_config.yml
```
```
custom-alignment: true
```

<div id="sidebars"></div>
### Sidebars
Adding a sidebar to your site is as simple as creating a new file in `_includes` named `sidebar.html` then populate that file with items andthen setting the width EG:
```
_includes/sidebar.html
```
```html
<!-- sidebar trigger -->
<a data-target="nav-mobile" class="sidenav-trigger btn-floating btn-large waves-effect waves-light hide-on-large-only"><i class="material-icons">menu</i></a>

<!-- sidebar -->
<ul id="nav-mobile" class="sidenav sidenav-fixed">
    <!--Your sidebar content here-->    
</ul>
```
```
_config.yml
```
```
sidenav-width: 300px;
```

If you use this code and just modify the iteme in the ul we will take care of the rest including hiding it n mobile and adding a button and swipe gestures and so on. Also note you can use the `closeSidenavs` class on any element in the sidebar which will make it close all open sidenavs when it is clicked.
