import { Container, Wrapper } from "@/components/common";
import { Questionarie } from "@/components/common/auto/Questionarie";
import { MainLayout } from "@/components/common/layouts";
import Loading from "@/components/common/Loading/Loading";
import { PageTitle } from "@/components/common/PageTitle";
import { Button } from "@/components/ui";
import { useAuto } from "@/context/auto";
import { autoService } from "@/services";
import { DriversEntity } from "@/types/auto-offer-input";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function QuestionariePage() {
  const router = useRouter();
  const query = router.query;
  const driverIdx = query?.m ?? 0;

  const { vehicle, drivers, updateDriver } = useAuto();
  const [questions, setQuestions] = useState<any>(null);
  const [answers, setAnswers] = useState<any[]>([]);
  const [driver, setDriver] = useState<DriversEntity | null>(null);

  async function listQuestionaries() {
    const { result } = await autoService.listQuestionaries({
      postalCode: vehicle!.postalCode,
      vehicleCategory: vehicle!.vehicleCategoryId,
      questionaryType: 3,
    });
    if (result) {
      setQuestions(result.questions);
    }
  }

  useEffect(() => {
    if (vehicle) {
      listQuestionaries();
    }
  }, [vehicle]);

  useEffect(() => {
    if (drivers.length) {
      setDriver(drivers[driverIdx as number]);
    }
  }, [query, drivers]);

  if (!questions || !driver) {
    return <Loading />;
  }

  function handleSelect(value: any) {
    const arr: any[] = [...answers];
    const input = {
      questionId: value.question.id,
      answerId: value.answer,
    };
    const idx = arr.findIndex((a: any) => a.questionId === value.question.id);
    if (idx !== -1) {
      arr[idx] = input;
    } else {
      arr.push(input);
    }
    setAnswers(arr);
  }

  function handleSubmit() {
    const questionnaires = answers;
    driver!.questionnaires = questionnaires
    updateDriver(driverIdx as number, driver as DriversEntity)
    if (drivers.length > (driverIdx as number + 1)) {
      router.push(`/seguros/auto/questionario-motoristas?m=${driverIdx as number + 1}`)
      return
    }
    router.push("/seguros/auto/ofertas");
  }

  return (
    <MainLayout>
      <Wrapper style={{ flex: 1 }} background="/images/city.png">
        <Container>
          <div style={{ maxWidth: 400, width: "100%" }}>
            <PageTitle bold="Questionário" regular="Motorista" />
            <div>
              <h3>{`Motorista: ${driver.name}`}</h3>
            </div>
            <Questionarie
              handleSelect={handleSelect}
              questions={questions}
            />
            {answers.length === questions.length && (
              <div style={{ marginTop: 40 }}>
                <Button onClick={handleSubmit}>Avançar</Button>
              </div>
            )}
          </div>
        </Container>
      </Wrapper>
    </MainLayout>
  );
}
