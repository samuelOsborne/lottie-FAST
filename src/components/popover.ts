import {html} from '@microsoft/fast-element';
import {customElement, observable, FASTElement} from "@microsoft/fast-element";
import { PopoverStyles as styles} from "../styles/popover.styles";

const template = html<Popover>`
    <div class="popover" @mouseover="${x => x.showModal()}" @mouseout="${x => x.showModal()}" >
        <div class="btn">
            <div>
                <slot name="icon"></slot>
            </div>
        </div>
        <div class="popover-content left-align right-align ${x => !x.show ? 'hidden':''}">
            <div>
                <slot name="content" />
                <div class="arrow" style="border-color: #ffffff transparent transparent transparent;" />
            </div>
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

    constructor() {
        super();
    }

    showModal() {
        this.show = !this.show;
    }
}