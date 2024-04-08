import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/components/button/button';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';

import { PersonGridComponent } from './person-grid/person-grid.component';
import { PersonRegisterComponent } from './person-register/person-register.component';
import { PersonSearchComponent } from './person-search/person-search.component';

@NgModule({
  imports: [
    ButtonModule,
    CommonModule,
    DataTableModule,
    FormsModule,
    InputMaskModule,
    InputTextModule,
    TooltipModule
  ],
  declarations: [
    PersonGridComponent,
    PersonRegisterComponent,
    PersonSearchComponent
  ],
  exports: [
    PersonRegisterComponent,
    PersonSearchComponent
  ]
})

export class PersonsModule { }
