<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="hero-banner.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<hero-banner image="https://lrnwebcomponents.github.io/hax-body/components/hax-body/stock.jpg" title="Alaska" details="Wild and free? Or dangerously cold. You be the judge in our latest report" button-text="Read the report" button-link="https://weather.com/weather/today/l/USAK0012:1:US" button-color="#f57c00"></hero-banner>
```

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/LRNWebComponents/hero-banner)

Silly promo - https://www.youtube.com/watch?v=IdAKnqp9fMU
Accessibility of the colors in this -- https://www.youtube.com/watch?v=Z1Fc2kHoFGI
# \<hero-banner\>

A LRN element

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
