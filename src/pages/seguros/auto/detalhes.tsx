import { Insurance } from '@/components/common/Insurance'
import { MainLayout } from '@/components/common/layouts'
import { insuranceInformation } from '@/utils/autoInformation'
import React from 'react'

export default function AutoDetalhes() {
    return (
        <MainLayout>
            <Insurance
                image="/images/city.png"
                icon="/images/car.png"
                title="Seguro Auto"
                href="/seguros/auto/dados-basicos"
                insuranceInformation={insuranceInformation}
            />
        </MainLayout>
    )
}