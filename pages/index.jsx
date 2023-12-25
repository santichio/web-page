import styled from "styled-components"

import { theme } from "@/theme/theme"

const StyledHome = styled.h1`
    color: ${theme.color.main};
`

function Home() {
    return (
        <>
            <StyledHome>Hello world!</StyledHome>
        </>
    )
}

export default Home