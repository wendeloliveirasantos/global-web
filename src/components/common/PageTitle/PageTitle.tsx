import React from 'react'
import * as S from './PageTitle.styles'
import { Box, Icon, Typography } from '@mui/material'

type PageTitleProps = {
  bold?: string
  regular?: string
  className?: string
  inverter?: boolean
}

function PageTitle({ bold, regular, className, inverter }: PageTitleProps) {
  return (
    <S.Wrapper className={className}>
      <Icon sx={{ marginRight: 1, width: 'auto', height: 'auto', paddingTop: '5px' }}>
        <img src='/images/doby.svg' alt="Custom Icon" style={{ }}/>
      </Icon>
      <Box sx={{ width: '100%', height: '100%' }}>
        { inverter ? 
        <Box>
          <Typography component="span" sx={S.regularTypographyStyle}>
            {regular}
          </Typography>
          <Typography component="span" sx={S.boldTypographyStyle}>
            {bold}{' '}
          </Typography>
        </Box>
         :
        <Box>
          <Typography component="span" sx={S.boldTypographyStyle}>
            {bold}{' '}
          </Typography>
          <Typography component="span" sx={S.regularTypographyStyle}>
            {regular}
          </Typography>
        </Box>
        }
      </Box>
    </S.Wrapper>
  )
}

export default PageTitle
