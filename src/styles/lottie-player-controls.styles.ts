import { css } from "@microsoft/fast-element";

export const LottiePlayerControlsStyles = css`
  .lottie-player-controls {
    align-items: center;
    display: flex;
    justify-content: space-between;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana,
    sans-serif !important;
    background-color: #ffffff;
  }

  .lottie-player {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    transition: box-shadow 0.6s;
    /* overflow: hidden; */
  }

  .lottie-player.is-zoomed {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0px 0px 56px -14px rgba(0, 0, 0, 0.6);
    margin: 100px 100px 0 100px;
    border-radius: 6px;
    z-index: 100;
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
    background: #ccc;
  }
  .progress::-webkit-slider-runnable-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    background: #ccc;
    border-color: transparent;
    color: transparent;
  }
.progress::-webkit-slider-thumb {
    -webkit-appearance: none !important;
    height: 13px;
    width: 13px;
    border: 0;
    border-radius: 50%;
    background: #0fccce;
    cursor: pointer;
    margin: -5px;
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
    margin: 0; /* Reset margin in Edge since it supports -webkit-slider-thumb as well */
  }
  .progress:focus::-ms-fill-lower {
    background: #ccc;
  }
  .progress:focus::-ms-fill-upper {
    background: #ccc;
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
`