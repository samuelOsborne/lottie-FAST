import { css, html } from '@microsoft/fast-element';
import { customElement, observable, FASTElement } from '@microsoft/fast-element';
import { PopoverStyles } from '../styles/popover.styles';
import { LottiePlayerControlsStyles } from '../styles/lottie-player-controls.styles';

const styles = css`
    ${PopoverStyles}
    ${LottiePlayerControlsStyles}
`;

const template = html<PopOver>`
    <div class="popover" @mouseover="${(x) => x.showModal()}" @mouseout="${(x) => x.showModal()}">
        <div class="btn">
            <slot name="icon"></slot>
        </div>
        <div class="popover-content left-align ${(x) => (!x.show ? 'hidden' : '')}">
            <slot name="content"></slot>
            <div class="arrow" style="border-color: #ffffff transparent transparent transparent;" />
        </div>
    </div>
`;

/**
 * The pop-over element. Template component that manages showing the modal on mouseover.
 *
 * @public
 * @remarks
 * HTML Element: \<pop-over\>
 */
@customElement({
    name: 'pop-over',
    template,
    styles
})
export class PopOver extends FASTElement {
    /**
     * Manages the modal display state
     * @remarks
     */
    @observable
    public show: boolean = false;

    /**
     * Hides or displays the modal
     *
     * @public
     * @remarks
     */
    public showModal() {
        this.show = !this.show;
    }
}
