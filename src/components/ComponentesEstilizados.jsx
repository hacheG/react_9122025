import React from "react";
import styled, {
    css, 
    keyframes, 
    ThemeProvider, 
    createGlobalStyle
} from "styled-components";

export default function ComponentesEstilizados(){
    let mainColor = "#db7093";
    let mainAlphaColor80 = "#db709380";
    
    const setTransitionTime = time => `background-color ${time} ease-in-out`
    const fadeIn = keyframes`
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    `;
    
    const Myh3 = styled.h3`
        padding: 2rem;
        color:${props => props.color || "#000"};
        text-align: center;
        background-color: ${mainColor};
        transition: ${setTransitionTime("0.5s")};
        animation: ${fadeIn} 5s ease-out;

        ${props => props.isButton && css`
            margin: auto;
            max-width:50%;
            border-radius: 0.25rem;
            cursor: pointer;
            `}

        &:hover {
            background-color: ${mainAlphaColor80}
        }
    `;

    const light = {
        color: "#222",
        bgColor: "#ddd"
    };
    const dark = {
        bgColor: "#222",
        color: "#ddd"
    };
    const Box = styled.div`
        padding: 1rem;
        margin: 1rem;
        color=: ${ ({theme}) => theme.color };
        background-color: ${ ({theme}) => theme.bgColor };
    `;

    const BoxRounded = styled(Box)`
        border-radius: 1rem;
    `;

    // el global style es como un reseteo por que afecta a toda la aplicacion, por ello es mejor ponerlo en el main.jsx
    const GlobalStyle = createGlobalStyle`
        h2 {
            padding: 2rem;
            background-color: #fff;
            color: #61dafb;
            text-transform: uppercase;
        }
    `;
    
    return(
        <>
            <GlobalStyle/>
            <h2>Componentes Estilizados</h2>
            <Myh3>soy un H3 estilizado con styled-components</Myh3>
            <Myh3 color="#61dafb">soy un H3 estilizado con styled-components</Myh3>
            <Myh3 isbutton={"true"}>soy un H3 estilizado con styled-components</Myh3>
            <ThemeProvider theme={light}>
                <Box>soy un DIV light con styled-component</Box>
            </ThemeProvider>

            <ThemeProvider theme={dark}>
                <Box>soy un DIV dark con styled-component</Box>
            </ThemeProvider>

            <ThemeProvider theme={light}>
                <BoxRounded>soy un DIV redondeado que hereda con styled-component</BoxRounded>
            </ThemeProvider>
            
        </>
    )
}