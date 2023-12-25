import { createGlobalStyle } from "styled-components";

import reset from "./reset";
import { VT323 } from 'next/font/google'
import { device, theme } from "./theme";

const pixel = VT323({
    weight: '400',
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap'
})

const GlobalStyle = createGlobalStyle`
    ${reset}

    body {
        font-family: ${pixel.style.fontFamily};
        background-color: ${theme.color.bg};
    }

    /* #__next {
        width: 100vw;
        height: 100vh;
        display: flex;

        @media ${device.mobile} {
            flex-direction: column;
        }
    } */
`

export default GlobalStyle