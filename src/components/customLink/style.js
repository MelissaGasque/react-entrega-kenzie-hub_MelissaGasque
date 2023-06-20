import styled, {css} from "styled-components"
import { Link } from "react-router-dom"

export const StyledLink = styled(Link)`

    ${({link}) => {
      if(link === "voltar"){
        return css`
          text-decoration: none;
          font-weight: 600;
          font-size: 0.75rem;
          width: 4.2181rem;
          height: 2.5069rem;
          background-color: var(--color-grey-3);
          color: var(--color-grey-0);
          border-radius: 0.25rem;
          border: var(--color-grey-3) 0.0762rem solid;
          display: flex;
          justify-content: center;
          align-items: center;
        `
      }else if(link === "cadastrese"){
        return css`
          text-decoration: none;
          font-weight: 500;
          font-size: 1rem;
          height: 3rem;
          background-color:var(--color-grey-1);
          color: var(--color-grey-0);
          border-radius: 0.2537rem;
          border: var(--color-grey-1) 0.0762rem solid;
          display: flex;
          justify-content: center;
          align-items: center;
      `
      }

    }}
`