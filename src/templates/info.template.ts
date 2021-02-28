import { html } from '@microsoft/fast-element';
import { AnimationInfo } from "../components/AnimationInfo";

export const InfoTemplate = html<AnimationInfo>`
    <pop-over>
        <div slot="icon">
            <svg width='14px' height='14px' viewBox='0 0 24 24'>
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.15 0h17.7A3.12 3.12 0 0124 3.1v17.8c0 1.71-1.4 3.1-3.15 3.1H3.15A3.12 3.12 0 010 20.9V3.1C0 1.39
                    1.4 0 3.15 0zm0 2.05c-.6 0-1.07.47-1.07 1.05v17.8c0 .58.48 1.05 1.07 1.05h17.7c.6 0 1.07-.47
                    1.07-1.05V3.1c0-.58-.48-1.05-1.07-1.05H3.15z"
                ></path>
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 10c.55 0 1 .42 1 .94v6.12c0 .52-.45.94-1 .94s-1-.42-1-.94v-6.12c0-.52.45-.94 1-.94zM12 6a1 1 0
                    011 1v.42a1 1 0 11-2 0V7a1 1 0 011-1z"
                ></path>
            </svg>
        </div>
        <div slot="content">
            <div class="info-template">
                <h4>Info</h4>

                <div class="property" style="display: ${x => !x.version ? 'none' : ''}">
                    <span class="label">Lottie Version</span>
                    <span class="value">${ x => x.version }</span>
                </div>

                <div class="property" style="display: ${x => !x.numFrames ? 'none' : ''}">
                    <span class="label">Frames</span>
                    <span class="value">${ x => x.numFrames }</span>
                </div>

                <div class="property" style="display: ${x => !x.frameRate ? 'none' : ''}">
                    <span class="label">Frame Rate</span>
                    <span class="value">${ x => x.frameRate }</span>
                </div>

                <div class="property" style="display: ${x => !x.numLayers ? 'none' : ''}">
                    <span class="label">Layers</span>
                    <span class="value">${ x => x.numLayers }</span>
                </div>

                <div class="property" style="display: ${x => !x.numAssets ? 'none' : ''}">
                    <span class="label">Assets</span>
                    <span class="value">${ x => x.numAssets }</span>
                </div>

                <div class="property" style="display: ${x => !x.numFonts ? 'none' : ''}">
                    <span class="label">Fonts</span>
                    <span class="value">${ x => x.numFonts }</span>
                </div>

                <hr style="display: ${x => !x.hasMeta ? 'none' : ''}"/>

                <div class="property" style="display: ${x => !x.generator ? 'none' : ''}">
                    <span class="label">Generator</span>
                    <span class="value">${ x => x.generator }</span>
                </div>

                <div class="property" style="display: ${x => !x.author ? 'none' : ''}">
                    <span class="label">Author</span>
                    <span class="value">${ x => x.author }</span>
                </div>

                <div class="property" style="display: ${x => !x.keywords ? 'none' : ''}">
                    <span class="label">Keywords</span>
                    <span class="value">${ x => x.keywords }</span>
                </div>

                <div class="property" style="display: ${x => !x.themeColor ? 'none' : ''}">
                    <span class="label">Theme Color</span>
                    <span class="value">${ x => x.themeColor }</span>
                </div>
            </div>
        </div>
    </pop-over>
`