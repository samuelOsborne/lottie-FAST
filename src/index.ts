import { customElement, attr, observable, FASTElement } from '@microsoft/fast-element';
import Lottie, { AnimationItem } from 'Lottie-web';
import { LottiePlayerControlStyles as styles} from "./styles/lottie-player-controls.styles";
import { LottiePlayerControlTemplate as template } from "./templates/lottie-player-controls.template";

/**
 * TODO
 * import more custom elements from local path
 */

const styling = `
  :host {
    justify-content: center;
    align-items: center;
    display: inline-block;
    background-color: #295573
  }
  div {
    width: 100%;
    height: 100%;
    margin: auto;
  }
`;

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

    @observable public currentFrame: number = 0;
    @observable public playing: boolean = false;
    @observable public maxFrame: number = 0;


    public animationContainer: HTMLElement;
    private lottie: AnimationItem;


    constructor() {
        super();

        const style = document.createElement('style');
        style.innerHTML = styling;
        this.shadowRoot.appendChild(style);
        this.animationContainer = document.createElement('div');
        this.shadowRoot.appendChild(this.animationContainer);
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

    connectedCallback() {
        super.connectedCallback();
        console.log('name-tag is now connected to the DOM');
        this.loadLottieAnimation();
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
        console.log("PAUSING");
        if (this.lottie) {
            this.lottie.pause();
            this.playing = false;
            // body.document.getElementById("pause-btn").display = "none";
            // body.document.getElementById("play-btn").display = "none";
        }
    }

    public playAnimation() {
        console.log("RESUMING");
        if (this.lottie) {
            this.playing = true;
            this.lottie.play();
        }
    }

    private loadLottieAnimation() {
        console.log("THIS LOOP : " + this.loop);
        this.lottie = Lottie.loadAnimation({
            container: this.animationContainer,
            renderer: 'svg',
            loop: this.loop,
            autoplay: this.autoplay,
            path: this.path
        });

        this.lottie.addEventListener("DOMLoaded", ()=> {
            this.maxFrame = this.lottie.getDuration(true);
            this.playing = true;
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
