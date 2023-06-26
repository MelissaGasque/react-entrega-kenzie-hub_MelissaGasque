import styled from "styled-components"

export const Container = styled.div`
   margin: 5% auto;
   width: 25rem;
`

export const HeaderLogin = styled.header`
    display: flex;
    justify-content: center;
    width: 23.125rem;
    height: 3.75rem;
  
    img{
        width: 9.0038rem;
        height: 1.2481rem;
    }

`
export const FormLogin = styled.form`
   display: flex;
   flex-direction:column;
   padding: 2.625rem 1.375rem;
    width: 23.125rem;
    height: 25rem;
    background-color: var(--color-grey-3);

    h1{
        text-align: center;
        margin-bottom: 8px;
    }

    @media (max-width: 411px) {
        margin-left: 1rem;
        width: 20rem;
    }

`
export const DivLogin = styled.div`
   height: 4.625rem;
   display: flex;
   align-items: center;
   justify-content: center;
`
