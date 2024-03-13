import React from 'react'
import * as S from './Dialog.styles'
import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';

type Props = {
  title: string,
  text: string,
  onClose?(e: any): void,
  open: boolean
}

function UiDialog({ title, text, onClose, open }: Props) {
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        
        <DialogTitle id="alert-dialog-title">
          <ErrorIcon /> {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} autoFocus>
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}

export default UiDialog
