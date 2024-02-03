import React, { useState } from 'react'
import * as S from './AnswerQuestion.styles'

type AnswerQuestionProps = {
  question: any
  onSelect(v: object): void
}

export default function AnswerQuestion({
  question,
  onSelect,
}: AnswerQuestionProps) {
  const [selected, setSelected] = useState<number | null>(null)

  function handleClick(value: number) {
    setSelected(value)
    onSelect({
      question: question,
      answer: value,
    })
  }

  return (
    <S.Wrapper>
      <h3>{question.description}</h3>
      <S.Content>
        {question.answers.map((answer: any) => (
          <S.Item key={answer.id} onClick={() => handleClick(answer.id)}>
            <S.Check checked={selected === answer.id} />
            {answer.description}
          </S.Item>
        ))}
      </S.Content>
    </S.Wrapper>
  )
}
