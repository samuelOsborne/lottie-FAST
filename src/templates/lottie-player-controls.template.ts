import { html } from '@microsoft/fast-element';

export const LottiePlayerControlTemplate = html`
        <div class="lottie-player-controls" id="player-controls" style="display: ${x => !x.controls ? 'none' : ''}">
            <div class='btn' @click='${x => x.previousFrame()}' id="prev-frame-btn">
              <svg width='14px' height='14px' viewBox='0 0 24 24'>
                  <path d="M22 4.5a1.4 1.4 0 00-2.1-1.2l-13 7.5a1.4 1.4 0 000 2.4l13 7.5a1.4 1.4 0 002.1-1.2z"></path>
                  <rect height="17.1" rx="1.4" transform="matrix(-1 0 0 1 7.7 3.4)" width="5.7"></rect>
              </svg>
            </div>
            <div class='btn' @click='${x => x.pauseAnimation()}' id='pause-btn' style="display: ${x => !x.playing ? 'none' : ''}">
              <svg width='14px' height='14px' viewBox='0 0 24 24'>
                  <rect height="22.9" rx="1.9" width="7.6" x="14" y=".5"></rect>
                  <rect height="22.9" rx="1.9" width="7.6" x="2" y=".5"></rect>
              </svg>
            </div>
            <div class='btn' @click='${x => x.playAnimation()}' id='play-btn' style="display: ${x => x.playing ? 'none' : ''}">
              <svg width='14px' height='14px' viewBox='0 0 24 24'>
                  <path d="M2 3.4C2 1.9 3.5 1 4.8 1.8l16.5 9.6c1.2.7 1.2 2.5 0 3.2L4.8 24.2C3.5 25 2 24.1 2 22.6V3.4z"></path>
              </svg>
            </div>
            <div class='btn' @click='${x => x.restartAnimation()}' id="restart-btn">
              <svg width='14px' height='14px' viewBox='0 0 24 24'>
                  <path
                      d="M2 3.667A1.67 1.67 0 0 1 3.667 2h16.666A1.67 1.67 0 0 1 22 3.667v16.666A1.67 1.67 0 0 1 20.333
                22H3.667A1.67 1.67 0 0 1 2 20.333z"
                  ></path>
              </svg>
            </div>
            <div class='btn' @click='${x => x.nextFrame()}' id="next-frame-btn">
              <svg width='14px' height='14px' viewBox='0 0 24 24'>
                  <path
                      d="M2 19.513a1.429 1.429 0 0 0 2.148 1.234l12.88-7.513a1.429 1.429 0 0 0 0-2.468L4.147 3.253A1.429 1.429 0 0
                0 2 4.487z"
                  ></path>
                  <rect height="17.143" rx="1.429" transform="matrix(1 0 0 -1 16.286 20.571)" width="5.714"></rect>
              </svg>
            </div>
            <input
                    id="slider"
                    class=" progress"
                    type="range"
                    min="0"
                    step="1"
                    max="${x => x.maxFrame}"
                    value="${x => x.currentFrame}"
                    @input="${(x, c) => x.handleScrubbing(c.event)}"
                    @mouseup="${x => x.playAnimation()}}"
            />
            <div class="frame-number" id='frame-number'>
              ${x => x.currentFrame}
            </div>
        </div>
`;