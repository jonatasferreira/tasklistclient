import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user.service';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SitebodyComponent } from './sitebody/sitebody.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavbarComponent,
    SitebodyComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClientModule, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
