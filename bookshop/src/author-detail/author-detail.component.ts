import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import { Author, AuthorService } from "../_service/author.service";

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-author-detail',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {
  @Input() authorDetailForm!: FormGroup;
  @Output() authorChanged = new EventEmitter<Author>();

  constructor(private authorService: AuthorService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.authorDetailForm = this.fb.group({
      id: [''],
      firstname: [''],
      lastname: ['']
    });
  }

  onSave(): void {
    const newAuthor: Author = {
      id: 0,
      firstname: this.authorDetailForm.value.firstname,
      lastname: this.authorDetailForm.value.lastname,
      uuid: this.authorDetailForm.value.id
    };

    if (this.authorDetailForm.value.id === "") {
      this.authorService.addNewAuthor(newAuthor)
    } else {
      this.authorService.updateAuthor(newAuthor)
    }
    this.emitAuthorChanged(newAuthor)
  }

  onNew(): void{
    const newAuthor: Author = {
      id: 0,
      firstname: this.authorDetailForm.value.firstname,
      lastname: this.authorDetailForm.value.lastname,
      uuid: this.authorDetailForm.value.id
    };

    this.authorService.addNewAuthor(newAuthor)
    this.emitAuthorChanged(newAuthor)
  }

  onDelete(): void{
    const newAuthor: Author = {
      id: 0,
      firstname: "",
      lastname: "",
      uuid: ""
    };

    this.authorService.deleteAuthor(this.authorDetailForm.value.id)
    this.emitAuthorChanged(newAuthor)
  }

  onCancel(): void{
    this.authorDetailForm.value.firstname = ""
    this.authorDetailForm.value.lastname = ""
    this.authorDetailForm.value.id = ""
  }

  private emitAuthorChanged(newAuthor: Author): void {
    this.authorChanged.emit(newAuthor)
  }
}
