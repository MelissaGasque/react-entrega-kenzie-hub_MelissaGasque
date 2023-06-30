import styled from "styled-components"

export const StyleSelect = styled.select`
    width: 100%;
    height: 3rem;
    padding: 0rem 0.8125rem;
    background-color: var(--color-grey-2);
    color: var(--color-grey-1);
    border-radius: 0.2rem;
    border: solid 0.0606rem var(--color-grey-2);

    font-weight: 400;
    font-size: 1rem;
    font-family: "Inter", sans-serif;
    margin-top: 8px;

    &:hover {
        color: var(--color-grey-0);
        border: 0.0762rem solid var(--color-grey-0);
    }
`