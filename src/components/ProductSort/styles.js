import styled from 'styled-components';
import remCalc from '../../helpers/remCalc';

const SC = {
    Wrapper: styled.div`
      select{
        height: ${remCalc(25)};
        float: right;
        width: 75%;
      }
    `,
};

export default SC;