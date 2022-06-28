export default class MyComponent extends HTMLElement {
    constructor(player) {
        super()
        this.className = "fp-controls fp-togglable"
        this.append(...player.createComponents(
            "flowplayer-control-buttons"
          , "flowplayer-live-status"
          , "flowplayer-elapsed-time"
          , "flowplayer-timeline-bar"
          , "flowplayer-control-duration"
          , "flowplayer-volume-control"
          , "flowplayer-header-right-zone"
        )) 
    }
}