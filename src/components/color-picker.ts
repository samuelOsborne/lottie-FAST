import { css } from '@microsoft/fast-element';
import {customElement, observable, FASTElement} from "@microsoft/fast-element";
import { LottiePlayerControlsStyles } from "../styles/lottie-player-controls.styles";
import { ColorPickerStyles } from "../styles/color-picker.styles";
import { ColorPickerTemplate as template } from "../templates/color-picker.template"
import { PopOver } from "./pop-over"

/*
 * Ensure that tree-shaking doesn't remove this component from the bundle.
 */
PopOver;

const styles = css`
  ${ColorPickerStyles};
  ${LottiePlayerControlsStyles}
`

/**
 * The color-picker element.
 *
 * @public
 * @remarks
 * HTML Element: \<color-picker\>
 */
@customElement({
    name: 'color-picker',
    template,
    styles
})
export class ColorPicker extends FASTElement {
    /**
     * The selected color in hexadecimal format
     *
     * @remarks
     */
    @observable
    public color: string = '';

    connectedCallback() {
        super.connectedCallback();

        /**
         * Initialize color sliders if the user set the "background" attribute on lottie-player
         */
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(this.color);
        if (result) {
            this.red = parseInt(result[1], 16);
            this.green = parseInt(result[2], 16);
            this.blue = parseInt(result[3], 16);
        }
    }

    /**
     * The selected red value
     *
     * @remarks
     */
    @observable
    public red: number = 255;

    /**
     * The selected green value
     *
     * @remarks
     */
    @observable
    public green: number = 255;

    /**
     * The selected blue value
     *
     * @remarks
     */
    @observable
    public blue: number = 255;

    /**
     * Converts the entered hexadecimal value to RGB format, updates slider values and emits the new color
     * so that LottieFast updates the background color
     *
     * @public
     * @remarks
     * @param event
     */
    public hexToRgb(event: Event) {
        let hex: string = (event.target! as HTMLInputElement).value;
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

        if (result) {
            this.red = parseInt(result[1], 16);
            this.green = parseInt(result[2], 16);
            this.blue = parseInt(result[3], 16);
            this.color = hex;
            this.$emit('colorChange', this.color);
        }
    }

    /**
     * Converts the RGB slider values to a hexadecimal value to display and emits the new color
     * so that lottie-player updates the background color
     *
     * @private
     * @remarks
     */
    private rgbToHex() {
        this.color = "#" + ((1 << 24) + (this.red << 16) + (this.green << 8) + this.blue).toString(16).slice(1);
        this.$emit('colorChange', this.color);
    }

    /**
     * Parses the red RGB slider value and updates the current background color
     *
     * @public
     * @remarks
     * @param event
     */
    public handleRedInput(event: Event) {
        this.red = parseInt((event.target! as HTMLInputElement).value);
        this.rgbToHex();
    }

    /**
     * Parses the green RGB slider value and updates the current background color
     *
     * @public
     * @remarks
     * @param event
     */
    public handleGreenInput(event: Event) {
        this.green = parseInt((event.target! as HTMLInputElement).value);
        this.rgbToHex();
    }

    /**
     * Parses the blue RGB slider value and updates the current background color
     *
     * @public
     * @remarks
     * @param event
     */
    public handleBlueInput(event: Event) {
        this.blue = parseInt((event.target! as HTMLInputElement).value);
        this.rgbToHex();
    }
}