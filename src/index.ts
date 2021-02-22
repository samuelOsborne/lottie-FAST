import { html, css, customElement, attr, observable, FASTElement } from '@microsoft/fast-element';
import Lottie, { AnimationItem } from 'Lottie-web';

const ICON_SIZE = { width: 14, height: 14, viewBox: '0 0 24 24' };
const styling = `
  :host {
    justify-content: center;
    align-items: center;
    display: inline-block;
  }
  div {
    width: 100%;
    height: 100%;
    margin: auto;
  }
`;

const styles = css`
  .lottie-player-controls {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 4px 8px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana,
    sans-serif !important;
  }

  .lottie-player-controls > div {
    margin-left: 4px;
  }
  .spacer {
    flex-grow: 1;
    width: 14px;
  }
  .btn {
    cursor: pointer;
    fill: #999;
    width: 14px;
  }
  .btn:hover {
    fill: #222;
  }
  .btn.active {
    fill: #555;
  }
  .progress {
    -webkit-appearance: none;
    -moz-apperance: none;
    width: 100%;
    margin: 0 10px;
    height: 4px;
    border-radius: 3px;
    cursor: pointer;
  }
  .progress:focus {
    outline: none;
    border: none;
  }
  .progress::-moz-range-track {
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
  }
  .progress::-webkit-slider-thumb {
    -webkit-appearance: none !important;
    height: 13px;
    width: 13px;
    border: 0;
    border-radius: 50%;
    background: #0fccce;
    cursor: pointer;
  }
  .progress::-moz-range-thumb {
    -moz-appearance: none !important;
    height: 13px;
    width: 13px;
    border: 0;
    border-radius: 50%;
    background: #0fccce;
    cursor: pointer;
  }
  .progress::-ms-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  .progress::-ms-fill-lower {
    background: #ccc;
    border-radius: 3px;
  }
  .progress::-ms-fill-upper {
    background: #ccc;
    border-radius: 3px;
  }
  .progress::-ms-thumb {
    border: 0;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: #0fccce;
    cursor: pointer;
  }
  .progress:focus::-ms-fill-lower {
    background: #ccc;
  }
  .progress:focus::-ms-fill-upper {
    background: #ccc;
  }
  .popover {
    padding: 10px;
    background: #fff;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana,
    sans-serif;
    font-size: 0.75rem;
    border-radius: 5px;
  }

  .popover-snapshot {
    width: 150px;
  }
  .popover-snapshot h5 {
    margin: 5px 0 10px 0;
    font-size: 0.75rem;
  }
  .popover-snapshot a {
    display: block;
    text-decoration: none;
  }
  .popover-snapshot a:before {
    content: '⥼';
    margin-right: 5px;
  }
  .popover-snapshot .note {
    display: block;
    margin-top: 10px;
    color: #999;
  }

  .popover-info {
    width: 250px;
  }

  .frame-number {
    outline: none;
    border: 1px #ccc solid;
    border-radius: 3px;
    width: 40px;
    text-align: center;
    color: #999;
    font-size: 0.7rem;
    padding: 0;
    font-family: inherit;
  }

  .popover-background {
    width: 350px;
  }
`;


const template = html<LottieFast>`
  <div class="lottie-player-controls">
      <div class='btn'>
          <svg width='14px' height='14px' viewBox='0 0 24 24'>
              <path d="M22 4.5a1.4 1.4 0 00-2.1-1.2l-13 7.5a1.4 1.4 0 000 2.4l13 7.5a1.4 1.4 0 002.1-1.2z"></path>
              <rect height="17.1" rx="1.4" transform="matrix(-1 0 0 1 7.7 3.4)" width="5.7"></rect>
          </svg>
      </div>
      <div class='btn' @click='${x => x.pauseAnimation()}' id='pause-btn'>
          <svg width='14px' height='14px' viewBox='0 0 24 24'>
              <rect height="22.9" rx="1.9" width="7.6" x="14" y=".5"></rect>
              <rect height="22.9" rx="1.9" width="7.6" x="2" y=".5"></rect>
          </svg>
      </div>
      <div class='btn' @click='${x => x.playAnimation()}' id='play-btn'>
          <svg width='14px' height='14px' viewBox='0 0 24 24'>
              <path d="M2 3.4C2 1.9 3.5 1 4.8 1.8l16.5 9.6c1.2.7 1.2 2.5 0 3.2L4.8 24.2C3.5 25 2 24.1 2 22.6V3.4z"></path>
          </svg>
      </div>
      <div class='btn'>
          <svg width='14px' height='14px' viewBox='0 0 24 24'>
              <path
                  d="M2 3.667A1.67 1.67 0 0 1 3.667 2h16.666A1.67 1.67 0 0 1 22 3.667v16.666A1.67 1.67 0 0 1 20.333
            22H3.667A1.67 1.67 0 0 1 2 20.333z"
              ></path>
          </svg>
      </div>
      <div class='btn'>
          <svg width='14px' height='14px' viewBox='0 0 24 24'>
              <path
                  d="M2 19.513a1.429 1.429 0 0 0 2.148 1.234l12.88-7.513a1.429 1.429 0 0 0 0-2.468L4.147 3.253A1.429 1.429 0 0
            0 2 4.487z"
              ></path>
              <rect height="17.143" rx="1.429" transform="matrix(1 0 0 -1 16.286 20.571)" width="5.714"></rect>
          </svg>
      </div>
      <input
          class=" progress"
          type="range"
          min="0"
          step="1"
          max="100"
          @value=""
          @input=""
          @mousedown="${x => x.pauseAnimation()}"
          @mouseup="${x => x.playAnimation()}}"
      />
      <div class="frame-number" id='frame-number'>
          ${x => x.currentFrame}
      </div>
  </div>
`;

@customElement({
    name: 'lottie-fast',
    template,
    styles
})
export class LottieFast extends FASTElement {
    @attr path: string = '';
    @attr({ mode: 'boolean' }) loop: boolean = false;

    @observable public currentFrame: number = 0;

    public animationContainer: HTMLElement;
    private lottie: AnimationItem;
    public playing = false;


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

    public pauseAnimation() {
        console.log("PAUSING");
        if (this.lottie) {
            this.lottie.pause();
            // body.document.getElementById("pause-btn").display = "none";
            // body.document.getElementById("play-btn").display = "none";
        }
    }

    public playAnimation() {
        console.log("RESUMING");
        if (this.lottie)
            this.lottie.play();
    }

    private loadLottieAnimation() {
        console.log("THIS LOOP : " + this.loop);
        this.lottie = Lottie.loadAnimation({
            container: this.animationContainer,
            renderer: 'svg',
            loop: this.loop,
            autoplay: true,
            path: this.path
        });


        this.lottie.addEventListener("DOMLoaded", ()=> {
            console.log("DONE LOADING");
            console.log("MAX FRAME : " + this.lottie.getDuration(true));
            //this.currentFrame = this.lottie.currentFrame;
            //this..innerHTML += this.lottie.getDuration(true);

            //this.playBar.innerHTML += this.lottie.getDuration(true);
            //this.playBar.innerHTML += "<br>";
            //this.playBar.innerHTML += this.lottie.currentFrame;
        });

        this.lottie.addEventListener("enterFrame", function (animation: any) {
            this.currentFrame = Math.round(animation.currentTime);
        }.bind(this));
    }
}
