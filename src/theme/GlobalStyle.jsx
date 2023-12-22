import { createGlobalStyle } from "styled-components";

import reset from "./reset";
import { Hind } from 'next/font/google'
import { device, theme } from "./theme";

const hind = Hind({
    weight: ['400', '600', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap'
})

const GlobalStyle = createGlobalStyle`
    ${reset}

    body {
        font-family: ${hind.style.fontFamily};
        background-color: ${theme.colors.background.bg1};
    }

    #__next {
        width: 100vw;
        height: 100vh;
        display: flex;

        @media ${device.mobile} {
            flex-direction: column;
        }
    }
`

export default GlobalStyle