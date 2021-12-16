import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}
    h1 {
        margin: 0;
    }
    .landing {
        display: flex;
        padding: 0;
    }
    color: rgba(255, 255, 255, 0.9);
`;

export const theme = {
}

export default GlobalStyles;