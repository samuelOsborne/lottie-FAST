import { css } from '@microsoft/fast-element';
import {customElement, observable, FASTElement} from "@microsoft/fast-element";
import { LottiePlayerControlsStyles } from "../styles/lottie-player-controls.styles";
import { ColorPickerStyles } from "../styles/color-picker.styles";
import { ColorPickerTemplate as template } from "../templates/color-picker.template"
import { PopOver } from "./pop-over"

PopOver;

const styles = css`
  ${ColorPickerStyles};
  ${LottiePlayerControlsStyles}
`

@customElement({
    name: 'color-picker',
    template,
    styles
})
export class ColorPicker extends FASTElement {
    @observable color: string = '';
    @observable red: number = 255;
    @observable green: number = 255;
    @observable blue: number = 255;

    constructor() {
        super();
    }

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

    private rgbToHex() {
        this.color = "#" + ((1 << 24) + (this.red << 16) + (this.green << 8) + this.blue).toString(16).slice(1);
        this.$emit('colorChange', this.color);
    }

    handleRedInput(event: Event) {
        this.red = parseInt((event.target! as HTMLInputElement).value);
        this.rgbToHex();
    }

    handleGreenInput(event: Event) {
        this.green = parseInt((event.target! as HTMLInputElement).value);
        this.rgbToHex();
    }

    handleBlueInput(event: Event) {
        this.blue = parseInt((event.target! as HTMLInputElement).value);
        this.rgbToHex();
    }
}