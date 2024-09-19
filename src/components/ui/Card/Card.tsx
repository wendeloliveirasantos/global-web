import { Box, CardContent, Icon } from '@mui/material';
import * as S from './Card.styles'

type CardProps = {
  titulo: string;
  texto: string;
};

function UiCard({ titulo, texto }: CardProps) {
  return (
    <S.StyledCard>
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}>
            <Icon sx={{ marginRight: 2 }}>
              <img
                src="/images/person_outline_24px.svg"
                alt="Custom Icon"
                style={{ marginBottom: '5px' }}
              />
            </Icon>
            <div>
              <S.StyledTitleTypography sx={{ mb: 1.5 }}>
                {titulo}
              </S.StyledTitleTypography>
              <S.StyledItemTypography
                dangerouslySetInnerHTML={{ __html: texto }}
              />
            </div>
          </Box>
        </Box>
      </CardContent>
    </S.StyledCard>
  );
}

export default UiCard;