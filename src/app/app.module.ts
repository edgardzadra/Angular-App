import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { MessageComponent } from './message/message.component';
import { PessoasGridComponent } from './pessoas-grid/pessoas-grid.component';
import { LancamentosModule } from './lancamentos/lancamentos.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    //PessoasPesquisaComponent,
    //PessoaCadastroComponent,
    MessageComponent,
    //PessoasGridComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    LancamentosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
