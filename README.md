# react-progress-simple

A cross-browser, accessible React wrapper for the HTML5 `<progress>` tag

1. [Installation](#Installation)
2. [Usage](#Usage)
3. [Component API](#Component-Api)
4. [Accessibility](#Accessibility)
5. [Browser Support](#Browser-Support)

## Installation

```
# using npm
npm install react-progress-simple

# using yarn
yarn add react-progress-simple
```

## Usage

### Basic Usage

Two different styles of progress bars:

1. Continuous

   ```js
   <Progress value={1} max={10} />
   <Progress value={5} max={10} />
   <Progress value={10} max={10} />
   ```

   ![Image of continuous progress bars](/docs/continuous-example.png)

2. Segmented

   ```js
   <Progress value={1} max={25} segmented />
   <Progress value={12} max={25} segmented />
   <Progress value={25} max={25} segmented />
   ```

   ![Image of segmented progress bars](/docs/segmented-example.png)

### Changing styles (component by component)

```js
<Progress
    value={1}
    max={10}
    options={{
        foregroundColor: "royalblue",
        backgroundColor: "silver",
        height: "14px",
    }}
/>
<Progress
    value={5}
    max={10}
    segmented
    options={{
        foregroundColor: "rebeccapurple",
        backgroundColor: "plum",
        height: "14px",
    }}
/>
<Progress
    value={10}
    max={10}
    options={{
        foregroundColor: "coral",
        backgroundColor: "gray",
        height: "14px",
    }}
/>
```

![Image of progress bars with different colors](/docs/component-color-change-example.png)

## Component API

| prop                    | type                                   | required | default   |
| ----------------------- | -------------------------------------- | -------- | --------- |
| value                   | number                                 | yes      | -------   |
| max                     | number                                 | yes      | -------   |
| segmented               | boolean                                | no       | false     |
| options.width           | React.CSSProperties['width']           | no       | 100%      |
| options.height          | React.CSSProperties['height']          | no       | 8px       |
| options.foregroundColor | React.CSSProperties['color']           | no       | tomato    |
| options.backgroundColor | React.CSSProperties['backgroundColor'] | no       | lightgray |
| options.borderRadius    | React.CSSProperties['borderRadius']    | no       | 4px       |
| options.separatorWidth  | React.CSSProperties['margin']          | no       | 4px       |

## Accessibility

The following [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_progressbar_role) fields related to the [`<progress>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress) element are supplied and have been tested against VoiceOver on MacOS:

- `role='progressbar'`
- `aria-valuenow={<currentValue>}`
- `aria-valuemax={<maximumValue>}`

If any other assistive technologies are not correctly reporting the status of the progress bar component please file an issue.

## Browser Support

react-progress-simple has been tested against the last two versions of Chrome, Firefox, Safari, and Microsoft Edge. Since this project utilizes [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) it _will not_ work in IE11. Initial research into polyfills for IE11 was not successful, but I am still looking.
