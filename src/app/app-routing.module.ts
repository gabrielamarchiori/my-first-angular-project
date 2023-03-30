import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './components/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListaPensamentosComponent } from './components/pensamentos/lista-pensamentos/lista-pensamentos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listaPensamento',
    pathMatch: 'full'
  },
  {
    path: 'criarPensamento',
    component: CriarPensamentoComponent
  },

  {
    path: 'listaPensamento',
    component: ListaPensamentosComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
