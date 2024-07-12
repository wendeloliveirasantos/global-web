import { Insurance } from '@/components/common/Insurance'
import { MainLayout } from '@/components/common/layouts'
import { insuranceInformation } from '@/utils/autoInformation'
import React from 'react'

export default function AutoDetalhes() {
    return (
        <MainLayout>
            <Insurance
                href="/seguros/auto/dados-basicos"
                insuranceInformation={insuranceInformation}
            />
        </MainLayout>
    )
}