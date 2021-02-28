import { css } from "@microsoft/fast-element";

export const AnimationInfoStyles = css`
    h4 {
      font-size: 0.85rem;
      padding: 5px;
      margin: 0;
    }
    .property {
      display: flex;
      flex-direction: row;
      font-size: 0.75rem;
      align-items: center;
      justify-content: space-between;
      padding: 3px 5px;
    }
    
    .label {
      display: block;
      color: #999;
    }
    
    .value {
      display: block;
      color: #666;
    }
  
    .info-template {
    width: 150px;
    }
`