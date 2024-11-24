import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CategoryService } from 'app/categories/category.service';
import { ErrorHandlerService } from 'app/core/error-handler.service';
import { Posting } from 'app/core/model';
import { PersonService } from 'app/persons/person.service';
import { PostingService } from '../posting.service';
import { ToastyService } from 'ng2-toasty';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-posting-register',
  templateUrl: './posting-register.component.html',
  styleUrls: ['./posting-register.component.css']
})
export class PostingRegisterComponent implements OnInit {
  id: number;

  postingTypes = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' },
  ];

  categories: any[] = [];
  persons: any[] = [];

  posting = new Posting();

  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private errorHandlerService: ErrorHandlerService,
    private personService: PersonService,
    private postingService: PostingService,
    private router: Router,
    private toastyService: ToastyService) {
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];

    if (this.id) {
      this.loadPosting(this.id);
    }

    this.loadCategories();
    this.loadPersons();
  }

  get isEditing() {
    return Boolean(this.id);
  }

  save(form: FormControl) {
    if (this.isEditing) {
      this.updatePosting(form);
    } else {
      this.createPosting(form);
    }
  }

  createPosting(form: FormControl) {
    this.postingService.save(this.posting)
      .then(createdPostings => {
        this.toastyService.success('Lançamento realizado com sucesso!');

        this.router.navigate(['/postings', createdPostings.id]);
      })
      .catch(error => this.errorHandlerService.handle(error));
  }

  updatePosting(form: FormControl) {
    this.postingService.update(this.id, this.posting)
      .then(posting => {
        this.posting = posting;

        if (this.posting.dueDate) {
          this.posting.dueDate = new Date(`${this.posting.dueDate}T00:00:00`);
        }

        if (this.posting.paymentDate) {
          this.posting.paymentDate = new Date(`${this.posting.paymentDate}T00:00:00`);
        }

        this.toastyService.success('Lançamento alterado com sucesso!');
      })
      .catch(error => this.errorHandlerService.handle(error));
  }

  async loadPosting(id: number) {
    this.postingService.findById(id).then(posting => {
      this.posting = posting;

      if (this.posting.dueDate) {
        this.posting.dueDate = new Date(`${this.posting.dueDate}T00:00:00`);
      }

      if (this.posting.paymentDate) {
        this.posting.paymentDate = new Date(`${this.posting.paymentDate}T00:00:00`);
      }
    }).catch(error => this.errorHandlerService.handle(error));
  }

  async loadCategories() {
    try {
      const savedCategories = await this.categoryService.findAll();

      this.categories = savedCategories.map((category: { categoryName: any; id: any; }) => ({ label: category.categoryName, value: category.id }));
    } catch (error) {
      return this.errorHandlerService.handle(error);
    }
  }

  async loadPersons() {
    try {
      const savedPersons = await this.personService.findAll();

      this.persons = savedPersons.map((person: { personName: any; id: any; }) => ({ label: person.personName, value: person.id }));
    } catch (error) {
      return this.errorHandlerService.handle(error);
    }
  }

  newPosting(form: FormControl) {
    form.reset();

    setTimeout(function () {
      this.posting = new Posting();
    }.bind(this), 1);

    this.router.navigate(['/postings/register']);
  }
}
