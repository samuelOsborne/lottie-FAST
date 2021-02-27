import {css} from "@microsoft/fast-element";

export const PopoverStyles = css`
.popover {
  position: relative;
}

  .popover-content {
    display: inline-block;
    position: absolute;
    opacity: 1;
    visibility: visible;
    transform: translate(0, 10px);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
    transition: all 0.3s cubic-bezier(0.75, -0.02, 0.2, 0.97);
  }

  .popover-content.hidden {
    opacity: 0 !important;
    visibility: hidden !important;
    transform: translate(0, 0px);
  }

  .arrow {
    position: absolute;
    z-index: -1;
    content: "";
    bottom: -9px;
    border-style: solid;
    border-width: 10px 10px 0px 10px;
  }

  .left-align,
  .left-align .arrow {
    left: 0;
    right: unset;
  }

  .right-align,
  .right-align .arrow {
    right: 0;
    left: unset;
  }
`