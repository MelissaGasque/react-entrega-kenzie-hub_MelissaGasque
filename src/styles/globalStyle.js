import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
:root {
	--color-color-primary: #FF577F;
	--color-color-primary-50: #ff427f;
	--color-color-primary-disable: #59323F;
	--color-grey-4: #121214;
	--color-grey-3: #212529;
	--color-grey-2: #343B41;
	--color-grey-1: #868E96;
	--color-grey-0: #F8F9FA;
    --color-white: #FFFFFF;
	--color-sucess: #3fe864;
	--color-negative: #e83f5b;
}

body{
    font-family: 'Inter', sans-serif;
    background: var(--color-grey-4);
    display: flex;
    justify-content: center;

}
`