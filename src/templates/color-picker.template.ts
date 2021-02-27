import { html } from '@microsoft/fast-element';
import {ColorPicker} from "../components/color-picker";

export const ColorPickerTemplate = html<ColorPicker>`
    <pop-over>
        <div slot="icon">
            <svg width='14px' height='14px' viewBox='0 0 24 24'>
                <path d="M12 3.1L6.1 8.6a7.6 7.6 0 00-2.2 4 7.2 7.2 0 00.4 4.4 7.9 7.9 0 003 3.5 8.7 8.7 0 004.7 1.3c1.6 0
                3.2-.5 4.6-1.3s2.4-2 3-3.5a7.2 7.2 0 00.5-4.5 7.6 7.6 0 00-2.2-4L12 3.2zM12 0l7.5 7a9.8 9.8 0 013 5.1
                9.3 9.3 0 01-.6 5.8c-.9 1.8-2.2 3.3-4 4.4A11.2 11.2 0 0112 24a11.2 11.2 0
                01-6-1.7c-1.7-1-3-2.6-3.9-4.4a9.3 9.3 0 01-.6-5.8c.4-2 1.5-3.7 3-5L12 0zM6 14h12c0 1.5-.7 3-1.8 4s-2.6
                1.6-4.2 1.6S9 19 7.8 18s-1.7-2.5-1.7-4z"
                ></path>
            </svg>
        </div>
        <div slot="content">
            <div class="color-picker">
                <div class="color-selectors">
                    <div class="color-component">
                        <strong>Red</strong>
                        <input type="range" min="0" max="255" :value="${x => x.red}" @input="${(x, c) => x.handleRedInput(c.event)}"/>
                        <input class="text-input" min="0" max="255" type="number" :value="${x => x.red}" @input="${(x, c) => x.handleRedInput(c.event)}"/>
                    </div>
                    <div class="color-component">
                        <strong>Green</strong>
                        <input type="range" min="0" max="255" :value="${x => x.green}" @input="${(x, c) => x.handleGreenInput(c.event)}"/>
                        <input class="text-input" min="0" max="255" type="number" :value="${x => x.green}" @input="${(x, c) => x.handleGreenInput(c.event)}"/>
                    </div>
                    <div class="color-component">
                        <strong>Blue</strong>
                        <input type="range" min="0" max="255" :value="${x => x.blue}" @input="${(x, c) => x.handleBlueInput(c.event)}"/>
                        <input class="text-input" min="0" max="255" type="number" :value="${x => x.blue}" @input="${(x, c) => x.handleBlueInput(c.event)}"/>
                    </div>
                </div>
                <div class="color-preview">
                    <div>
                        <input
                                class="text-input"
                                type="text"
                                :value="${x => x.color}"
                                @input="${(x, c) => x.hexToRgb(c.event)}" />
                    </div>
                    <div class="preview" style="background: ${x => x.color}" />
                </div>
            </div>
    </pop-over>
`