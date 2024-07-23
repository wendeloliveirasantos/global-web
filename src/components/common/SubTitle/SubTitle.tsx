import React from 'react'
import * as S from './SubTitle.styles'
import { Box, Grid, Typography } from '@mui/material'
import { Item } from '../auto/AnswerQuestion/AnswerQuestion.styles'
import { Div } from '.'

type SubTitleProps = {
  bold?: string
  regular?: string
  className?: string
}

function SubTitle({ bold, regular, className }: SubTitleProps) {
  return (
    <Div>
     <Box
        sx={S.boxStyle}
      >
        <Typography component="div">
          {regular}
        </Typography>
      </Box>
    </Div>
  )
}

export default SubTitle
