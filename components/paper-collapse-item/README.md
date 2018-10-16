paper-collapse-item [![Bower version](https://badge.fury.io/bo/paper-collapse-item.svg)](http://badge.fury.io/bo/paper-collapse-item) [![Travis state](https://travis-ci.org/Collaborne/paper-collapse-item.svg?branch=master)](https://travis-ci.org/Collaborne/paper-collapse-item) [![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/Collaborne/paper-collapse-item)
=========

`paper-collapse-item` provides a Material Design [item with header and collapsible content](https://www.google.com/design/spec/components/lists.html). The web component is built with [Polymer](https://www.polymer-project.org).

To use this element:

`bower install paper-collapse-item`

<!--
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="../iron-icons/iron-icons.html">
    <link rel="import" href="paper-collapse-item.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<paper-collapse-item icon="icons:favorite" header="Item 1" opened>
    Lots of very interesting content.
</paper-collapse-item>
```
Or You can use slot:

```html
<paper-collapse-item icon="icons:favorite" opened>
    <div slot="header">
	    Everything what you want in header.
    </div>
    Lots of very interesting content.
</paper-collapse-item>
```


## License

    This software is licensed under the Apache 2 license, quoted below.

    Copyright 2011-2018 Collaborne B.V. <http://github.com/Collaborne/>

    Licensed under the Apache License, Version 2.0 (the "License"); you may not
    use this file except in compliance with the License. You may obtain a copy of
    the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
    WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
    License for the specific language governing permissions and limitations under
    the License.
    
