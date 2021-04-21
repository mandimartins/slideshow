import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *::after,
    *::before,
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }

    html{
        font-size: 62.5%; /* this sets 1rem to 10px */
        font-family: 'Oswald', sans-serif;
    }

    body{
        background-color: #0D1117;
    }

    button{
        outline:none;
        border:none;
    }
`;

export default GlobalStyle;
