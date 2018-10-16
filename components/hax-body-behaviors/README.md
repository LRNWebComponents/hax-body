# HAX body behaviors
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/LRNWebComponents/hax-body-behaviors)

[Video showing how we integrate HAX with elements](https://www.youtube.com/watch?v=P-ZA4CQASpY&index=1&list=PLJQupiji7J5eTqv8JFiW8SZpSeKouZACH)

HAX body behaviors provide a consistent way to rapidly wire Polymer elements up to HAX. While anything can talk to HAX via consistent property and event usage, these body behaviors reduce the time and increase accuracy when trying to wire to HAX (drastically).

The major is in HAX Schema defintion which can be translated to JSON Schema with a single function. This allows for rapidly building out headless "forms" in HAX while the elements themselves just define the JSON blob as to how it should function and what should be wired where. It's more complicated then it sounds.

## Example implementation
For full documentation just open the `hax-body-behaviors.html` file as it's got a lot of documentation but here's a basic example from `video-player`.
top of file:
```
<link rel="import" href="../hax-body-behaviors/hax-body-behaviors.html">
```
Implement the behaviors in the Polymer object:
```
...
Polymer({
      is: 'video-player',
      behaviors: [
        HAXBehaviors.PropertiesBehaviors,
      ],
...
```
Wire up to HAX in an attached life cycle callback:
```
  /**
   * Attached.
   */
  attached: function() {
    // Establish hax properties if they exist
    let props = {
      'canScale': true,
      'canPosition': true,
      'canEditSource': false,
      'gizmo': {
        'title': 'Video player',
        'description': 'This can present video in a highly accessible manner regardless of source.',
        'icon': 'av:play-circle-filled',
        'color': 'red',
        'groups': ['Video', 'Media'],
        'handles': [
          {
            'type': 'video',
            'source': 'source',
            'title': 'caption',
            'caption': 'caption',
            'description': 'caption',
            'color': 'primaryColor'
          }
        ],
        'meta': {
          'author': 'LRNWebComponents'
        }
      },
      'settings': {
        'quick': [
          {
            'property': 'responsive',
            'title': 'Responsive',
            'description': 'The video automatically fills the available area.',
            'inputMethod': 'boolean',
            'icon': 'image:photo-size-select-small',
          },
          {
            'property': 'primaryColor',
            'title': 'Primary color',
            'description': 'Select the primary color used in the video',
            'inputMethod': 'colorpicker',
            'icon': 'editor:format-color-fill',
          },
          {
            'property': 'secondaryColor',
            'title': 'Secondary color',
            'description': 'Select the secondary color used for the video',
            'inputMethod': 'colorpicker',
            'icon': 'editor:format-color-fill',
          }
        ],
        'configure': [
          {
            'property': 'source',
            'title': 'Source',
            'description': 'The URL for this video.',
            'inputMethod': 'textfield',
            'icon': 'link',
            'required': true,
            'validationType': 'url',
          },
          {
            'property': 'caption',
            'title': 'caption',
            'description': 'Simple caption for under video',
            'inputMethod': 'textfield',
            'icon': 'av:video-label',
            'required': false,
            'validationType': 'text',
          },
          {
            'property': 'responsive',
            'title': 'Responsive',
            'description': 'The video automatically fills the available area.',
            'inputMethod': 'boolean',
            'icon': 'image:photo-size-select-small',
          },
          {
            'property': 'primaryColor',
            'title': 'Primary color',
            'description': 'Select the primary color used in the video',
            'inputMethod': 'colorpicker',
            'icon': 'editor:format-color-fill',
          },
          {
            'property': 'secondaryColor',
            'title': 'Secondary color',
            'description': 'Select the secondary color used for the video',
            'inputMethod': 'colorpicker',
            'icon': 'editor:format-color-fill',
          }
        ],
        'advanced': []
      }
    };
    this.setHaxProperties(props);
  },
```