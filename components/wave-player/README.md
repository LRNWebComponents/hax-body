# < wave-player >

⚠️ DEPRECATED: This project is no longer actively developed ⚠️

Check out the components page [HERE](http://link2twenty.github.io/wave-player)

![ScreenShot](http://media.giphy.com/media/3oEduUPRhku9FpetlS/giphy.gif)

## Attributes

| Attribute Name | Functionality | Default |
|----------------|-------------|-------------|
| wavecolor | Color of the wave | #ffffff |
| progresscolor | Color of the portion of the wave already player | #CFD8DC |
| src* | location of the audio file |  |
| lean | which side do you want the button on | left |
| name | Name of audio to be displayed |  |
| title | Specific title, to be displayed smaller |  |
| coverart | location of cover art | art.jpg |
required*

## How to use

If you are looking at useing other peoples custom polymer elements I am going to guess you have some idea what's going on already. If not have a look at the [polymer site](http://polymer-project.org).

Put a link to wave player in your header, it should look something like.
```html
<link rel="import" href="bower_components/wave-player/wave-player.html">
```


Now that you have imported it you can get to using it on your page
<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="wave-player.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<wave-player
  wavecolor="#e44d26" 
  progresscolor="#f16529" 
  src="mirror.mp3" 
  lean="left"
  name="Mirror"
  title="Enjoy..."
/>
```

## Special thanks
- Wave form visualizer - [wavesurfer.js](http://wavesurfer-js.org/)
- Prateek Jadhwani - [prateekjadhwani](https://github.com/prateekjadhwani)
