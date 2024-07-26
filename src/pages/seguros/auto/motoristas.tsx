/* eslint-disable react-hooks/rules-of-hooks */
import { ContainerBox, Wrapper } from "@/components/common";
import { DriversData } from "@/components/common/auto/DriversData";
import { MainLayout } from "@/components/common/layouts";
import Loading from "@/components/common/Loading/Loading";
import { PageTitle } from "@/components/common/PageTitle";
import { Button } from "@/components/ui";
import { useAuto } from "@/context/auto";
import { DriversEntity } from "@/types/auto-offer-input";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Drivers() {
  const router = useRouter()
  const [drivers, setDrivers] = useState<DriversEntity[]>([]);
  const [error, setError] = useState("")
  const { insured, addDrivers } = useAuto();

  useEffect(() => {
    if (insured) {
      const arr = [...drivers]
      arr.push({
        name: insured.name,
        dateOfBirth: "",
        document: insured!.documents![0],
        questionnaires: []
      })
      setDrivers(arr)
    }
  }, [insured]);

  if (!drivers.length) {
    return <Loading />;
  }

  function handleAddDriver() {
    const arr = [...drivers]
    arr.push({
      name: "",
      dateOfBirth: "",
      document: {
        number: "",
        type: {
          id: 3
        }
      },
      questionnaires: []
    })
    setDrivers(arr)
  }

  function handleRemoveDriver(i: number) {
    const arr = [...drivers]
    arr.splice(i, 1)
    setDrivers(arr)
  }

  function handleChange(i: number, n: string, v: any) {
    const arr = [...drivers]
    const driver = arr[i] as any
    driver[n] = v
    arr[i] = driver
    setDrivers(arr)
  }

  function handleSubmit() {
    setError("")
    let error = true
    drivers.map((driver) => {
      if (
        !driver.name ||
        !driver.dateOfBirth ||
        !driver.document.number
        ) {
          return setError("Preencha todos os campos.")
        }
        error = false
    })
    if (error) return
    addDrivers(drivers)
    router.push("/seguros/auto/questionario-motoristas")
  }

  return (
    <MainLayout>
      <Wrapper style={{ flex: 1 }} background="/images/city.png">
        <ContainerBox>
          <div style={{ maxWidth: 400, width: "100%" }}>
            <PageTitle bold="Dados" regular="dos Motoristas" />
            <DriversData handleChange={handleChange} removeDriver={handleRemoveDriver} addDriver={handleAddDriver} drivers={drivers} />
            <div style={{ marginTop: 40 }}>
              <Button onClick={handleSubmit}>Avançar</Button>
            </div>
          </div>
        </ContainerBox>
      </Wrapper>
    </MainLayout>
  );
}
