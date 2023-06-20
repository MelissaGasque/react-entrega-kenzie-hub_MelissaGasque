import styled, {css} from "styled-components"
import { Link } from "react-router-dom"

export const StyledLink = styled(Link)`

    ${({link}) => {
      if(link === "voltar"){
        return css`
          text-decoration: none;
          font-weight: 600;
          font-size: 12px;
          width: 67.49px;
          height: 40.11px;
          background-color: var(--color-grey-3);
          color: var(--color-grey-0);
          border-radius: 4px;
          border: var(--color-grey-3) 1.22px solid;
          display: flex;
          justify-content: center;
          align-items: center;
        `
      }else if(link === "cadastrese"){
        return css`
          text-decoration: none;
          font-weight: 500;
          font-size: 16px;
          height: 48px;
          background-color:var(--color-grey-1);
          color: var(--color-grey-0);
          border-radius: 4.06px;
          border: var(--color-grey-1) 1.22px solid;
          display: flex;
          justify-content: center;
          align-items: center;
      `
      }

    }}
`