import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppModule } from "./app.module";
import { MatListModule } from '@angular/material/list';
import {NgForOf} from "@angular/common";
import {AuthorDetailComponent} from "../author-detail/author-detail.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HttpClientModule,
    RouterOutlet,
    AppModule,
    MatListModule,
    NgForOf,
    AuthorDetailComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookshop';
}
