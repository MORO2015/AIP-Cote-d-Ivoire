import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchivesComponent } from './components/archives/archives.component';
import { ConseilComponent } from './components/conseil/conseil.component';
import { ContactComponent } from './components/contact/contact.component';
import { FinanceComponent } from './components/finance/finance.component';
import { FormationComponent } from './components/formation/formation.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { ProposComponent } from './components/propos/propos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'conseil', component: ConseilComponent },
  { path: 'formation', component: FormationComponent },
  { path: 'finance', component: FinanceComponent },
  { path: 'propos', component: ProposComponent },
  { path: 'archives', component: ArchivesComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
