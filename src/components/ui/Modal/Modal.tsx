import React, { ReactNode } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { FormControl, Button, FormControlLabel, FormGroup, Switch, FormHelperText, FormLabel, Checkbox, Modal, Box, Typography, Backdrop, Fade, Card, CardMedia, CardContent, CardActions, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled, tableCellClasses, IconButton, Grid } from '@mui/material';
import { formatCurrency } from '@/utils/string';

type ModalProps = {
  label?: string
  children?: ReactNode
  onChange?(e: any): void
  onClose?(e: any): void
  type?: any
  variant?: string
  open: boolean
  title: string
  descriptions: Array<{
    description: string
    fullDescription: string
    amount: string | number
    orderIndex: number | null
    coverageReferenceId: string | number
  }>
  helperText?: string
  businessName?: string
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#FF5A62',
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
   height: '42px',
  '&:nth-of-type(odd)': {
    backgroundColor: '#FFEAEB',
  },
  '&:nth-of-type(even)': {
    backgroundColor: '#FFD7D9',
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function UiModal({ label, children, onChange, onClose, type, open, title, variant, descriptions, helperText, businessName, ...rest }: ModalProps) {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={onClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Card sx={{ width: '100%', minWidth: '350px', background: '#FFD7D9', borderRadius: '16px' }}>
              <CardContent sx={{ padding: '0px', paddingBottom: '0px !important' }}>
                <Grid container spacing={0} sx={{ padding: '16px 24px 12px 24px' }}>
                  <Grid item xs={11}>
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: '#49454F', fontSize: '22px', fontWeight: '700', wordWrap: 'break-word' }}>
                      {title}
                    </Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <IconButton aria-label="close">
                      <CloseIcon onClick={onClose} style={{ float: 'right' }}/>
                    </IconButton>
                  </Grid>
                </Grid>
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                  <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table" size="small">
                      <TableHead sx={{ height: '42px' }}>
                        <StyledTableRow>
                          <StyledTableCell>Descrição</StyledTableCell>
                          <StyledTableCell align="right">Valor</StyledTableCell>
                        </StyledTableRow>
                      </TableHead>
                      <TableBody>
                        {descriptions.sort((a, b) => (a.orderIndex as number) - (b.orderIndex as number)).map((row) => (
                          <StyledTableRow
                            hover 
                            key={row.description}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <StyledTableCell component="th" scope="row">
                              {row.description}
                            </StyledTableCell>
                            {businessName == 'universal' ? <StyledTableCell align="right">{row.amount}</StyledTableCell> : <StyledTableCell align="right">{'R$ ' + formatCurrency(+row.amount)}</StyledTableCell>} 
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </CardContent>
              {/* <CardActions style={{ justifyContent: 'flex-end' }}>
                <Button onClick={onClose} size="small">Fechar</Button>
              </CardActions> */}
            </Card>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}

export default UiModal
