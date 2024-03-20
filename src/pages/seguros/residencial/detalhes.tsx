import { Insurance } from '@/components/common/Insurance'
import { MainLayout } from '@/components/common/layouts'
import FAQTravel from '@/components/common/travel/faq-travel'
import { insuranceInformation } from '@/utils/residencialInformation'
import React from 'react'

export default function AutoDetalhes() {
    return (
        <MainLayout>
            <Insurance
                image="/images/city.png"
                icon="/viagem.svg"
                title="Seguro Residencial"
                href="/seguros/residencial/dados-basicos"
                insuranceInformation={insuranceInformation}
            />
            <FAQTravel />
        </MainLayout>
    )
}