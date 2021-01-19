import { AppErrorHandler } from './app-error-handler';
import { ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { menuServices } from './services/menu.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TitleCasePipe } from './title-case.pipe';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PostService } from './services/post.service';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TitleCasePipe,
    ContactFormComponent,
    SignupFormComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    menuServices,
    PostService,
    {
      provide:ErrorHandler,
      useClass:AppErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
