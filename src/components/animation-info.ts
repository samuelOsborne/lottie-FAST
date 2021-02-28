import { css, attr } from '@microsoft/fast-element';
import {customElement, observable, FASTElement} from "@microsoft/fast-element";
import { LottiePlayerControlsStyles } from "../styles/lottie-player-controls.styles";
import { AnimationInfoStyles } from "../styles/animation-info.styles";
import { AnimationInfoTemplate as template } from "../templates/animation-info"
import { PopOver } from "./pop-over"

PopOver;

const styles = css`
  ${AnimationInfoStyles}
  ${LottiePlayerControlsStyles}
`

@customElement({
    name: 'animation-info',
    template,
    styles
})
export class AnimationInfo extends FASTElement {
    @attr animationData: any;

    @observable author: any;
    @observable frameRate: any;
    @observable generator: any;
    @observable keywords: any;
    @observable numAssets: any;
    @observable numFonts: any;
    @observable numFrames: any;
    @observable numLayers: any;
    @observable themeColor: any;
    @observable version: any;
    @observable hasMeta = false;

    constructor() {
        super();
    }

    animationDataChanged() {
        console.log("Animation data changed");
        if (this.animationData) {
            this.frameRate = this.animationData.fr;
            this.numAssets = this.animationData.assets ? this.animationData.assets.length : 0;
            this.numFonts = this.animationData.fonts ? this.animationData.fonts.length : 0;
            this.numFrames = this.animationData.op - this.animationData.ip;
            this.numLayers = this.animationData.layers ? this.animationData.layers.length : 0;
            this.version = this.animationData.v;

            if (this.animationData.meta) {
                this.hasMeta = true;
                this.author = this.animationData.meta.a;
                this.generator = this.animationData.meta.g;
                this.keywords = this.animationData.meta.k;
                this.themeColor = this.animationData.meta.tc;
            }
        }
    }
}