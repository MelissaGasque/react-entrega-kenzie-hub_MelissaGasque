import styled, {css} from "styled-components"

export  const StyleBase = css`
    font-family: "Inter";
    text-decoration: none;
    text-transform: none;
`
export const StyleBase700 = css`
	font-weight: 700;
    font-style: normal; 
`
export const styleBase_400_12 = css`
    font-weight: 400;
    font-size: 0.75rem;
`
export const styleBase_600_12 = css`
    font-weight: 600;
    font-size: 0.75rem;
`
export const StyleTitle_1 = styled.h1`
    ${StyleBase};
    ${StyleBase700};
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: var(--color-grey-0);
`
export const StyleText_1 = styled.p`
    ${StyleBase};
    ${styleBase_400_12};
    margin-top: 16px;
    color: var(--color-grey-0);
`
export const StyleText_2 = styled.p`
    ${StyleBase};
    ${styleBase_600_12}
    line-height: 1.125rem;
    color: var(--color-grey-1);
`
export const StyleText_3 = styled.p`
    ${StyleBase};
    ${styleBase_400_12};
    line-height: 1.375rem;
    color: var(--color-grey-1);
`
export const StyleTitle_2 = styled.h2`
    ${StyleBase};
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    color: var( --color-white);
`

export const StyleTextErro = styled.p`
    color: var(--color-negative);
    font-size: 0.625rem;
`
