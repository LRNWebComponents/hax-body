<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="q-r.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<q-r title="btopro headshot image" data="https://www.elmsln.org/sites/redesign/files/styles/square-profile-portrait/public/headshot.jpg?itok=_1HEhahr" modulesize="3"></q-r>
```

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/LRNWebComponents/q-r)

# \<q-r\>

Present data as a QR code; useful for presenting media in an offline format or as a quick link when typing isn't an option.

### Polyfill
In order to run in Firefox, q-r requires that the browser get the full shadowDOM polyfill in order to operate. This is a larger polyfill the the recommended -lite variant and as a result will reduce performance to load initially. From andedotal testing it's about 30kb more to load in FF / IE /Edge and there is a slight performance cost in doing so.

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your application locally.

## Viewing Your Application

```
$ polymer serve
```

## Building Your Application

```
$ polymer build
```

This will create a `build/` folder with `bundled/` and `unbundled/` sub-folders
containing a bundled (Vulcanized) and unbundled builds, both run through HTML,
CSS, and JS optimizers.

You can serve the built versions by giving `polymer serve` a folder to serve
from:

```
$ polymer serve build/bundled
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.
