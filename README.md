# webcomponents-webinar

## Run

`npx http-server`

## Phases

### 1 - Basic player

Just the basic player setup

Files:
 * `1.html`

### 2 - Custom controlbar with fullscreen button added

Files: 
 * `2.html`
 * `custom-control-bar.js`

 Explanation:

 * Create custom controlbar component
 * Render fullscreen icons at the end of the controlbar
 * Attach event handlers to icon clicks


### 3 - Whole header right zone moved to controlbar

Files:
 * `3.html`
 * `custom-control-bar2.js`
 * `custom-header.js`

Explanation:

 * Create custom controlbar component
 * Render `flowplayer-header-right-zone` into custom controlbar
 * Create custom header component
 * Only render `flowplayer-header-left-zone` to custom header
