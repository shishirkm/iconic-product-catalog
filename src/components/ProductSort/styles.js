import styled from 'styled-components';
import remCalc from '../../helpers/remCalc';
import { colours } from '../../theme';

const SC = {
    Wrapper: styled.div`
      select{
        height: ${remCalc(25)};
        float: right;
        width: 75%;
        color: ${colours.grey};
      }
    `,
};

export default SC;