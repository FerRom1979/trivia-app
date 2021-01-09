export interface IFormLogin {
  name: string;
  email: string;
  messageRequired: string;
  age: number;
}
export interface IFormQuestions {
  questions: number;
  difficulty: string;
  type: string;
}
export interface IDataApi {
  amount: string;
  difficulty: string;
  typeform: string;
}

export interface IUser {
  name: string;
  email: string;
  age: number;
}
