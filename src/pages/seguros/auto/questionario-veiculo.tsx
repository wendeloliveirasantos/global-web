import { Container, Wrapper } from "@/components/common";
import { MainLayout } from "@/components/common/layouts";
import Loading from "@/components/common/Loading/Loading";
import { PageTitle } from "@/components/common/PageTitle";
import { IQuestionsEntity } from "@/types/auto-questionarie";
import { useAuto } from "@/context/auto";
import { autoService } from "@/services";
import React, { useEffect, useState } from "react";
import { Questionarie } from "@/components/common/auto/Questionarie";
import { Button } from "@/components/ui";
import { useRouter } from "next/router";
import { IQuestionnairesEntity } from "@/types/auto-offer-input";

export default function VehicleQuestions() {
  const router = useRouter();
  const { vehicle, addVehicleQuestions } = useAuto();
  const [questions, setQuestions] = useState<IQuestionsEntity[]>([]);
  const [answers, setAnswers] = useState<IQuestionnairesEntity[]>([]);

  async function listQuestionaries() {
    const response = await autoService.listQuestionaries({
      postalCode: vehicle!.postalCode,
      vehicleCategory: vehicle!.vehicleCategoryId,
      questionaryType: 2,
    });
    if (response.result) {
      setQuestions(response.result.questions);
    }
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

  useEffect(() => {
    if (vehicle) {
      listQuestionaries();
    }
  }, [vehicle]);

  if (!questions.length) {
    return <Loading />;
  }

  function handleSubmit() {
    addVehicleQuestions(answers);
    router.push("/seguros/auto/dados-segurado")
  }

  return (
    <MainLayout>
      <Wrapper style={{ flex: 1 }} background="/images/city.png">
        <Container>
          <div style={{ maxWidth: 400, width: "100%" }}>
            <PageTitle bold="Questionário" regular="Veículo" />
            <Questionarie handleSelect={handleSelect} questions={questions} />
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
