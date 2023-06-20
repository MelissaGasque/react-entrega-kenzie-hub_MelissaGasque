import styled from "styled-components"

export const Container = styled.div`
   margin: 5% auto;
   width: 400px;
`

export const HeaderLogin = styled.header`
    display: flex;
    justify-content: center;
    width: 370px;
    height: 60px;
  
    img{
        width: 144.06px;
        height: 19.97px;
    }

`
export const FormLogin = styled.form`
   display: flex;
   flex-direction:column;
   padding: 42px 22px;
    width: 370px;
    height: 400px;
    background-color: var(--color-grey-3);

    h1{
        text-align: center;
        margin-bottom: 0.5rem;
    }
  
`
export const DivLogin = styled.div`
   height: 74px;
   display: flex;
   align-items: center;
   justify-content: center;
`
