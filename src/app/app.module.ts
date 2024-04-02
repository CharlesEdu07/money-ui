import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/components/button/button';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';

import { AppComponent } from './app.component';
import { PostingSearchComponent } from './posting-search/posting-search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PersonSearchComponent } from './person-search/person-search.component';
import { PostingRegisterComponent } from './posting-register/posting-register.component';

@NgModule({
  declarations: [
    AppComponent,
    PostingSearchComponent,
    NavbarComponent,
    PersonSearchComponent,
    PostingRegisterComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    CalendarModule,
    DataTableModule,
    InputTextareaModule,
    InputTextModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
