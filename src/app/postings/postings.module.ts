import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'primeng/components/datatable/datatable';

import { PostingRegisterComponent } from './posting-register/posting-register.component';
import { PostingSearchComponent } from './posting-search/posting-search.component';
import { PostingGridComponent } from './posting-grid/posting-grid.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/components/button/button';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { FormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    CalendarModule,
    CommonModule,
    CurrencyMaskModule,
    DataTableModule,
    DropdownModule,
    FormsModule,
    InputMaskModule,
    InputTextareaModule,
    InputTextModule,
    SelectButtonModule,
    TooltipModule
  ],
  declarations: [
    PostingGridComponent,
    PostingRegisterComponent,
    PostingSearchComponent,
  ],
  exports: [
    PostingRegisterComponent,
    PostingSearchComponent,
  ]
})
export class PostingsModule { }
