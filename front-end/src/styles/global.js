import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
}

body{
    height: 100vh;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
}

`;
