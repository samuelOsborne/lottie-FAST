import { css } from "@microsoft/fast-element";

export const LottiePlayerControlStyles = css`
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
`