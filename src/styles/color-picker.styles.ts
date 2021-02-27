import { css } from "@microsoft/fast-element";

export const ColorPickerStyles = css`
  .text-input {
    border: 1px #ccc solid;
    border-radius: 5px;
    padding: 3px;
    width: 60px;
    margin: 0;
  }

  .color-picker {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 90px;
  }

  .color-selectors {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .color-component {
    display: flex;
    flex-direction: row;
    font-size: 12px;
    align-items: center;
    justify-content: center;
  }

  .color-component strong {
    width: 40px;
  }

  .color-component input[type="range"] {
    margin: 0 0 0 10px;
  }

  .color-component input[type="number"] {
    width: 50px;
    margin: 0 0 0 10px;
  }

  .color-preview {
    font-size: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .preview {
    height: 60px;
    width: 60px;
  }
`