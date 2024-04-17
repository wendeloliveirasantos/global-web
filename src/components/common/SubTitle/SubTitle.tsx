import React from 'react'
import * as S from './SubTitle.styles'
import { Grid } from '@mui/material'
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
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item><p>{regular}</p></Item>
        </Grid>
      </Grid>
    </Div>
  )
}

export default SubTitle
