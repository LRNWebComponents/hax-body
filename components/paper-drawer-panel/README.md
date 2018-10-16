
<!---

This README is automatically generated from the comments in these files:
paper-drawer-panel.html

Edit those files, and our readme bot will duplicate them over here!
Edit this file, and the bot will squash your changes :)

The bot does some handling of markdown. Please file a bug if it does the wrong
thing! https://github.com/PolymerLabs/tedium/issues

-->

[![Build status](https://travis-ci.org/PolymerElements/paper-drawer-panel.svg?branch=master)](https://travis-ci.org/PolymerElements/paper-drawer-panel)

_[Demo and API docs](https://elements.polymer-project.org/elements/paper-drawer-panel)_


## &lt;paper-drawer-panel&gt;

**This element has been deprecated in favor of [app-layout](https://github.com/PolymerElements/app-layout).**


Material design: [Navigation drawer](https://www.google.com/design/spec/patterns/navigation-drawer.html)

`paper-drawer-panel` contains a drawer panel and a main panel. The drawer
and the main panel are side-by-side with drawer on the left. When the browser
window size is smaller than the `responsiveWidth`, `paper-drawer-panel`
changes to narrow layout. In narrow layout, the drawer will be stacked on top
of the main panel. The drawer will slide in/out to hide/reveal the main
panel.

Use the attribute `drawer` to indicate that the element is the drawer panel and
`main` to indicate that the element is the main panel.

Example:

    <paper-drawer-panel>
      <div slot="drawer"> Drawer panel... </div>
      <div slot="main"> Main panel... </div>
    </paper-drawer-panel>

The drawer and the main panels are not scrollable. You can set CSS overflow
property on the elements to make them scrollable or use `paper-header-panel`.

Example:

    <paper-drawer-panel>
      <paper-header-panel slot="drawer">
        <paper-toolbar></paper-toolbar>
        <div> Drawer content... </div>
      </paper-header-panel>
      <paper-header-panel slot="main">
        <paper-toolbar></paper-toolbar>
        <div> Main content... </div>
      </paper-header-panel>
    </paper-drawer-panel>

To position the drawer to the right, add `right-drawer` attribute.

    <paper-drawer-panel right-drawer>
      <div slot="drawer"> Drawer panel... </div>
      <div slot="main"> Main panel... </div>
    </paper-drawer-panel>

### Styling

To change the main container:

    paper-drawer-panel {
      --paper-drawer-panel-main-container: {
        background-color: gray;
      };
    }

To change the drawer container when it's in the left side:

    paper-drawer-panel {
      --paper-drawer-panel-left-drawer-container: {
        background-color: white;
      };
    }

To change the drawer container when it's in the right side:

    paper-drawer-panel {
      --paper-drawer-panel-right-drawer-container: {
        background-color: white;
      };
    }

To customize the scrim:

    paper-drawer-panel {
      --paper-drawer-panel-scrim: {
        background-color: red;
      };
    }

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-drawer-panel-scrim-opacity` | Scrim opacity | 1
`--paper-drawer-panel-drawer-container` | Mixin applied to drawer container | {}
`--paper-drawer-panel-left-drawer-container` | Mixin applied to container when it's in the left side | {}
`--paper-drawer-panel-main-container` | Mixin applied to main container | {}
`--paper-drawer-panel-right-drawer-container` | Mixin applied to container when it's in the right side | {}
`--paper-drawer-panel-scrim` | Mixin applied to scrim | {}

### Changes in 2.0

Distribution is now done with `slot="drawer"` and `slot="main"` attributes (replacing `drawer` and `main` attributes):

    <paper-drawer-panel>
      <div slot="drawer"> Drawer panel... </div>
      <div slot="main"> Main panel... </div>
    </paper-drawer-panel>
