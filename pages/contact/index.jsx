import styled from "styled-components"
import SVG from "react-inlinesvg"

import { theme } from "@/theme/theme"

const StyledContact = styled.main`
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    height: 100vh;
    justify-content: center;
    box-sizing: border-box;
`

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    gap: 20px;

    img {
        width: 150px;
    }

    h1 {
        color: ${theme.color.main};
        text-transform: uppercase;
        font-size: 2.5rem;
    }
`

const StyledDescription = styled.p`
    color: ${theme.color.contrast};
    font-size: 1.5rem;
    padding: 20px;
    text-align: center;
`

const StyledLink  = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    div {
        display: flex;
        align-items: center;
        gap: 10px;

        SVG {
            width: 20px;
        }

        a {
            text-decoration: none;
            color: ${theme.color.contrast};
            font-size: 1.5rem;
        }
    }
`

const StyledSocial = styled.div`
    display: flex;
    gap: 60px;

    a {
        display: flex;
        background-color: ${theme.color.main};
        padding: 5px;
        border-radius: 10px;
        align-items: center;

        SVG {
            width: 50px;
        }
    }
`

function Contact() {
    return (
        <StyledContact>
            <StyledHeader>
                <img src="./perfil-photo.jpeg" alt="Perfil photo"/>
                <h1>Gabriel Francisco Santichio</h1>
            </StyledHeader>
            <StyledDescription>
                Programador, bacharel em Engenharia de Software, segunda geração do grupo Pague Menos Supermercados.
            </StyledDescription>
            <StyledLink>
                <div>
                    <SVG src="./icons/mail.svg"/>
                    <a href="mailto:gabriel@santich.io">gabriel@santich.io</a>
                </div>
                <div>
                    <SVG src="./icons/phone.svg"/>
                    <a href="tel:+5519996324555">+55 (19) 99632-4555</a>
                </div>
                <div>
                    <SVG src="./icons/globe.svg"/>
                    <a href="https://santich.io">santich.io</a>
                </div>
            </StyledLink>
            <StyledSocial>
                <a href="https://github.com/santichio">
                    <SVG src="./icons/github.svg"/>
                </a>
                <a href="https://instagram.com/santich.io">
                    <SVG src="./icons/instagram.svg"/>
                </a>
                <a href="https://x.com/gfsantichio">
                    <SVG src="./icons/twitter.svg"/>
                </a>
            </StyledSocial>
        </StyledContact>
    )
}

export default Contact