import React, { ReactNode } from 'react'
import { FormControl, Button, Card, CardContent, Typography, CardActions, Box, Icon } from '@mui/material';
import * as S from './CardHelp.styles'

type CardHelpProps = {
  titulo: string
  texto: string
}

function UiCardHelp({ titulo, texto, ...rest }: CardHelpProps) {
  return (
    <S.StyledCard>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon sx={{ marginRight: 2 }}>
            <img src='/images/layer.svg' alt="Custom Icon" style={{ marginBottom: '5px'}}/>
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

export default UiCardHelp
