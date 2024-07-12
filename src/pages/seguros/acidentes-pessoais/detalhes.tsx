import { Insurance } from '@/components/common/Insurance'
import { MainLayout } from '@/components/common/layouts'
import FAQTravel from '@/components/common/travel/faq-travel'
import { insuranceInformation } from '@/utils/acidentesPessoaisInformation'
import React from 'react'

export default function AutoDetalhes() {
    return (
        <MainLayout>
            <Insurance
                href="/seguros/acidentes-pessoais/dados-basicos"
                insuranceInformation={insuranceInformation}
            />
            <FAQTravel />
        </MainLayout>
    )
}