# ractive-modal
A modal window component for Ractive

Features
- Lightweight, minified version is &lt; **9kb**
- Opens and closes with a data variable
- Includes default styling but it's also highly customizable via user CSS classes and styles
- Modal intro and outro effects using CSS animations
- Exposes Component events - beforeOpen, opening, afterOpen, beforeClose, afterClose
- Scrollable when it's contents exceed screen height
- Closeable by clicking on the upper right "x", the overlay or the esc key
- **Stackable** - Multiple modal windows on top of each other
- Ability to set initial focus on an element when the modal window opens, just set the **autofocus** attribute on an element inside the modal
- Focus management trapps keyboard focus - tabbed navigation inside the modal window
- Ability to have unclosable modal windows
- Render on demand or stay always in DOM with "live" mode
- Ability to append to an element


Click here for documentation and examples
https://kouts.github.io/ractive-modal/demo/

# Development

In order to start development:

```sh
npm i
npm run watch
```