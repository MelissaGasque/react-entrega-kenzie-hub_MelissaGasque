import styled from "styled-components"

export const HeaderRegister = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 25.625rem;
    height: 7.5rem;
    margin: 0rem auto;
    img{
        width: 7.6288rem;
        height: 1.3256rem;
    }
    @media (max-width: 411px) {
        margin-left: 1rem;
        width: 22rem;
    }

`

export const FormRegister = styled.form`
   display: flex;
   flex-direction:column;
   justify-content: space-around;
    width: 23.125rem;
    height: auto;
    padding: 2.625rem 1.375rem;
    background-color: var(--color-grey-3);
    margin: 0rem auto;
    @media (max-width: 411px) {
        margin-left: 1rem;
        width: 19rem;
    }
`
export const FormDivRegister = styled.div`
   display: flex;
   flex-direction:column;
   align-items: center;
   justify-content: space-evenly;
   height: 5rem;

`
