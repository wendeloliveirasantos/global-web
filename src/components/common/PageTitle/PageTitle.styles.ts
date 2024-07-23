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

    @media (max-width: 600px) {
        white-space: nowrap;
    }

    @media (max-width: 450px) {
        width: 100%;
        font-size: 27px;
        flex-direction: column;
        margin: 30px 0 0;
        text-align: start;

        strong {
            margin: 0;
        }

        strong,
        span {
            width: 100%;
        }
    }

    @media (max-width: 400px) {
        font-size: 20px;
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