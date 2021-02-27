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
                    class="progress"
                    type="range"
                    min="0"
                    step="1"
                    max="${x => x.maxFrame}"
                    :value="${x => x.currentFrame}"
                    @input="${(x, c) => x.handleScrubbing(c.event)}"
                    @mouseup="${x => x.playAnimation()}}"
            />
            <div class="frame-number" id='frame-number'>
              ${x => x.currentFrame}
            </div>
            <div class="btn" @click='${x => x.toggleLooping()}'>
                <svg width='14px' height='14px' viewBox='0 0 24 24'>
                    <path d="M12.5 16.8137h-.13v1.8939h4.9696c3.6455 0 6.6113-2.9658 6.6113-6.6116
                            0-3.64549-2.9658-6.61131-6.6113-6.61131-.5231 0-.947.42391-.947.94696 0 .52304.4239.94696.947.94696 2.6011 0
                            4.7174 2.11634 4.7174 4.71739 0 2.6014-2.1166 4.7177-4.7174 4.7177H12.5zM13.6025
                            5.61469v-.13H7.48137C3.83582 5.48469.87 8.45051.87 12.096c0 3.6509 3.17269 6.6117 6.81304 6.6117.52304 0
                            .94696-.424.94696-.947 0-.5231-.42392-.947-.94696-.947-2.60804 0-4.91907-2.1231-4.91907-4.7176 0-2.60115
                            2.11634-4.71744 4.7174-4.71744h6.12113V5.61469z"
                            stroke="#8795A1"
                            stroke-width=".26"
                    ></path>
                    <path d="M11.1482
                            2.20355h0l-.001-.00116c-.3412-.40061-.9405-.44558-1.33668-.0996h-.00001c-.39526.34519-.43936.94795-.09898
                            1.34767l2.51487 3.03683-2.51894 3.06468c-.33872.40088-.29282 1.00363.10347
                            1.34723l.08517-.0982-.08517.0982c.17853.1549.39807.2308.61647.2308.2671 0 .5328-.114.72-.3347h0l.0011-.0014
                            3.0435-3.68655.0006-.00068c.3035-.35872.3025-.88754-.0019-1.24526l-3.0425-3.65786zM13.9453
                            21.7965h0l.001.0011c.3413.4006.9407.4456 1.337.0996h0c.3953-.3452.4395-.9479.099-1.3477l-2.5154-3.0368
                            2.5195-3.0647c.3388-.4008.2929-1.0036-.1035-1.3472l-.0852.0982.0852-.0982c-.1786-.1549-.3981-.2308-.6166-.2308-.2671
                            0-.5329.114-.7202.3347h0l-.0011.0014-3.0442
                            3.6865c-.0001.0003-.0003.0005-.0005.0007-.3036.3587-.3027.8876.0019 1.2453l3.0431 3.6579z"
                            fill="#8795A1"
                            stroke="#8795A1"
                            stroke-width=".26"
                    ></path>
                </svg>
            </div>
            <color-picker :color="${ x => x.background }" id="color-picker"></color-picker>
            <snap-shot :frame="${ x => x.currentFrame }" id="snap-shot"></snap-shot>
        </div>
`;