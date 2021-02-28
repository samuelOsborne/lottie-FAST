import { css, attr } from '@microsoft/fast-element';
import {customElement, observable, FASTElement} from "@microsoft/fast-element";
import { PopoverStyles } from "../styles/popover.styles";
import { SnapShotTemplate as template } from "../templates/snap-shot.template"
import { Popover } from "./popover"

Popover;

const styles = css`
  ${PopoverStyles}
`

@customElement({
    name: 'snap-shot',
    template,
    styles
})
export class SnapShot extends FASTElement {
    @attr frame: number = 0;

    constructor() {
        super();
    }

    public freezeAnimation(freeze: boolean) {
        freeze ? this.$emit('freezeAnimation') : this.$emit('unFreezeAnimation');
    }

    public downloadSVG() {
        console.log("Emitting downloading svg");
        this.$emit('downloadSVG');
    }
}