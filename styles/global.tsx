import { createGlobalStyle } from 'styled-components';
import type { DefaultTheme } from '../styles/theme';

const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
    html,
    body {
        color: ${({ theme }) => theme.colors.primary };
        padding: 0px;
        margin: 0px;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif, serif;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }
`

export default GlobalStyles;