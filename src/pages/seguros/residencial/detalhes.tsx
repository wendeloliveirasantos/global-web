import { Insurances } from '@/components/common/home'
import { Insurance } from '@/components/common/Insurance'
import { MainLayout } from '@/components/common/layouts'
import FAQTravel from '@/components/common/travel/faq-travel'
import { Carousel } from '@/components/ui'
import { insuranceInformation } from '@/utils/residencialInformation'
import { Container } from '@mui/material'
import React from 'react'
import { styled } from 'styled-components'

export default function AutoDetalhes() {
    const items = [
        { src: '/images/produto-item-4.png', alt: 'Image 3', text: 'Seguro <br/> Residencial', href: '/seguros/residencial/detalhes' },
    ];
    return (
        <MainLayout>
            <ContainerBox>
                <Container maxWidth="xl">
                    <Carousel multiplier={2.75} items={items} />
                    { <Insurance
                        href="/seguros/residencial/dados-basicos"
                        insuranceInformation={insuranceInformation}
                    /> }    
                </Container>
            </ContainerBox>
        </MainLayout>
    )
}

export const ContainerBox = styled.div`
    width: 100%;
    height: 100%;
    padding: 0px 0px;
    background-color: ${props => props.theme.colors.default};
`;