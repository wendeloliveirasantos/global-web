import React, { ReactNode } from 'react'
import { FormControl, Button, Card, CardContent, Typography, CardActions, Box, Icon } from '@mui/material';
import * as S from './CardPeople.styles'

type CardPeopleProps = {
  titulo: string
  texto: string
  src?: string
}

function UiCardPeople({ titulo, texto, src, ...rest }: CardPeopleProps) {
  return (
    <S.StyledCard>
      <CardContent>
        <Box sx={{ display: 'flex'}}>
          <Icon sx={{ marginRight: 2, width: 'auto', height: 'auto' }}>
            <img src={src} alt="Custom Icon" style={{ marginBottom: '5px', width: '56px', height: '56px', borderRadius: '28px'}}/>
          </Icon>
          <div>
            <S.StyledTitleTypography>
              {titulo}
            </S.StyledTitleTypography>
            <S.StyledItemTypography>
              {texto}
            </S.StyledItemTypography>
          </div>
        </Box>
      </CardContent>
    </S.StyledCard>
  )
}

export default UiCardPeople
