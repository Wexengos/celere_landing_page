import styled from "styled-components";

interface HeadingProps {
    gradient?: boolean
}

const Heading = styled.h1<HeadingProps>`
    display: inline;
    font-size: 2.5rem;
    background: ${({ gradient, theme }) => gradient
        ? `linear-gradient(to right, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%)`
        : theme.colors.text
    };
    background-clip: text;
    color: transparent
`

export { Heading }