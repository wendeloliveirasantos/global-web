import styled from 'styled-components';

export const Wrapper = styled.div<{ background: string }>`
    width: 100%;
    background: ${(props) => `transparent url(${props.background}) no-repeat`};
    background-size: cover;
`;

export const Container = styled.div<{ background: string }>`
    width: 100%;
    height: 100%;
    background: ${props => `transparent url(${props.background}) no-repeat`};
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    color: ${props => props.theme.colors.white};

    div:first-child {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 50px;

        img {
            width: 78px;
        }
    }

    h2 {
        width: 1100px;
        margin: 15px 0;

        @media (max-width: 1100px) {
            width: 95%;
        }

        @media (max-width: 450px) {
            font-size: 16px;
        }
    }

    h3 {
        width: 1100px;
        margin: 15px 0;

        @media (max-width: 1100px) {
            width: 95%;
        }

        @media (max-width: 450px) {
            font-size: 16px;
        }
    }

    p {
        width: 1100px;
        margin: 15px 0;

        @media (max-width: 1100px) {
            width: 95%;
        }

        @media (max-width: 450px) {
            font-size: 16px;
        }
    }

    ul {
        width: 1100px;

        @media (max-width: 1100px) {
            width: 95%;
        }
    }

    button {
        width: 174px;
        height: 56px;
        border-radius: 30px;
        font-size: 18px;
    }

    @media (max-width: 1100px) {
        div:first-child {
            width: 100%;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            img {
                width: 47px;
                margin-right: 15px;
            }
        }
    }
`;

export const Title = styled.h1`
    font-size: 60px;

    @media (max-width: 450px) {
        width: 220px;
        font-size: 30px;
    }
`;

export const Heading = styled.strong`
    width: 1100px;
    font-size: 35px;
    margin: 50px 0 40px 0;

    @media (max-width: 1100px) {
        width: 95%;
    }

    @media (max-width: 450px) {
        font-size: 27px;
    }
`;

export const Text = styled.p`
    width: 1100px;
    font-size: 18px;
    line-height: 30px;

    @media (max-width: 1100px) {
        width: 95%;
    }

    @media (max-width: 450px) {
        font-size: 16px;
    }
`;

export const Card = styled.div`
    width: 1100px;
    //height: 94px;
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.textColor};
    border-radius: 20px;
    margin: 50px 0;
    padding: 20px;
    display: flex;
    flex-direction: column;

    h2 {
        margin-bottom: 20px;
        width: 100%;
    }

    p {
        margin-bottom: 20px;
        width: 100%;
    }

    ul {
        width: 100%;
    }

    @media (max-width: 1300px) {
        width: 95%;
    }
`;
