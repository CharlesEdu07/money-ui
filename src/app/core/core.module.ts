import { CommonModule } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';

import { NavbarComponent } from './navbar/navbar.component';

import { ErrorHandlerService } from './error-handler.service';
import { PersonService } from 'app/persons/person.service';
import { PostingService } from 'app/postings/posting.service';

import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';

import { ConfirmationService } from 'primeng/components/common/confirmationservice';

import { ToastyModule } from 'ng2-toasty';
import { CategoryService } from 'app/categories/category.service';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
import { Title } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    ConfirmDialogModule,
    RouterModule,
    ToastyModule.forRoot(),
  ],
  declarations: [NavbarComponent, PageNotFoundComponent],
  exports: [
    ConfirmDialogModule,
    NavbarComponent,
    ToastyModule
  ],
  providers: [
    CategoryService,
    ConfirmationService,
    ErrorHandlerService,
    PersonService,
    PostingService,
    Title,
    { provide: LOCALE_ID, useValue: 'pt' }
  ]
})
export class CoreModule { }
