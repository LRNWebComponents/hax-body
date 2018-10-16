# paper-audio-player 

## Forked by the LRNWebComponents team

Fork provides better accessibility, updated polymer dependencies, HAX integration and Schema integrations.


## Original file follows

[![Build Status](https://travis-ci.org/gorork/paper-audio-player.svg?branch=master)](https://travis-ci.org/gorork/paper-audio-player) [![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://beta.webcomponents.org/element/gorork/paper-audio-player)

A custom audio player with material paper style and clean design.

![Paper-audio-player example](http://nadikun.com/code/paper-audio-player/demo/paper-audio-player.jpg)

## Live demo

Check the Player live [here](http://nadikun.com/code/paper-audio-player/demo).

## Element usage example

Here is an example of code to add a Paper-Audio-Player element to your page:

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="paper-audio-player.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<paper-audio-player src="http://nadikun.com/audio/demo.mp3" title="Pink Shades - O+PNR" color="#F05C38"></paper-audio-player>
```

**Title** and **color** attributes are optional.

## Install

Install the component using [Bower](http://bower.io/):

    bower install paper-audio-player --save

Or [download as ZIP](https://github.com/gorork/paper-audio-player/archive/master.zip).

## Dependencies

- Polymer 1.0
- Paper-progress
- Iron-Icons
- Paper-icon-button
- Paper-ripple

These dependencies are managed via [Bower](http://bower.io/). You can
install that via:

    npm install -g bower

Then, go ahead and download the player's dependencies:

    bower install

## Usage

1. Import Web Components' polyfill:

    ```html
    <script src="bower_components/webcomponentsjs/webcomponents-lite.js"></script>
    ```

2. Import Player element:

    ```html
    <link rel="import" href="bower_components/paper-audio-player/paper-audio-player.html">
    ```

3. Start using it!

    ```html
    <paper-audio-player src="track.mp3"></paper-audio-player>
    <paper-audio-player src="podcast-2.mp3" title="My Podcast #2"></paper-audio-player>
    <paper-audio-player src="song.mp3" title="PANG! - Cry Me A River" color="#F05C38"></paper-audio-player>
    ```

## Customization

Attribute     | Options                                 | Description
---           | ---                                     | ---
`src`         | *string*                                | The URL path to the audio file
`title`       | *string*                                | Customize the track name
`color`       | *string*                                | Customize the accent color that will be used
`auto-play`   | *boolean*                               | Will start playing the audio file automatically
`preload`     | *string*: `auto`, `metadata`, `none`    | Defines if audio file should be pre-loaded.
`time-offset` | *number*                                | Sets the time offset in `seconds` for audio to start playing at this time.
`ga-id`       | *string*                                | Sets Google Analytics tracking ID, e.g. `UA-000000-01`.

**Note**: Just like in native audio element, the `preload` property will be ignored if `auto-play` is set on a player.

#### Google Analytics

If you add your unique GA tracking ID to a player (e.g. `ga-id="UA-000000-01"`), it will dispatch the following events to your GA: **Play**, **Pause**, **Scrub**, **Ended**.
**Ended** means that audio played through to the very end.

For each event Paper Player will pass an **event label** property that contains a `title` (if specified) or `src` value of an audio file.

## Development

If you wish to work on your element in isolation, we recommend that you use
[Polyserve](https://github.com/PolymerLabs/polyserve) to keep your element's
bower dependencies in line. You can install it via:

    npm install -g polyserve

And you can run it via:

    polyserve

Once running, you can preview your element at
`http://localhost:8080/components/paper-audio-player/`

To work with Demo page styling with Sass, install grunt and its plugins:

    npm install

After you made any changes, create new CSS file:

    gulp

This will convert Sass into CSS and run [Autoprefixer](https://autoprefixer.github.io/).

## Testing

The tests are compatible with [web-component-tester](https://github.com/Polymer/web-component-tester).
Install it via:

    npm install -g web-component-tester

Then, you can run your tests on _all_ of your local browsers via:

    wct

Or, simply navigate to the `/test` directory if you are using Polyserve: `http://localhost:8080/components/paper-audio-player/test/`

**(OS X only)** Manually install the latest SafariDriver extention for Selenium - check the 1st step in Quick Start [here](https://www.polymer-project.org/1.0/docs/tools/tests).

**Firefox 46** At the moment please fall back to test in Firefox 46 or earlier - see WCT issue [here](https://github.com/Polymer/web-component-tester/issues/317).

#### WCT Tips

`wct -l chrome` will only run tests in chrome.

`wct -p` will keep the browsers alive after test runs (refresh to re-run).

`wct test/some-file.html` will test only the files you specify.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b new-feature`
3. Cover your code with tests and make sure all new and existing tests pass locally before pushing.
4. Commit your changes: `git commit -m 'Add some awesomeness'`
5. Push to the branch: `git push origin new-feature`
6. Submit a pull request!

## License

[MIT License](http://nadi.mit-license.org/) © Nadi Dikun
