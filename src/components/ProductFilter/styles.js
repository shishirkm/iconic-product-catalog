import styled from "styled-components";
import { sizes, spacing, colours } from "../../theme";

export default {
  Wrapper: styled.div``,
  Label: styled.div`
    font-size: ${sizes.large};
    font-weight: bold;
    margin-bottom: ${spacing.medium};
    border-bottom: 1px solid ${colours.grey};
    color: ${colours.grey};
    padding: ${spacing.small} 0;
  `,
  FilterItem: styled.div`
    font-size: ${sizes.large};
    margin-bottom: ${spacing.medium};

    .active {
      font-weight: bold;
    }
  `,
};
