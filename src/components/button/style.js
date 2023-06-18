import styled, { css } from "styled-components";

export const StyledButton = styled.button`

  ${({ button }) => {
    if (button === "entrar") {
      return css`
        font-weight: 500;
        font-size: 12.83px;
        width: 100%;
        height: 38.5px;
        padding: 0px 22px;
        background-color:var(--color-color-primary);
        color: var(--color-white);
        border-radius: 4.06px;
        border: var(--color-color-primary) 1.22px solid;
        margin-top: 19px;
      `
    } else if (button === "cadastrese") {
      return css`
        font-weight: 500;
        font-size: 12.83px;
        width: 100%;
        height: 38.5px;
        padding: 0px 22px;
        background-color:var(--color-grey-1);
        color: var(--color-grey-0);
        border-radius: 4.06px;
        border: var(--color-color-primary) 1.22px solid;
      `
    } else if (button === "voltar") {
      return css`
        font-weight: 600;
        font-size: 9.59px;
        width: 79.54px;
        height: 31.95px;
        padding: 0px 16px;
        background-color:var(--color-grey-3);
        color: var(--color-grey-0);
        border-radius: 4px;
        border: var(--color-grey-3) 1.22px solid;
      `
    } 
    else if (button === "cadastrar") {
      return css`
        font-weight: 500;
        font-size: 12.79px;
        width: 100%;
        height: 48px;
        padding: 0px 22px;
        background-color:var(--color-color-primary-disable);
        color: var(--color-white);
        border-radius: 4px;
        border: var(--color-color-primary-disable) 1.22px solid;
        margin-top: 1rem;
      `
    }else if (button === "sair") {
      return css`
        font-weight: 600;
        font-size: 12px;
        width: 55.49px;
        height: 32px;
        padding: 0px 16px;
        background-color:var(--color-grey-3);
        color: var(--color-grey-0);
        border-radius: 4px;
        border: var(--color-grey-3) 1.22px solid;
      `
    } 
  }}
`

