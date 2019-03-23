import { LancamentoFiltro } from './../lancamento.service';
import { Component, OnInit } from '@angular/core';
import { LancamentoService } from '../lancamento.service';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  filtro = new LancamentoFiltro();
  lancamentos = [];

  constructor(private service: LancamentoService) {}
  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar() {
    this.service.pesquisar(this.filtro)
      .then(response => {
        this.lancamentos = response.content;
        console.log(response.totalElements);
      });
  }



}
