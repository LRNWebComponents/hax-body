# \<meme-maker\>

A Polymer element to easily make memes.


## Demo

![demo](https://user-images.githubusercontent.com/8677283/27186368-0b5bbdde-51e0-11e7-8d7b-e171a006600e.png)

<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="meme-maker.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<meme-maker image-url="http://res.cloudinary.com/big-cabal/image/upload/w_700,f_auto,fl_lossy,q_auto/v1484916770/sense_jilgk7.png"
            top-text="You can't fail your tests"
            bottom-text="If you don't write any"
            font-size="28px"></meme-maker>
```



## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your element locally.

## Viewing Your Element

```
$ polymer serve
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.
