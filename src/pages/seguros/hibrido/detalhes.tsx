import { Insurances } from '@/components/common/home'
import { Insurance } from '@/components/common/Insurance'
import { MainLayout } from '@/components/common/layouts'
import FAQTravel from '@/components/common/travel/faq-travel'
import { Carousel } from '@/components/ui'
import { insuranceInformation } from '@/utils/hibridoInformation'
import { Container } from '@mui/material'
import React from 'react'
import { styled } from 'styled-components'

export default function AutoDetalhes() {
    const items = [
        { src: '/images/produto-item-3.jpeg', alt: 'Image 4', text: 'Seguro <br/> Híbrido', href: '/seguros/hibrido/detalhes' },
    ];
    return (
        <MainLayout>
            <ContainerBox>
                <Container maxWidth="xl">
                    <Carousel multiplier={2.75} items={items}/>
                    { <Insurance
                        href="/seguros/hibrido/dados-basicos"
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