import styled from "styled-components";
import { sizes, spacing, colours } from "../../theme";

export default {
  Wrapper: styled.div``,
  Label: styled.div`
    font-size: ${sizes.default};
    font-weight: bold;
    margin-bottom: ${spacing.default};
    border-bottom: 1px solid ${colours.grey};
    color: ${colours.grey};
    padding: ${spacing.small} 0;
  `,
  FilterItem: styled.div`
    font-size: ${sizes.default};
    margin-bottom: ${spacing.default};
    cursor: pointer;

    &:hover {
      color: ${colours.lightgrey};
    }

    .active {
      font-weight: bold;
    }
  `,
};
