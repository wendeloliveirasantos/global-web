import { Insurance } from '@/components/common/Insurance'
import { MainLayout } from '@/components/common/layouts'
import FAQTravel from '@/components/common/travel/faq-travel'
import { insuranceInformation } from '@/utils/autoInformation'
import React from 'react'

export default function AutoDetalhes() {
    return (
        <MainLayout>
            <Insurance
                image="/images/city.png"
                icon="/viagem.svg"
                title="Seguro Empresarial"
                href="/seguros/empresarial/dados-basicos"
                insuranceInformation={insuranceInformation}
            />
            <FAQTravel />
        </MainLayout>
    )
}