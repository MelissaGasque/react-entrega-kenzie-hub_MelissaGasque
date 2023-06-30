import styled from "styled-components"

export const ContainerHeader = styled.div`
    width: 100%;
    max-width: 48.125rem;
    margin: 0 auto; 
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 771px) {
        margin-left: 1rem;
        width: 95%;
    }

`
export const ContainerBody = styled.div`
    width: 100%;
    max-width: 48.125rem;
    margin: 0 auto; 
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 771px) {
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        padding: 0px;
        margin-left: 1rem;
        width: 100%;

        h1{
          margin-bottom: 10px;
        }
    }
`

export const HeaderHome = styled.header`
    display: flex;
    align-items: center;
    height: 4.5rem;
    width: 100%;
 
    img{
        width: 6.5956rem;
        height: 0.9144rem;
    }
    
`
export const HomeUsuario = styled.div`
   display: flex;
    height: 7.375rem;
    border-top: 0.0625rem solid var(--color-grey-3);
    border-bottom: 0.0625rem solid var(--color-grey-3);
`

export const HomeMensagem = styled.div`
  max-width: 48.125rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column; 

   margin-top:37px;
   h1{
        margin-bottom: 16px;
    }

    @media (max-width: 771px) {
        margin-left: 1rem;
        width: 95%;
    }
`
export const HomeTecnologia = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const HomeListUl= styled.ul`
  display: flex;
  flex-direction: column;
  height: 26rem;
  margin-top: 1rem;
  background-color: var(--color-grey-3);
  padding: 1.5rem 1.5rem;
  overflow-y: auto;
  overflow-x: hidden;

`

export const HomeListLi = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-grey-4);
  width: 96%;
  height: 3.0625rem;
  padding: 0 1rem;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
   cursor: pointer;

   &:hover {
    background-color: var(--color-grey-2);
  }
`