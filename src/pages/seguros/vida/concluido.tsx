import { ContainerBox } from '@/components/common'
import ConcluidoComponent from '@/components/common/concluido'
import { MainLayout } from '@/components/common/layouts'
import { STORAGE_RESIDENCIAL_COMPRA } from '@/constants';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import React from 'react'

export default function Concluido() {
  const [compra] = useLocalStorage(STORAGE_RESIDENCIAL_COMPRA, "");
  return compra && (
    <MainLayout>
      <ConcluidoComponent compra={JSON.parse(compra)} />
    </MainLayout>
  )
}
