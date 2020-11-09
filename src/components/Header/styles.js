import styled from 'styled-components';
import { colours, spacing } from '../../theme';

export default {
    Wrapper: styled.div`
      background: ${colours.black};
      padding: ${spacing.medium};
      text-align: center;

      .header-text{
        color: ${colours.white};
        font-weight: bold; 
      }
    `
};