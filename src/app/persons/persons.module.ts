import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/components/button/button';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';

import { SharedModule } from 'app/shared/shared.module';

import { PersonGridComponent } from './person-grid/person-grid.component';
import { PersonRegisterComponent } from './person-register/person-register.component';
import { PersonSearchComponent } from './person-search/person-search.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    ButtonModule,
    CommonModule,
    DataTableModule,
    FormsModule,
    InputMaskModule,
    InputTextModule,
    RouterModule,
    SharedModule,
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
