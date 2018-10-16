## paper-icon-picker
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/vhr/paper-icon-picker) [![GitHub version](https://badge.fury.io/gh/vhr%2Fpaper-icon-picker.svg)](https://badge.fury.io/gh/vhr%2Fpaper-icon-picker) [![Build Status](https://travis-ci.org/vhr/paper-icon-picker.svg?branch=master)](https://travis-ci.org/vhr/paper-icon-picker)

This is a simple icon picker element that will allow you to choose one
of the Material Design icons from a list of available swatches.

Example:

```html
<paper-icon-picker></paper-icon-picker>

<paper-icon-picker icon="{{selectedIcon}}"></paper-icon-picker>
```

You can configure the icon palette being used using the `iconList` array and
the `columnCount` property, which specifies how many "generic" icons (i.e. columns
in the picker) you want to display.

```html
<paper-icon-picker column-count=5 icon-list='["icons:cloud", "icons:face", "icons:work", "icons:pets", "icons:perm-contact-calendar"]'></paper-icon-picker>
```

### Styling

The following custom properties and mixins are available for styling:

| Custom property | Description | Default |
| --- | --- | --- |
| `--paper-icon-picker-icon-size` | The size of each of the icon boxes | `26px` |
| `--paper-icon-picker-size` | The size of the icon picker | `24px` |
