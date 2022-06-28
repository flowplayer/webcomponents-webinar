export default class CustomHeader extends HTMLElement {
    constructor(player) {
        super()
        this.className = "fp-header"

        this.append(...player.createComponents("flowplayer-header-left-zone"))
    }
}