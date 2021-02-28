import { html } from '@microsoft/fast-element';
import { SnapShot } from '../components/snapshot';

export const SnapShotTemplate = html<SnapShot>`
    <pop-over @mouseover="${(x) => x.freezeAnimation(true)}" @mouseout="${(x) => x.freezeAnimation(false)}">
        <div slot="icon">
            <svg width="14px" height="14px" viewBox="0 0 24 24">
                <path
                    clip-rule="evenodd"
                    d="M0 3.01A2.983 2.983 0 012.983.027H16.99a2.983 2.983 0 012.983 2.983v14.008a2.982 2.982 0 01-2.983
                        2.983H2.983A2.983 2.983 0 010 17.018zm2.983-.941a.941.941 0 00-.942.94v14.01c0
                        .52.422.94.942.94H16.99a.94.94 0 00.941-.94V3.008a.941.941 0 00-.94-.94H2.981z"
                    fill-rule="evenodd"
                ></path>
                <path d="M12.229 7.945l-2.07 4.598-2.586-2.605-2.414 2.758v2.146h9.656V11.93z"></path>
                <circle cx="7.444" cy="6.513" r="2.032"></circle>
                <path
                    d="M9.561 23.916h11.25a2.929 2.929 0 002.926-2.927V9.954a1.06 1.06 0 10-2.122 0v11.035a.805.805 0
                        01-.803.804H9.562a1.061 1.061 0 100 2.123z"
                    stroke="#8795a1"
                    stroke-width=".215"
                ></path>
            </svg>
        </div>
        <div slot="content" class="popover-snapshot">
            <div class="popover-snapshot">
                <h5>Frame ${(x) => x.frame}</h5>
                <a href="" @click="${(x) => x.downloadSVG()}">Download SVG</a>
            </div>
        </div>
    </pop-over>
`;
