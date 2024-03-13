import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
    max-height: 12rem;
    width: 100%;

    label {
        position: relative;
        padding-left: 35px;
        margin-right: 30px;
        font-size: 16px;
        color: ${props => props.theme.colors.textColor};
    }

    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;

        &:checked ~ span {
            background: ${props => props.theme.colors.lightBlue};
        }
    }

    span {
        position: absolute;
        top: -3px;
        left: 0;
        height: 20px;
        width: 20px;
        border: 1px solid ${props => props.theme.colors.textColor};
        border-radius: 3px;
    }

    @media (max-width: 450px) {
        width: 100%;
        padding-left: 0;
        justify-content: flex-start;
    }
`;

export const Label = styled.div`
    text-align: left;
    width: 100%;
    margin-bottom: 0.5rem;
    color: ${props => props.theme.colors.textColor};
    font-weight: 600;
`