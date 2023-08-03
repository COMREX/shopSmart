import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  font-size: 10px;
}


    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        height: auto;
    }

    body {
        font-family: ${(props) => props.theme.typography.fontFamily};
        background-color: ${({ theme }) => theme.color.white};
        
    }
`;

export default GlobalStyles;
