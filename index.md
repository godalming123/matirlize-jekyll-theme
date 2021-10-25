---
layout: default
title: home
barba-page-namespace: home
---

<div id="home"></div>
# matirlize-jekyll-theme
A jekyll theme utilizing [The Matirlize Libary](https://materializecss.com/)

<div id="installation"></div>
## Installation
### GH pages
add this to your ```_config.yml```
```
remote_theme: "godalming123/matirlize-jekyll-theme"
```
### Other hosting
Just copy other all the files from the `main` branch (except the readme) into you jekyll project and your done! This also works for github pages but you will have to manually update the files.

<div id="docs"></div>
## Docs
### Sidebars
Adding a sidebar to your site is as simple as creating a new file in `_includes` named `sidebar.html` then populate that file with items EG:
/_includes/sidebar.html

```
<!-- sidebar trigger -->
<a data-target="nav-mobile" class="sidenav-trigger btn-floating btn-large waves-effect waves-light hide-on-large-only"><i class="material-icons">menu</i></a>

<!-- sidebar -->
<ul id="nav-mobile" class="sidenav sidenav-fixed">
    <!--Your sidebar content here-->    
</ul>
```

If you use this code and just modify the iteme in the ul we will take care of the rest including hiding it n mobile and adding a button and swipe gestures and so on. Also note you can use the `closeSidenavs` class on any element in the sidebar which will make it close all open sidenavs when it is clicked.