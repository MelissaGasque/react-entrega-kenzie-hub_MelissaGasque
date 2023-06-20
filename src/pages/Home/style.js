import styled from "styled-components"

export const ContainerHeader = styled.div`
    width: 100%;
    max-width: 770px;
    margin: 0 auto; //Coloca no meio 
    display: flex;
    justify-content: space-between;
    align-items: center;

`
export const ContainerBody = styled.div`
    width: 100%;
    max-width: 770px;
    margin: 0 auto; //Coloca no meio 
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 600px) {
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        padding: 0rem;
        width: 100%;

        h1{
          margin-bottom: 0.625rem;
        }
    }
`

export const HeaderHome = styled.header`
    display: flex;
    align-items: center;
    height: 72px;
    width: 100%;
 
    img{
        width: 105.53px;
        height: 14.63px;
    }

`
export const HomeUsuario = styled.div`
   display: flex;
    height: 118px;
    border-top: 1px solid var(--color-grey-3);
    border-bottom: 1px solid var(--color-grey-3);
`

export const HomeMensagem = styled.div`
  max-width: 770px;
  margin: 0 auto; //Coloca no meio 
  display: flex;
  flex-direction: column; 

   margin-top:2.3125rem;
   h1{
        margin-bottom: 1rem;
    }

    @media (max-width: 600px) {
    display: none;
  }

`