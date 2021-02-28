import { css, attr } from '@microsoft/fast-element';
import {customElement, observable, FASTElement} from "@microsoft/fast-element";
import { PopoverStyles } from "../styles/popover.styles";
import { SnapShotTemplate as template } from "../templates/snap-shot.template"
import { PopOver } from "./pop-over"

/*
 * Ensure that tree-shaking doesn't remove this component from the bundle.
 */
PopOver;

const styles = css`
  ${PopoverStyles}
`

/**
 * The snap-shot element. Creates a downloadable svg image at the current frame.
 *
 * @public
 * @remarks
 * HTML Element: \<snap-shot\>
 */
@customElement({
    name: 'snap-shot',
    template,
    styles
})
export class SnapShot extends FASTElement {
    /**
     * The current frame of the animation
     *
     * @public
     * @remarks
     * HTML Attribute: frame
     */
    @attr
    frame: number = 0;

    /**
     * Emits freezeAnimation event when mouseover snap-shot icon
     * Emits unFreezeAnimation event when mouseout snap-shot icon
     *
     * @public
     * @param freeze
     */
    public freezeAnimation(freeze: boolean) {
        freeze ? this.$emit('freezeAnimation') : this.$emit('unFreezeAnimation');
    }

    /**
     * Emits downloadSVG event causing LottieFast to make the browser download
     * an svg image of the animation at the current frame
     *
     * @public
     */
    public downloadSVG() {
        this.$emit('downloadSVG');
    }
}