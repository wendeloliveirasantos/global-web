import { Container, Wrapper } from '@/components/common'
import { MainLayout } from '@/components/common/layouts'
import { VehicleData } from '@/components/common/VehicleData'
import { useAuto } from '@/context/auto'
import { useProspect } from '@/context/prospect'
import { useRouter } from 'next/router'
import React from 'react'

export default function AutoDetalhes() {
    const router = useRouter()
    const { addNewVehicle } = useAuto()

    function handleSubmit(data: any) {
        addNewVehicle({
            isNewVehicle: data.isNewVehicle === "no" ? false : true,
            manufactureYear: data.manufactureYear,
            modelYear: data.modelYear,
            postalCode: data.postalCode.replace(" ", ""),
            vehicleCategoryId: data.vehicleModel.category.code,
            vehicleModelId: data.vehicleModel.id,
            fuelTypeId: data.vehicleModel.fuelType.code
        })
        router.push("/seguros/auto/questionario-veiculo")
    }

    return (
        <MainLayout>
            <Wrapper style={{ flex: 1 }} background="/images/city.png">
                <Container>
                    <VehicleData onSubmit={handleSubmit} />
                </Container>
            </Wrapper>
        </MainLayout>
    )
}