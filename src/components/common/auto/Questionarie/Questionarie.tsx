import { IQuestionsEntity } from '@/types/auto-questionarie'
import React from 'react'
import { AnswerQuestion } from '../AnswerQuestion'
import * as S from './Questionarie.styles'

type Props = {
  questions: IQuestionsEntity[]
  handleSelect(v: object): void
}

export default function Questionarie({ questions, handleSelect }: Props) {
  return (
    <S.Wrapper>
      {questions.map((question: IQuestionsEntity) => (
        <AnswerQuestion
          onSelect={handleSelect}
          key={question.id}
          question={question}
        />
      ))}
    </S.Wrapper>
  )
}
