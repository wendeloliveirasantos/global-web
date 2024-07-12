import { Insurance } from '@/components/common/Insurance'
import { MainLayout } from '@/components/common/layouts'
import FAQTravel from '@/components/common/travel/faq-travel'
import { insuranceInformation } from '@/utils/empresarialInformation'
import React from 'react'

export default function AutoDetalhes() {
    return (
        <MainLayout>
            <Insurance
                href="/seguros/empresarial/dados-basicos"
                insuranceInformation={insuranceInformation}
            />
            <FAQTravel />
        </MainLayout>
    )
}