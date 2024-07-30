import styled from 'styled-components';

export const Wrapper = styled.div`
    color: ${props => props.theme.colors.darkBlue};
    font-size: 37px;
    margin: 0 0 25px 0;
    display: flex;
    justify-content: center;
    strong {
        margin-right: 10px;
    }
`;

export const boldTypographyStyle = {
    color: '#333333',
    fontSize: '32px',
    fontWeight: 400,
    lineHeight: '30px',
    wordWrap: 'break-word',
};
  
export const regularTypographyStyle = {
    color: '#FF5A62',
    fontSize: '32px',
    fontWeight: 700,
    lineHeight: '30px',
    wordWrap: 'break-word',
};