import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 60px;
    background: ${props => props.theme.colors.white};
    border: 1px solid rgba(94, 127, 177, 0.2);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    overflow: hidden;

    & + div {
        margin-top: 10px;
    }

    input {
        width: 100%;
        padding: 15px;
        height: 100%;
        font-size: 18px;
        color: ${props => props.theme.colors.textColor};

        &::placeholder {
            color: ${props => props.theme.colors.textColor};
        }

        &:disabled {
            opacity: 0.4;
        }
    }

    button {
        width: 60px;
        height: 100%;
        background: none;
        font-size: 12px;
        color: ${props => props.theme.colors.lightBlue};
        cursor: pointer;
    }

    @media (max-width: 700px) {
        height: 47px;

        input {
            font-size: 14px;
        }
    }
`;


export const Label = styled.div`
    text-align: left;
    width: 100%;
    margin: 10px 0;
    color: ${props => props.theme.colors.textColor};
    font-weight: 600;
`