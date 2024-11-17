import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

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

import { PostingGridComponent } from './posting-grid/posting-grid.component';
import { PostingRegisterComponent } from './posting-register/posting-register.component';
import { PostingSearchComponent } from './posting-search/posting-search.component';
import { RouterModule } from '@angular/router';

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
