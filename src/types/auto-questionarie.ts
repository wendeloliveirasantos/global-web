export interface IQuestionsResponse {
  questions: IQuestionsEntity[];
}
export interface IQuestionsEntity {
  id: number;
  code: string;
  description: string;
  answers: IAnswersEntity[];
}
export interface IAnswersEntity {
  id: number;
  code: string;
  description: string;
}
