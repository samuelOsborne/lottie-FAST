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

@customElement({
    name: 'lottie-fast',
    template,
    styles
})
export class LottieFast extends FASTElement {
    @attr path: string = '';
    @attr({ mode: 'boolean' }) loop: boolean = false;
    @attr({ mode: 'boolean' }) controls: boolean = false;
    @attr({ mode: 'boolean' }) autoplay: boolean = false;
    @attr background: string = null;

    @observable public currentFrame: number = 0;
    @observable public playing: boolean = false;
    @observable public maxFrame: number = 0;
    @observable public isZoomed: boolean = false;


    public animationContainer: HTMLElement;
    private lottie: AnimationItem;
    @observable public animationData: any;


    constructor() {
        super();

        this.animationContainer = document.createElement('div');
        this.animationContainer.id = "animation-container";
        this.animationContainer.classList.add("lottie-player");
        this.shadowRoot.appendChild(this.animationContainer);

        /**
         * Initialize the color picker observer
         */
        const person = ColorPicker;
        const notifier = Observable.getNotifier(person);
        const handler = {
            handleChange(source: any, propertyName: string) {
                console.log(source.color);
                this.background = source.color;
                console.log("New background color: " + this.background);
            }
        };
        notifier.subscribe(handler, 'color');
    }

    /**
     * Path listener
     */
    pathChanged() {
        console.log("This path :" + this.path);
        //this.loadLottieAnimation();
    }

    /**
     * Loop listener
     */
    loopChanged() {
        console.log("THIS LOOP : " + this.loop);
        if (this.lottie)
            this.lottie.loop = false;
    }

    /**
     * Background color listener
     */
    backgroundChanged() {
        console.log("Background changed");
        if (this.animationContainer)
            this.animationContainer.style.backgroundColor = this.background;
    }

    connectedCallback() {
        super.connectedCallback();
        console.log('name-tag is now connected to the DOM');
        // this.loadLottieAnimation();
        this.loadLottieData();

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
                // Get SVG element and serialize markup
                if (this.animationContainer) {
                    const svgElement = this.animationContainer.querySelector("svg");
                    if (svgElement) {
                        console.log("Downloading...");
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
            }.bind(this));
        }
    }

    disconnectedCallback() {
        if (this.lottie)
            this.lottie.destroy();
    }

     public handleScrubbing(event: Event) {
        const newValue: number = parseInt((event.target! as HTMLInputElement).value);
         console.log(newValue);
         this.lottie.goToAndStop(newValue, true);
         this.playing = false;
    }

    public previousFrame() {
        if (this.lottie) {
            if (this.currentFrame > 0)
                this.currentFrame--;
            this.lottie.goToAndStop(this.currentFrame, true);
            this.playing = false;
        }
    }

    public nextFrame() {
        if (this.lottie) {
            if (this.currentFrame < this.maxFrame)
                this.currentFrame++;
            this.lottie.goToAndStop(this.currentFrame, true);
            this.playing = false;
        }
    }

    public restartAnimation() {
        if (this.lottie) {
            this.lottie.goToAndStop(0);
            this.playing = false;
            this.currentFrame = 0;
        }
    }

    public toggleLooping() {
        this.loop = !this.loop;
    }

    public pauseAnimation() {
        if (this.lottie) {
            this.lottie.pause();
            this.playing = false;
        }
    }

    public playAnimation() {
        if (this.lottie) {
            this.playing = true;
            this.lottie.play();
        }
    }

    public zoomAnimation() {
        this.isZoomed = !this.isZoomed;
        this.isZoomed ? this.animationContainer.classList.add("is-zoomed") : this.animationContainer.classList.remove("is-zoomed");
    }

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
            console.error("[Lottie-FAST] Your JSON data could not be loaded.");
            return;
        }
    }

    private loadLottieAnimation() {
        this.lottie = Lottie.loadAnimation({
            container: this.animationContainer,
            renderer: 'svg',
            loop: this.loop,
            autoplay: this.autoplay,
            animationData: this.animationData
        });

        this.lottie.addEventListener("DOMLoaded", ()=> {
            this.maxFrame = this.lottie.getDuration(true);
            this.playing = true;

            /**
             * Append control bar after Lottie svg element
             */
            let playerControls = this.shadowRoot.getElementById("player-controls");
            this.animationContainer.append(playerControls);

        });

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
