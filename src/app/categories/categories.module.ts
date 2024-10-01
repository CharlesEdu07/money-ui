import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'app/shared/shared.module';
import { ButtonModule } from 'primeng/components/button/button';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { CategoryGridComponent } from './category-grid/category-grid.component';
import { CategoryRegisterComponent } from './category-register/category-register.component';
import { CategorySearchComponent } from './category-search/category-search.component';

@NgModule({
  imports: [
    ButtonModule,
    CommonModule,
    DataTableModule,
    FormsModule,
    InputMaskModule,
    InputTextModule,
    SharedModule,
    TooltipModule
  ],
  declarations: [
    CategoryGridComponent,
    CategoryRegisterComponent,
    CategorySearchComponent
  ],
  exports: [
    CategoryRegisterComponent,
    CategorySearchComponent
  ]
})
export class CategoriesModule { }
