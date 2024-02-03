// FAQAccordion.styles.ts

import styled from "styled-components";

export const AccordionContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
`;

export const AccordionItem = styled.div`
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
  overflow: hidden;
`;

export const AccordionQuestion = styled.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ToggleIcon = styled.span<{ isOpen: boolean }>`
  font-size: 18px;
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0)")};
  transition: transform 0.3s ease;
  color: ${(props) => props.theme.colors.lightBlue};
`;

export const AccordionAnswer = styled.div`
  padding: 10px;
`;
