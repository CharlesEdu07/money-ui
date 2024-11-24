import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { PostingsModule } from './postings/postings.module';
import { PersonsModule } from './persons/persons.module';
import { CategoriesModule } from './categories/categories.module';
import { RouterModule, Routes } from '@angular/router';
import { PostingSearchComponent } from './postings/posting-search/posting-search.component';
import { PostingRegisterComponent } from './postings/posting-register/posting-register.component';
import { PersonSearchComponent } from './persons/person-search/person-search.component';
import { PersonRegisterComponent } from './persons/person-register/person-register.component';

const routes: Routes = [
  { path: '', redirectTo: '/postings', pathMatch: 'full' },

  { path: 'postings', component: PostingSearchComponent },
  { path: 'postings/register', component: PostingRegisterComponent },
  { path: 'postings/:id', component: PostingRegisterComponent },

  { path: 'persons', component: PersonSearchComponent },
  { path: 'persons/register', component: PersonRegisterComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CategoriesModule,
    CoreModule,
    HttpModule,
    PersonsModule,
    PostingsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
