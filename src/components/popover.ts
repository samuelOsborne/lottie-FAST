import {css, html} from '@microsoft/fast-element';
import {customElement, observable, FASTElement} from "@microsoft/fast-element";
import { PopoverStyles} from "../styles/popover.styles";
import {LottiePlayerControlStyles} from "../styles/lottie-player-controls.styles";

const styles = css`
  ${PopoverStyles}
  ${LottiePlayerControlStyles}
`

const template = html<Popover>`
    <div class="popover" @mouseover="${x => x.showModal()}" @mouseout="${x => x.showModal()}" >
        <div class="btn">
            <slot name="icon"></slot>
        </div>
        <div class="popover-content left-align ${x => !x.show ? 'hidden' : ''}">
            <slot name="content"></slot>
            <div class="arrow" style="border-color: #ffffff transparent transparent transparent;" />
        </div>
    </div>
`

@customElement({
    name: 'pop-over',
    template,
    styles
})
export class Popover extends FASTElement {
    @observable public show: boolean = false;
    @observable public alignment: number = -1;

    constructor() {
        super();
    }

    showModal() {
        this.show = !this.show;
    }
}