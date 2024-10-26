import styled from "styled-components";

export const CardContainer = styled.div`
    width: 17rem;
    height: 28.02rem;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    padding: 1rem 0;

    border-radius: 2rem; /* round corners */
    background: radial-gradient(circle, #235983 0%, #003250 100%);
    box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1); /* optional: adds shadow for depth */
`

export const CardImageContainer = styled.div`
    width: 9rem;
    height: 9rem;
    border: ${({ theme }) => `1rem solid ${theme.colors.border}`};
    border-radius: 50%;
    overflow: hidden;
`

export const CardImage = styled.img`
    width: 100%;
    height: 100%;
`

export const HorizontalLine = styled.div`
    height: 0.048rem;
    opacity: 0.5;
    width: 9.625rem;
    background-color: ${({ theme }) => theme.colors.line};
`