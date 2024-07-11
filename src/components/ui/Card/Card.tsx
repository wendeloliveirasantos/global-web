import React, { ReactNode } from 'react'
import { FormControl, Button, Card, CardContent, Typography, CardActions, Box, Icon } from '@mui/material';
import * as S from './Card.styles'

type CardProps = {
  titulo: string
  texto: string
}

function UiCard({ titulo, texto, ...rest }: CardProps) {
  return (
    <S.StyledCard>
      <CardContent>
        <Box sx={{ display: 'flex'}}>
          <Icon sx={{ marginRight: 2 }}>
            <img src='/images/person_outline_24px.svg' alt="Custom Icon" style={{ marginBottom: '5px'}}/>
          </Icon>
          <div>
            <S.StyledTitleTypography sx={{ mb: 1.5 }}>
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

export default UiCard
