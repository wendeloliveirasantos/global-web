import styled from 'styled-components';

export const Wrapper = styled.select`
    width: 100%;
    height: 60px;
    padding: 10px;
    background: ${props => props.theme.colors.white};
    border: 1px solid rgba(94, 127, 177, 0.2);
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
    color: ${props => props.theme.colors.textColor};

    @media (max-width: 700px) {
        height: 47px;
        font-size: 14px;
    }
`;

export const Option = styled.option``;

export const Label = styled.div`
    text-align: left;
    width: 100%;
    margin-top: 10px;
    color: ${props => props.theme.colors.textColor};
    font-weight: 600;
`
