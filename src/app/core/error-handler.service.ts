import { Injectable } from '@angular/core';
import { ToastyService } from 'ng2-toasty';

@Injectable()
export class ErrorHandlerService {

  constructor(private toasty: ToastyService) { }

  handle(errorResponse: any) {
    let message: string;

    if (typeof errorResponse === 'string') {
      message = errorResponse;
    } else if (errorResponse instanceof Response && errorResponse.status >= 400 && errorResponse.status <= 499) {
      let errors;

      message = 'Ocorreu um erro ao processar a sua solicitação';

      try {
        errors = errorResponse.json();

        message = errors[0].userMessage;
      } catch (e) { }

      console.error('Ocorreu um erro', errorResponse);
    } else {
      message = 'Erro ao processar serviço remoto. Tente novamente.';

      console.error('Ocorreu um erro', errorResponse);
    }

    this.toasty.error(message);
  }
}
