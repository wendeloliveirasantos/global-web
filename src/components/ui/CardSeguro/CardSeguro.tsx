import React, { ReactNode, useEffect, useState } from 'react'
import { FormControl, Button, Card, CardContent, Typography, CardActions, Box, Icon } from '@mui/material';
import * as S from './CardSeguro.styles'

type CardSeguroProps = {
  titulo: string
  texto: string
  items: string[]
}

function UiCardSeguro({ titulo, texto, items, ...rest }: CardSeguroProps) {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  
  return (
    <S.StyledCard>
      <CardContent>
        <Box sx={{ display: 'flex'}}>
          <div>
            <S.StyledTitleTypography sx={{ mb: 1 }}>
              {titulo}
            </S.StyledTitleTypography>
            <S.StyledItemTypography>
              <ul style={{ paddingLeft: '30px', margin: 0, listStyleType: 'disc' }}>
                {items.map((item, index) => (
                  <li key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </S.StyledItemTypography>
          </div>
        </Box>
      </CardContent>
    </S.StyledCard>
  )
}

export default UiCardSeguro
