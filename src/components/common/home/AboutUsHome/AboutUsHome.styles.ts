import styled from "styled-components";

export const AboutUsContainer = styled.div`
    width: 100%;
    height: 855px;
    background: transparent no-repeat 0 -250px;
    background-size: 130% 150%;
    background-position: -50px -300px;
    margin-top: 25px;

    @media (max-width: 1100px) {
        height: unset;
    }

    @media (max-width: 450px) {
        background-size: 300% 125%;
        background-position: -500px 0;
    }
`;

export const AboutUs = styled.div`
    width: 100%;
    height: 100%;
    background: transparent;
    background-size: cover;
    color: ${props => props.theme.colors.white};
    padding: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h1 {
        font-size: 88px;
        margin-bottom: 60px;
    }

    p {
        width: 1100px;
        font-size: 22px;
        line-height: 35px;
        margin-bottom: 80px;
    }

    img {
        width: 218px;
        height: 66px;

        &:first-child {
            margin-right: 25px;
        }
    }

    @media (max-width: 1100px) {
        padding: 0 20px;

        h1 {
            margin-top: 50px;
        }

        p {
            width: 100%;
        }

        .buttons {
            margin-bottom: 30px;
        }
    }

    @media (max-width: 450px) {
        justify-content: space-around;

        h1 {
            font-size: 30px;
            margin-bottom: 40px;
        }

        p {
            font-size: 16px;
            line-height: 30px;
            margin-bottom: 80px;
        }

        .buttons {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            img {
                margin: 0;

                &:first-child {
                    margin-bottom: 10px;
                }
            }
        }
    }
`;

