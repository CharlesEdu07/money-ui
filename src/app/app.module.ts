import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/components/button/button';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';

import { PostingsModule } from './postings/postings.module';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PersonGridComponent } from './person-grid/person-grid.component';
import { PersonRegisterComponent } from './person-register/person-register.component';
import { PersonSearchComponent } from './person-search/person-search.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    NavbarComponent,
    PersonRegisterComponent,
    PersonSearchComponent,
    PersonGridComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    CalendarModule,
    DataTableModule,
    DropdownModule,
    FormsModule,
    InputMaskModule,
    InputTextareaModule,
    InputTextModule,
    PostingsModule,
    SelectButtonModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
