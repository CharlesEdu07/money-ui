import { Injectable } from '@angular/core';
import { ToastyService } from 'ng2-toasty';

@Injectable()
export class ErrorHandlerService {

  constructor(private toasty: ToastyService) { }

  handle(errorResponse: any) {
    let message: string;

    if (typeof errorResponse === 'string') {
      message = errorResponse;
    } else {
      message = 'Erro ao processar serviço remoto. Tente novamente.';

      console.log("Ocorreu um erro", errorResponse);
    }

    this.toasty.error(message);
  }
}
