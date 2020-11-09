import styled from 'styled-components';
// import { colours, spacing } from '../../theme';

export default {
    Wrapper: styled.div`
      
    `,
    Row: styled.div`
        display: flex;
        flex-wrap: wrap;
    `,
    Filter: styled.div`
        padding: 2%;
        flex: 1;
        text-align: left;
    `,
    ProductList: styled.div`
        padding: 2%;
        flex: 3;
        text-align: left;
    `,
    SortSearchWrapper: styled.div`
        display: flex;

        div{
            flex-grow: 1;
            flex-basis: 45%;
            padding: 2%;
        }
    `
};