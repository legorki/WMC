import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { MessageComponent } from "../message/message.component";
import { CommonModule } from "@angular/common";
import { AppComponent } from "./app.component";
import { AuthorComponent } from "../author/author.component";
import { FormsModule } from "@angular/forms";
import {RouterOutlet} from "@angular/router";
import { MaterialModule } from './material.module';
import {AuthorDetailComponent} from "../author-detail/author-detail.component";

@NgModule({
  declarations: [
    AuthorComponent,
    MessageComponent,
  ],
  imports: [
    AppComponent,
    HttpClientModule,
    CommonModule,
    FormsModule,
    RouterOutlet,
    MaterialModule,
    AuthorDetailComponent
  ],
  providers: [],
  exports: [
    MessageComponent,
    AuthorComponent
  ],
  bootstrap: [AppComponent] // Bootstrap with AppComponent
})
export class AppModule { }
