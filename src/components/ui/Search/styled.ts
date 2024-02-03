import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
`

export const Select = styled.div`
    width: 100%;
    height: 60px;
    padding: 10px;
    background: ${props => props.theme.colors.white};
    border: 1px solid rgba(94, 127, 177, 0.2);
    border-radius: 5px;
    font-size: 18px;
    color: ${props => props.theme.colors.textColor};
    cursor: pointer;

    input {
        width: 100%;
        height: 100%;
        outline: none;
        font-size: 18px;
        color: ${props => props.theme.colors.textColor};
    }

    @media (max-width: 700px) {
        height: 47px;
        font-size: 14px;
    }
`;

export const Label = styled.div`
    text-align: left;
    width: 100%;
    margin-top: 10px;
    color: ${props => props.theme.colors.textColor};
    font-weight: 600;
`

export const Options = styled.div<{ open: boolean }>`
    position: absolute;
    margin-top: 0.5rem;
    background-color: #fff;
    width: 100%;
    border: 1px solid rgba(94, 127, 177, 0.2);
    border-radius: 5px;
    max-height: 12rem;
    overflow-y: auto;
    display: none;

    ${({ open }) => open && `
        display: block;
    `}
`;

export const Option = styled.div`
    padding: 0.75rem 0.5rem;
    color: ${props => props.theme.colors.textColor};
    cursor: pointer;

    &:hover {
        background-color: rgba(0,0,0,0.05);
    }
`;
