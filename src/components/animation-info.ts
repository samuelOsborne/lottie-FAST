import { css, attr } from '@microsoft/fast-element';
import {customElement, observable, FASTElement} from "@microsoft/fast-element";
import { LottiePlayerControlsStyles } from "../styles/lottie-player-controls.styles";
import { AnimationInfoStyles } from "../styles/animation-info.styles";
import { AnimationInfoTemplate as template } from "../templates/animation-info"
import { PopOver } from "./pop-over"

/*
 * Ensure that tree-shaking doesn't remove this component from the bundle.
 */
PopOver;

const styles = css`
  ${AnimationInfoStyles}
  ${LottiePlayerControlsStyles}
`

/**
 * The animation-info element.
 *
 * @public
 * @remarks
 * HTML Element: \<animation-info\>
 */
@customElement({
    name: 'animation-info',
    template,
    styles
})
export class AnimationInfo extends FASTElement {
    /**
     * The Lottie animation data
     *
     * @public
     * @remarks
     * HTML Attribute: animationData
     */
    @attr
    public animationData: any;
    animationDataChanged() {
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

    /**
     * The animation author
     *
     * @remarks
     */
    @observable
    public author: any;

    /**
     * The animation frame rate
     *
     * @remarks
     */
    @observable
    public frameRate: any;

    /**
     * The animation generator
     *
     * @remarks
     */
    @observable
    public generator: any;

    /**
     * The animation keywords
     *
     * @remarks
     */
    @observable
    public keywords: any;

    /**
     * The animation's number of assets used
     *
     * @remarks
     */
    @observable
    public numAssets: any;

    /**
     * The animation's number of fonts used
     *
     * @remarks
     */
    @observable
    public numFonts: any;

    /**
     * The animation's number of frames
     *
     * @remarks
     */
    @observable
    public numFrames: any;

    /**
     * The animation's number of layers
     *
     * @remarks
     */
    @observable
    public numLayers: any;

    /**
     * The animation's theme color
     *
     * @remarks
     */
    @observable
    public themeColor: any;

    /**
     * The animation's version number
     *
     * @remarks
     */
    @observable
    public version: any;

    /**
     * The animation's meta data
     *
     * @remarks
     */
    @observable
    public hasMeta = false;
}