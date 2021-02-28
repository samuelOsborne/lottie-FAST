/* eslint-disable no-unused-expressions */
import { fixture, expect } from '@open-wc/testing';

import '../dist/lottie-player.js';

describe('snapshot', () => {
    it('has by default a frame set to 0 as number', async () => {
        const el = /** @type {Snapshot} */ (await fixture('<snap-shot></snap-shot>'));
        expect(el.frame).to.equal(0);
    });
});