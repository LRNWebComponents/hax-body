<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="task-list.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<task-list name="Steps to get ready" related-resource="#Ffff-fs22-555-fed" tasks='[{"name": "Read the readings.","link": "http://btopro.com/"},{"name": "Create the project."},{"name": "Submit the project"}]'></task-list>
```

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/LRNWebComponents/task-list)

# \<task-list\>
Visual listing of tasks with different design components that is
OER Schema capable!

[Video showing this being built out and explained](https://www.youtube.com/watch?v=b_I19aJYIso)

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
