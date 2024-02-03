import { Container, Wrapper } from "@/components/common";
import { ProspectDetailData } from "@/components/common/auto/ProspectDetailData";
import { MainLayout } from "@/components/common/layouts";
import Loading from "@/components/common/Loading/Loading";
import { PageTitle } from "@/components/common/PageTitle";
import { useAuto } from "@/context/auto";
import { useProspect } from "@/context/prospect";
import {
  AddressesEntity,
  ContactsEntity,
  DocumentsEntityOrDocument,
} from "@/types/auto-offer-input";
import { useRouter } from "next/router";
import React from "react";

export default function Offers() {
  const router = useRouter();
  const { prospect } = useProspect();
  const { addInsured } = useAuto();

  if (!prospect) {
    return <Loading />;
  }

  function handleSubmit(data: any) {
    const documents = [];
    const contacts = [];
    const addresses = [];

    const document: DocumentsEntityOrDocument = {
      type: {
        id: 1,
      },
      number: data.cpf.replaceAll(".", "").replace("-", ""),
    };
    const contact: ContactsEntity = {
      data: data.email,
      type: {
        id: 3,
      },
      isAllowCampaign: true,
    };
    const address: AddressesEntity = {
      street: data.address.street,
      postalCode: data.address.postalCode.replace(" ", ""),
      number: data.address.number,
      referencePoint: data.address.referencePoint,
      complement: data.address.complement,
    };

    documents.push(document);
    contacts.push(contact);
    addresses.push(address);

    addInsured({
      name: data.name,
      contacts,
      documents,
      addresses,
    });

    router.push("/seguros/auto/motoristas");
  }

  return (
    <MainLayout>
      <Wrapper style={{ flex: 1 }} background="/images/city.png">
        <Container>
          <div style={{ maxWidth: 400, width: "100%" }}>
            <PageTitle bold="Dados" regular="do Segurado" />
            <ProspectDetailData
              initialValues={prospect}
              onSubmit={handleSubmit}
            />
          </div>
        </Container>
      </Wrapper>
    </MainLayout>
  );
}
