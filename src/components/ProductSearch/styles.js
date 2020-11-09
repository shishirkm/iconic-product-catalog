import styled from 'styled-components';
import remCalc from '../../helpers/remCalc';
import { sizes, spacing } from '../../theme';

const SC = {
    Wrapper: styled.div`
      text-align: right;  
      input{
          width: 100%;
          height: ${remCalc(25)};
          padding: 0 ${spacing.small};
          font-size: ${sizes.regular};
      }
    `,
};

export default SC;