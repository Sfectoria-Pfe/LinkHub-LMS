import { HttpException } from "./root";

export class UnprocessableEntity extends HttpException {
  constructor(erro: any, message: string, errorCode: number) {
    super(message, errorCode, 422, erro);
  }
}
