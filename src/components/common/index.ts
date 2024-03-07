import styled from "styled-components";
export * from "./travel";
export * from "./FAQAccordion";
export const Wrapper = styled.div<{ background?: string }>`
  width: 100%;
  background: ${(props) => `transparent url(${props.background}) no-repeat`};
  background-size: cover;
  height: 100%;
`;

export const Container = styled.div<{ background?: string }>`
  width: 100%;
  height: 100%;
  background: ${(props) => `transparent url(${props.background}) no-repeat`};
  background-size: cover;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  height: 100%;
`;
