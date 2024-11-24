import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/components/button/button';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';

import { CurrencyMaskModule } from 'ng2-currency-mask';

import { SharedModule } from 'app/shared/shared.module';

import { PostingRegisterComponent } from './posting-register/posting-register.component';
import { PostingSearchComponent } from './posting-search/posting-search.component';

@NgModule({
  imports: [
    ButtonModule,
    CalendarModule,
    CommonModule,
    CurrencyMaskModule,
    DataTableModule,
    DropdownModule,
    FormsModule,
    InputTextareaModule,
    InputTextModule,
    RouterModule,
    SelectButtonModule,
    SharedModule,
    TooltipModule
  ],
  declarations: [
    PostingRegisterComponent,
    PostingSearchComponent,
  ],
  exports: []
})

export class PostingsModule { }
