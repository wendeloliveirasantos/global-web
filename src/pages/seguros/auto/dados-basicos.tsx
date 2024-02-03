/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Wrapper } from '@/components/common'
import { DataBasic } from '@/components/common/DataBasic'
import { MainLayout } from '@/components/common/layouts'
import { useAuto } from '@/context/auto'
import { useProspect } from '@/context/prospect'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export default function AutoDetalhes() {
    const router = useRouter()
    const { addPropspect } = useProspect()
    const { clearAuto } = useAuto()

    function handleSubmit(data: any) {
        data.phone = data.phone.replaceAll(" ", "")
        addPropspect(data)
        router.push("/seguros/auto/dados-do-veiculo")
    }

    useEffect(() => {
        clearAuto()
    }, [])

    return (
        <MainLayout>
            <Wrapper style={{ flex: 1 }} background="/images/city.png">
                <Container>
                    <DataBasic onSubmit={handleSubmit} />
                </Container>
            </Wrapper>
        </MainLayout>
    )
}