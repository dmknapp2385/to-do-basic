import { NgModule } from '@angular/core';
//imports: must be added to imports array in @NgModule
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // angular requests to server
import { AppRoutingModule } from './app-routing.module';  // angular routing capabiliteis

// angular-in-memory-web-api for testing
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

//components and services: added to declarations in @NgModule
import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { SingleTaskComponent } from './single-task/single-task.component';

@NgModule({
  declarations: [AppComponent, AddTaskComponent, SingleTaskComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
 