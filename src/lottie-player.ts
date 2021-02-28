import { customElement, attr, observable, Observable, FASTElement } from '@microsoft/fast-element';
import Lottie, { AnimationItem } from 'Lottie-web';
import { ColorPicker } from "./components/color-picker";
import { SnapShot } from "./components/snapshot";
import { AnimationInfo } from "./components/animation-info";
import { LottiePlayerControlsStyles as styles} from "./styles/lottie-player-controls.styles";
import { LottiePlayerControlsTemplate as template } from "./templates/lottie-player-controls.template";

/*
 * Ensure that tree-shaking doesn't remove these components from the bundle.
 */
ColorPicker;
SnapShot;
AnimationInfo;

/**
 * The lottie-player element.
 *
 *
 * @public
 * @remarks
 * HTML Element: \<lottie-player\>
 */
@customElement({
    name: 'lottie-player',
    template,
    styles
})
export class LottiePlayer extends FASTElement {
    /**
     * Path or URL to the Lottie animation
     *
     * @public
     * @remarks
     * HTML Attribute: path
     */
    @attr path: string = null;

    /**
     *  Loop the animation
     *
     * @public
     * @remarks
     * HTML Attribute: loop
     */
    @attr({ mode: 'boolean' }) loop: boolean = false;
    loopChanged() {
        if (this.lottie)
            this.lottie.loop = this.loop;
    }

    /**
     * Display the controls bar
     *
     * @public
     * @remarks
     * HTML Attribute: controls
     */
    @attr({ mode: 'boolean' }) controls: boolean = false;

    /**
     * Autoplay the animation
     *
     * @public
     * @remarks
     * HTML Attribute: autoplay
     */
    @attr({ mode: 'boolean' }) autoplay: boolean = false;

    /**
     *  Animation background color
     *
     * @public
     * @remarks
     * HTML Attribute: background
     */
    @attr background: string = null;
    backgroundChanged() {
        if (this.animationContainer)
            this.animationContainer.style.backgroundColor = this.background;
    }

    /**
     * The current animation frame
     *
     * @remarks
     */
    @observable public currentFrame: number = 0;

    /**
     * Animation play state
     *
     * @remarks
     */
    @observable public playing: boolean = false;

    /**
     * Maximum frame of the animation
     *
     * @remarks
     */
    @observable public maxFrame: number = 0;

    /**
     * Zoomed animation state
     *
     * @remarks
     */
    @observable public isZoomed: boolean = false;

    /**
     * Animation data loaded from the "path" attribute
     *
     * @remarks
     */
    @observable public animationData: any;

    /**
     * HTMLElement that contains the Lottie animation and control bar
     *
     * @remarks
     */
    public animationContainer: HTMLElement;

    /**
     * The Lottie animation object returned by Lottie.loadAnimation
     *
     * @remarks
     * @private
     */
    private lottie: AnimationItem;

    constructor() {
        super();

        /**
         * Add the animation container to the shadow root
         */
        this.animationContainer = document.createElement('div');
        this.animationContainer.id = "animation-container";
        this.animationContainer.classList.add("lottie-player");
        this.shadowRoot.appendChild(this.animationContainer);
    }

