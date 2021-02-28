import {css} from "@microsoft/fast-element";

export const PopoverStyles = css`
  .popover {
    padding: 10px;
    position: relative;
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

  .popover-background {
    width: 350px;
  }

  .popover-content {
    display: inline-block;
    position: absolute;
    opacity: 1;
    bottom: 30px;
    right: 5px;
    visibility: visible;
    transform: translate(0, -10px);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
    transition: all 0.3s cubic-bezier(0.75, -0.02, 0.2, 0.97);
    background-color: #ffffff;
    padding: 10px;
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
    border-color: black;
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