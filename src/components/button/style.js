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
        font-family: "Inter", sans-serif;

        &:hover {
          background-color: var(--color-color-primary-50);
        }
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
        font-family: "Inter", sans-serif;

        &:hover {
          background-color: var(--color-negative);
        }
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
        font-family: "Inter", sans-serif;

        &:hover {
          background-color: var(--color-grey-2);
        }
      `
    } else if (button === "x") {
      return css`
        font-weight: 600;
        font-size: 1rem;
        background-color:var(--color-grey-2);
        color: var(--color-grey-1);
        border: none;
        font-family: "Inter", sans-serif;
      `
    } else if (button === "+") {
      return css`
        width: 2.0306rem;
        height: 2rem;
        border-radius: 0.25rem;
        border: 1px solid var(--color-grey-3);
        background-color:var(--color-grey-3);
        font-family: "Inter", sans-serif;

        &:hover {
          background-color: var(--color-grey-2);
        }
      `
    } else if (button === "salvar") {
      return css`
        width: 62%;
        height: 3rem;
        border-radius: 0.25rem;
        border: 0.0762rem solid var(--color-color-primary-disable);
        background-color:var(--color-color-primary-disable);
        font-size: 16px;;
        font-weight: 500;
        color: var(--color-white);
        font-family: "Inter", sans-serif;

        &:hover {
          background-color: var(--color-negative);
        }
      `
    } else if (button === "excluir") {
      return css`
        width: 30%;
        height: 3rem;
        border-radius: 0.25rem;
        border: 0.0762rem solid var(--color-grey-1);
        background-color:var(--color-grey-1);
        font-size: 16px;;
        font-weight: 500;
        color: var(--color-white);
        font-family: "Inter", sans-serif;

        &:hover{
          background-color: var(--color-grey-2);
          border: 0.0762rem solid var(--color-grey-2);
        }
      `
    } 
  }}
`

