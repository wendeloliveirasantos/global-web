import { Container } from '@/components/common'
import ConcluidoComponent from '@/components/common/concluido'
import { MainLayout } from '@/components/common/layouts'
import { STORAGE_VIAGEM_COMPRA } from '@/constants';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import React from 'react'

export default function Concluido() {
  const [compra] = useLocalStorage(STORAGE_VIAGEM_COMPRA, "");
  return compra && (
    <MainLayout>
      <ConcluidoComponent compra={JSON.parse(compra)} />
    </MainLayout>
  )
}
