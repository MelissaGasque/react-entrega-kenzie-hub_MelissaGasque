import styled from "styled-components"

export const StyledModalEditDelet = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 23.0625rem;
    height: 21.375rem;
    border-radius: 0.25rem;
    background-color:var(--color-grey-3);

`
export const StyledBackdropEditDelet = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
    z-index: 9998;
`

export const StyledHeaderEditDelet = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-grey-2);
    height: 3.125rem;
    padding: 0.75rem 1.25rem 0.75rem 1.25rem;
`

export const StyledFormEditDelet = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: var(--color-grey-3);
    height: 18.25rem;
    padding: 0.75rem 1.25rem 0.75rem 1.25rem;
`
export const StyledFakeInput = styled.div`
    display: flex;
    align-items: center;
    width: 18.75rem;
    height: 3rem;
    padding: 0rem 1.0152rem 0rem 1.0152rem;
    border-radius: 0.25rem;
    border: 0.0761rem;
    background-color: var(--color-grey-2);
`
export const StyleDivButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`