import React from 'react'
import * as S from './WhatsApp.styles'
import { FormControl, FormHelperText, TextField } from '@mui/material'
import { FloatingWhatsApp } from 'react-floating-whatsapp';

type WhatsAppProps = {

}

export default function WhatsApp({
  ...rest
}: WhatsAppProps) {
  return (
    <div>
      {/* Outros componentes do seu aplicativo */}
      <FloatingWhatsApp 
        phoneNumber="+5511999999999"
        accountName="Global Digital - Support"
        avatar="/images/avatar-whatsapp.png"
        statusMessage="Online"
        chatMessage="Bem vindo(a) a Global Digital. Obrigada por nos contatar. Em que posso te ajudar?"
        allowClickAway={true}
        darkMode={false}
        notification={true}
        notificationLoop={1}
        notificationDelay={20}
        notificationSound={true}
      />
    </div>
  )
}