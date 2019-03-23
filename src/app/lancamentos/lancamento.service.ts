import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import * as moment from 'moment';

export class LancamentoFiltro {
  descricao: string;
  dataVencimentoInicio: Date;
  dataVencimentoFim: Date;
  paginacao = 0;
  tamanho = 1;
}

@Injectable()
export class LancamentoService {

  constructor(private http: HttpClient) { }

  lancamentosUrl = 'http://localhost:8080/lancamentos';

  pesquisar(lancamento: LancamentoFiltro): Promise<any> {
    let params = new HttpParams();
    let headers = new HttpHeaders();

    params = params.set('page', lancamento.paginacao.toString());
    params = params.set('size', lancamento.tamanho.toString());

    // tslint:disable-next-line:max-line-length
    headers = headers.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NTMyMTY2MjIsInVzZXJfbmFtZSI6ImFkbWluQGFsZ2Ftb25leS5jb20iLCJhdXRob3JpdGllcyI6WyJST0xFX0NBREFTVFJBUl9DQVRFR09SSUEiLCJST0xFX1BFU1FVSVNBUl9QRVNTT0EiLCJST0xFX1JFTU9WRVJfUEVTU09BIiwiUk9MRV9DQURBU1RSQVJfTEFOQ0FNRU5UTyIsIlJPTEVfUEVTUVVJU0FSX0xBTkNBTUVOVE8iLCJST0xFX1JFTU9WRVJfTEFOQ0FNRU5UTyIsIlJPTEVfQ0FEQVNUUkFSX1BFU1NPQSIsIlJPTEVfUEVTUVVJU0FSX0NBVEVHT1JJQSJdLCJqdGkiOiIyMTJlYmU5Ny0xYjRlLTQzMGEtYWQ3OC1mNmM1ZmFiYzkzZGQiLCJjbGllbnRfaWQiOiJhbmd1bGFyIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl19.e1oLwo7p_szk75K_zqty-JgSGUCnyOQovDH4HgB94IM');

    if (lancamento.descricao) {
      params = params.set('descricao', lancamento.descricao);
    }

    if (lancamento.dataVencimentoInicio) {
      params = params.set('dataVencimentoDe',
        moment(lancamento.dataVencimentoInicio).format('YYYY-MM-DD'));
    }

    if (lancamento.dataVencimentoFim) {
      params = params.set('dataVencimentoAte',
        moment(lancamento.dataVencimentoFim).format('YYYY-MM-DD'));
    }

    return this.http.get(`${this.lancamentosUrl}?resume`, { headers, params })
      .toPromise()
      .then(response => response);
  }
}
