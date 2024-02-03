import { Button } from "@/components/ui";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";

const Wrapper = styled.div`
  background-color: ${theme.colors.lightBlue};
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  flex-direction: column;

  h3 {
    font-size: 2rem;
  }
`;

export default function Error() {
  const router = useRouter()
  return (
    <Wrapper>
      <div style={{ maxWidth: 400, padding: 20 }}>
        <h3>Ops...</h3>
        <p>Ocorreu um erro do nosso lado.</p>
        <div style={{ width: "100%", marginTop: 20 }}>
          <Button onClick={() => router.push("/")}>Voltar</Button>
        </div>
      </div>
    </Wrapper>
  );
}
