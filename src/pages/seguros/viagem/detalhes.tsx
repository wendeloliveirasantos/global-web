import { Insurances } from '@/components/common/home'
import { Insurance } from '@/components/common/Insurance'
import { MainLayout } from '@/components/common/layouts'
import FAQTravel from '@/components/common/travel/faq-travel'
import { Carousel } from '@/components/ui'
import { insuranceInformation } from '@/utils/viagemInformation'
import React from 'react'
import { styled } from 'styled-components'

export default function AutoDetalhes() {
    const items = [
        { src: '/images/produto-home-1.png', alt: 'Image 1' }
    ];
    return (
        <MainLayout>
            <Container>
                <Carousel items={items}/>
                { <Insurance
                    href="/seguros/viagem/dados-basicos"
                    insuranceInformation={insuranceInformation}
                /> }
            </Container>
        </MainLayout>
    )
}

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 5px 35px 35px 35px;
    background-color: ${props => props.theme.colors.default};
`;