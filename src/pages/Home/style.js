import styled from "styled-components"

export const HeaderHome = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 331px;
    height: 80px;
 
    img{
        width: 105.53px;
        height: 14.63px;
    }

    @media (max-width: 600px) {
        padding: 0rem;
        width: 100%;

  }
`
export const MainHome = styled.main`
   display: flex;
   flex-direction:column;
   width: 100%;
    height: 622px;   
`
export const HomeUsuario = styled.div`
   display: flex;
   flex-direction:row;
   justify-content: space-between;
   align-items: center;
    height: 118px;
    padding: 0px 331px;
    border-top: 1px solid var(--color-grey-3);
    border-bottom: 1px solid var(--color-grey-3);

    
    @media (max-width: 600px) {
        justify-content: center;
        flex-direction: column;
        padding: 0rem;
        width: 100%;
  }
 
`
export const HomeMensagem = styled.div`
   display: flex;
   flex-direction:column;
 
   margin-top:2.3125rem;
   padding: 0px 331px;
   h1{
        margin-bottom: 1rem;
    }

    @media (max-width: 600px) {
    display: none;
  }

`