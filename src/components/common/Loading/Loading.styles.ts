import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.colors.lightBlue};
`;

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;


    h1 {
        font-size: 37px;
        margin-bottom: 30px;
        z-index: 2;
    }

    h2 {
        font-size: 25px;
        margin-top: 20px;
        z-index: 2;
    }

    .loading {
        width: 143px;
        height: 143px;
        z-index: 2;
    }

    .CircularProgressbar-path {
        stroke: ${props => props.theme.colors.darkBlue};
        border-radius: unset;
    }
    .CircularProgressbar-trail {
        stroke: #fff;
    }
    .CircularProgressbar-text {
        fill: #fff;
        font-size: 30px;
        font-weight: bold;
    }

    @media (max-width: 1100px) {
        height: 1010px;
    }

    @media (max-width: 800px) {
        height: 610px;
    }

    @media (max-width: 700px) {
        
        h1 {
            font-size: 30px;
        }

        h2 {
            font-size: 14px;
        }

        .loading {
            width: 80px;
            height: 80px;
        }

        .CircularProgressbar-text {
            font-size: 14px;
        }
    }
`;
