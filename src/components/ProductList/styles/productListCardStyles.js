import styled from 'styled-components';
import { colours, sizes, spacing } from '../../../theme';

export default {
    Card: styled.div`
        padding: 2%;
        flex-grow: 1;
        flex-basis: 25%;
        text-align: left;
        font-size: ${sizes.small};
    `,
    Image: styled.img`
        width: 100%;
        height: auto;
        margin-bottom: ${spacing.xsmall};
    `,
    Brand: styled.div`
        font-weight: bold;
        margin-bottom: ${spacing.xsmall};
    `,
    Name: styled.div`
        margin-bottom: ${spacing.xsmall};
        color: ${colours.grey};
    `,
    Price: styled.div`
        margin-bottom: ${spacing.xsmall};
        color: ${colours.grey};
    `,
    Messaging: styled.div`
        color: ${colours.blue};
        font-size: ${sizes.xsmall};
    `
};