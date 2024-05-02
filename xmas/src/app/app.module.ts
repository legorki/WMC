import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmasModule } from './xmas/xmas.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    XmasModule,
    AppComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
