import styled, { css } from "styled-components";

export const StyledButton = styled.button`

  ${({ button }) => {
    if (button === "entrar") {
      return css`
        font-weight: 500;
        font-size: 1rem;
        width: 100%;
        height: 3rem;
        padding: 0rem 1.375rem;
        background-color:var(--color-color-primary);
        color: var(--color-white);
        border-radius: 0.2537rem;
        border: var(--color-color-primary) 0.0762rem solid;
        margin-top: 1.1875rem;
      `
    }else if (button === "cadastrar") {
      return css`
        font-weight: 500;
        font-size: 0.7994rem;
        width: 100%;
        height: 3rem;
        padding: 0rem 1.375rem;
        background-color:var(--color-color-primary-disable);
        color: var(--color-white);
        border-radius: 0.25rem;
        border: var(--color-color-primary-disable) 0.0762rem solid;
        margin-top: 32px;
      `
    }else if (button === "sair") {
      return css`
        font-weight: 600;
        font-size: 0.75rem;
        width: 3.4681rem;
        height: 2rem;
        padding: 0rem 1rem;
        background-color:var(--color-grey-3);
        color: var(--color-grey-0);
        border-radius: 0.25rem;
        border: var(--color-grey-3) 0.0762rem solid;
      `
    } else if (button === "x") {
      return css`
        font-weight: 600;
        font-size: 1rem;
        background-color:var(--color-grey-2);
        color: var(--color-grey-1);
        border: none;
      `
    } else if (button === "+") {
      return css`
        width: 2.0306rem;
        height: 2rem;
        border-radius: 0.25rem;
        border: 1px solid var(--color-grey-3);
        background-color:var(--color-grey-3);
      `
    } 
  }}
`

