import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxFbChatCloneModule } from 'ngx-fb-chat-clone';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxFbChatCloneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
