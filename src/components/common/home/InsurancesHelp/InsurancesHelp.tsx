import React from 'react'
import * as S from './InsurancesHelp.styles'
import { useRouter } from 'next/router';
import { Box, CardActions, CardContent, Grid, Stack, Typography } from '@mui/material';
import { Item } from '../../auto/AnswerQuestion/AnswerQuestion.styles';
import { CardHelp } from '@/components/ui/CardHelp';
import { Button } from '@/components/ui';

export default function InsurancesHelp() {
  const router = useRouter();

  return (
    <S.InsuranceContainer>
      <Box sx={{ marginBottom: 2 }}>
        <S.StyledTitleTypography>
          Como contratar?
        </S.StyledTitleTypography>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1.5}>
          <Grid item xs={2.4}>
            <Item>
              <CardHelp titulo='1 - Lorem Ipsum' texto='Supporting line text lorem ipsum dolor sit amet, consectetur.'></CardHelp>
            </Item>
          </Grid>
          <Grid item xs={2.4}>
            <Item>
              <CardHelp titulo='2 - Lorem Ipsum' texto='Supporting line text lorem ipsum dolor sit amet, consectetur.'></CardHelp>
            </Item>
          </Grid>
          <Grid item xs={2.4}>
            <Item>
              <CardHelp titulo='3 - Lorem Ipsum' texto='Supporting line text lorem ipsum dolor sit amet, consectetur.'></CardHelp>
            </Item>
          </Grid>
          <Grid item xs={2.4}>
            <Item>
              <CardHelp titulo='4 - Lorem Ipsum' texto='Supporting line text lorem ipsum dolor sit amet, consectetur.'></CardHelp>
            </Item>
          </Grid>
          <Grid item xs={2.4}>
            <Item>
              <CardHelp titulo='5 - Lorem Ipsum' texto='Supporting line text lorem ipsum dolor sit amet, consectetur.'></CardHelp>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center" sx={{ marginTop: 3 }}>
        <Box height={50} width={225}>
          <Button>Contrate agora</Button>
        </Box>
      </Box>
      
    </S.InsuranceContainer>
  )
}
