/* eslint-disable no-unused-expressions */
import { fixture, expect } from '@open-wc/testing';

import '../dist/lottie-player.js';

describe('lottie-player', () => {
    it('has by default a path attribute set to null', async () => {
        const el = /** @type {LottiePlayer} */ (await fixture('<lottie-player></lottie-player>'));
        expect(el.path).to.equal(null);
    });

    it('has by default a loop attribute set to false', async () => {
        const el = /** @type {LottiePlayer} */ (await fixture('<lottie-player></lottie-player>'));
        expect(el.loop).to.equal(false);
    });

    it('has by default a controls attribute set to false', async () => {
        const el = /** @type {LottiePlayer} */ (await fixture('<lottie-player></lottie-player>'));
        expect(el.controls).to.equal(false);
    });

    it('has by default a autoplay attribute set to false', async () => {
        const el = /** @type {LottiePlayer} */ (await fixture('<lottie-player></lottie-player>'));
        expect(el.autoplay).to.equal(false);
    });

    it('has by default a background attribute set to null', async () => {
        const el = /** @type {LottiePlayer} */ (await fixture('<lottie-player></lottie-player>'));
        expect(el.background).to.equal(null);
    });
});