import styled from "styled-components";

const Wrapper = styled.div`
    min-height: 100vh;
    background-color: #D9D9D9;
`

const Main = styled.div`
    margin-top: 68px; // Padrão para telas grandes

    @media (max-width: 900px) {
    margin-top: 64px; // Ajuste para telas menores que 900px
    }

    @media (max-width: 600px) {
    margin-top: 58px; // Ajuste para telas menores que 600px
    }
`

export { Wrapper, Main }