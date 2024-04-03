import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/components/button/button';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';

import { CurrencyMaskModule } from 'ng2-currency-mask';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PersonSearchComponent } from './person-search/person-search.component';
import { PostingRegisterComponent } from './posting-register/posting-register.component';
import { PostingSearchComponent } from './posting-search/posting-search.component';
import { PersonRegisterComponent } from './person-register/person-register.component';

@NgModule({
  declarations: [
    AppComponent,
    PostingSearchComponent,
    NavbarComponent,
    PersonSearchComponent,
    PostingRegisterComponent,
    PersonRegisterComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    CalendarModule,
    CurrencyMaskModule,
    DropdownModule,
    DataTableModule,
    FormsModule,
    InputMaskModule,
    InputTextareaModule,
    InputTextModule,
    SelectButtonModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
