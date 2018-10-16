<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="person-testimonial.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<link rel="import" href="person-testimonial.html">
<person-testimonial image="headshot.jpg" name="Someone Mc'HAX" position="A HAX user">
  <span>I know HAX. I've used HAX, I've written HAX. And let me tell you, HAX,... it's HAX alright.</span>
</person-testimonial>

```

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/LRNWebComponents/person-testimonial)

# \<person-testimonial\>

Showcase a client testimonial on your site to sell more widgets. Here's a video of how this was built and where it came from: [YouTube video](https://www.youtube.com/watch?v=KrS9kUO_ghA)

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
