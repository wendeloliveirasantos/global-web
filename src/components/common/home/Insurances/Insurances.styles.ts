import styled from "styled-components";

export const InsuranceContainer = styled.div`
    width: 100%;
    max-width: 1300px;
    margin: auto;
    display: flex;
    flex-direction: column;

    @media (max-width: 1400px) {
        max-width: 1100px;
    }

    @media (max-width: 1100px) {
        max-width: 900px;
    }
`;

export const Insurance = styled.div<{ reverse?: boolean }>`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
    padding: 10px;
    margin-top: 60px;

    @media (max-width: 1400px) {
        margin-bottom: 30px;
    }

    @media (max-width: 1100px) {
        margin-bottom: 100px;
    }

    @media (max-width: 800px) {
        flex-direction: column;
        margin: 15px 0;
    }
`;

export const InsuranceImage = styled.img`
    width: 749px;
    height: 462px;

    @media (max-width: 1400px) {
        width: 500px;
        height: 274px;
    }

    @media (max-width: 1100px) {
        width: 490px;
        height: 264px;
    }

    @media (max-width: 800px) {
        width: 700px;
        height: 390px;
    }

    @media (max-width: 600px) {
        width: 450px;
        height: 285px;
    }

    @media (max-width: 450px) {
        width: 350px;
        height: 185px;
    }

    @media (max-width: 400px) {
        width: 300px;
        height: 155px;
    }
`;

export const InsuranceDetails = styled.div`
    position: absolute;
    top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
    text-align: center;

    &.left {
        right: 600px;
    }

    &.right {
        left: 700px;
    }

    #title {
        color: ${props => props.theme.colors.darkBlue};
        font-size: 58px;

        span {
            margin-right: 15px;
        }
    }

    p {
        width: 600px;
        color: rgba(34, 34, 34, 0.5);
        font-size: 16px;
        line-height: 30px;
        margin-top: 50px;
    }

    @media (max-width: 1400px) {
        top: 0;

        &.left {
            right: 410px;
        }

        &.right {
            left: 470px;
        }

        #title {
            font-size: 45px;
        }

        p {
            line-height: 24px;
        }
    }

    @media (max-width: 1100px) {
        &.left {
            right: 430px;
        }

        &.right {
            left: 490px;
        }

        p {
            width: 450px;
        }
    }

    @media (max-width: 800px) {
        width: 100%;
        position: static;
        margin-bottom: 50px;

        p {
            width: 95%;
        }
    }

    @media (max-width: 450px) {
        #title {
            font-size: 30px;
        }

        p {
            font-size: 16px;
            line-height: 30px;
            margin-top: 25px;
        }
    }
`;

export const KnowMoreButton = styled.button`
    width: 269px;
    height: 63px;
    background: none;
    border: 1px solid var(--medium-gray);
    margin-top: 50px;
    border-radius: 50px;
    font-size: 16px;
    font-weight: bold;
    color: var(--light-gray);
    text-transform: uppercase;

    @media (max-width: 1400px) {
        margin-top: 30px;
        height: 60px;
    }
`;
