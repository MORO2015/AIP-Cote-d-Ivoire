import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { BarNavComponent } from './components/bar-nav/bar-nav.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProposComponent } from './components/propos/propos.component';
import { FormationComponent } from './components/formation/formation.component';
import { ConseilComponent } from './components/conseil/conseil.component';
import { FinanceComponent } from './components/finance/finance.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ArchivesComponent } from './components/archives/archives.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BarNavComponent,
    HomeComponent,
    NotFoundPageComponent,
    ContactComponent,
    ProposComponent,
    FormationComponent,
    ConseilComponent,
    FinanceComponent,
    LoadingComponent,
    ArchivesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
