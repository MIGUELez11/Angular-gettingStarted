import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LearningAngularComponent } from './learning-angular/learning-angular.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import {NameTransferService} from "./name-transfer.service";

@NgModule({
  declarations: [
    AppComponent,
    LearningAngularComponent,
    ParentComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    NameTransferService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