    connectedCallback() {
        super.connectedCallback();

        this.loadLottieData();
        this.initListeners();
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.lottie)
            this.lottie.destroy();
    }

    /**
     * Initializes listeners on color-picker and snap-shot elements
     *
     * @private
     */
    private initListeners() {
        let colorPicker = this.shadowRoot.getElementById("color-picker");
        if (colorPicker) {
            colorPicker.addEventListener("colorChange", function(e: CustomEvent) {
                this.background = e.detail;
            }.bind(this));
        }

        let snapshot = this.shadowRoot.getElementById("snap-shot");
        if (snapshot) {
            snapshot.addEventListener("freezeAnimation", function(e: Event) {
                this.pauseAnimation();
            }.bind(this));
            snapshot.addEventListener("unFreezeAnimation", function(e: Event) {
                this.playAnimation();
            }.bind(this));
            snapshot.addEventListener("downloadSVG", function(e: Event) {
                this.downloadFrameAsSVG();
            }.bind(this));
        }
    }

    /**
     * Fetches the rendered SVG element of the animation and serializes markup
     *
     * @private
     */
    private downloadFrameAsSVG() {
        if (this.animationContainer) {
            const svgElement = this.animationContainer.querySelector("svg");
            if (svgElement) {
                const serializedSvg = new XMLSerializer().serializeToString(svgElement);
                let data = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(serializedSvg);

                const element = document.createElement('a');
                element.href = data;
                element.download = "snapshot_" + this.currentFrame + ".svg";
                document.body.appendChild(element);
                element.click();
                document.body.removeChild(element);
            }
        }
    }

    /**
     * Manage scrubbing through frames, pauses the animation whilst this is happening
     *
     * @public
     * @param event
     */
     public handleScrubbing(event: Event) {
        const newValue: number = parseInt((event.target! as HTMLInputElement).value);
         this.lottie.goToAndStop(newValue, true);
         this.playing = false;
    }

    /**
     * Go back one frame in the animation
     *
     * @public
     */
    public previousFrame() {
        if (this.lottie) {
            if (this.currentFrame > 0)
                this.currentFrame--;
            this.lottie.goToAndStop(this.currentFrame, true);
            this.playing = false;
        }
    }

    /**
     * Go forward one frame in the animation
     *
     * @public
     */
    public nextFrame() {
        if (this.lottie) {
            if (this.currentFrame < this.maxFrame)
                this.currentFrame++;
            this.lottie.goToAndStop(this.currentFrame, true);
            this.playing = false;
        }
    }

    /**
     * Goes to the frame 0 and stops the animation
     *
     * @public
     */
    public restartAnimation() {
        if (this.lottie) {
            this.lottie.goToAndStop(0);
            this.playing = false;
            this.currentFrame = 0;
        }
    }

    /**
     * Toggles animation looping
     *
     * @public
     */
    public toggleLooping() {
        this.loop = !this.loop;
    }

    /**
     * Stops the animation from playing
     *
     * @public
     */
    public pauseAnimation() {
        if (this.lottie) {
            this.lottie.pause();
            this.playing = false;
        }
    }

    /**
     * Plays the animation
     *
     * @public
     */
    public playAnimation() {
        if (this.lottie) {
            this.playing = true;
            this.lottie.play();
        }
    }

    /**
     * Zooms the animation
     *
     * @public
     */
    public zoomAnimation() {
        this.isZoomed = !this.isZoomed;
        this.isZoomed ? this.animationContainer.classList.add("is-zoomed") : this.animationContainer.classList.remove("is-zoomed");
    }

    /**
     * Attempts to load JSON animation data from the path provided as attribute
     *
     * @private
     */
    private async loadLottieData() {
        if (this.path === null) {
            this.animationData = null;
            return;
        }
        try {
            const response = await fetch(this.path);
            this.animationData = await response.json();
            this.loadLottieAnimation();
        } catch (e) {
            console.error("[Lottie-player] Your JSON data could not be loaded.");
            return;
        }
    }

    /**
     * Method called after loading JSON animation data successfully, loads Lottie animation using Lottie-web
     * and sets up listeners
     *
     * @private
     */
    private loadLottieAnimation() {
        this.lottie = Lottie.loadAnimation({
            container: this.animationContainer,
            renderer: 'svg',
            loop: this.loop,
            autoplay: this.autoplay,
            animationData: this.animationData
        });

        /**
         * Animation has been loaded in to the DOM
         */
        this.lottie.addEventListener("DOMLoaded", ()=> {
            this.maxFrame = this.lottie.getDuration(true);
            this.playing = this.autoplay;

            /**
             * Append control bar after rendered Lottie SVG element
             */
            let playerControls = this.shadowRoot.getElementById("player-controls");
            this.animationContainer.append(playerControls);
        });

        /**
         * Animation has reached its end
         */
        this.lottie.addEventListener("complete", ()=> {
            this.playing = false;
           if (this.loop) {
               this.lottie.goToAndPlay(0, true);
               this.playing = true;
           }
        });

        this.lottie.addEventListener("enterFrame", function (animation: any) {
            this.currentFrame = Math.round(animation.currentTime);
        }.bind(this));
    }
}
