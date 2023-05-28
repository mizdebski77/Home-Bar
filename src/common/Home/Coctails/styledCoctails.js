import styled from "styled-components";

export const Wrapper = styled.section`
    border: 2px solid ${({ theme }) => theme.color.thirdColor};
    min-height: 95vh;
`;

export const Title = styled.h1`
    text-align: center;
    font-weight: normal;
    font-size: 48px;
`;