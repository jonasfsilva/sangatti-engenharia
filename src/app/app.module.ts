import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BlogItemsComponent } from "./blog-items/blog-items.component";
import { HttpClientModule } from "@angular/common/http";
import { CleanHtmlPipe } from "./blog-items/clean-html.pipe";
import { NewsInternaComponent } from "./news-interna/news-interna.component";
import { CuriositiesComponent } from "./curiosities/curiosities.component";
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogItemsComponent,
    CleanHtmlPipe,
    NewsInternaComponent,
    CuriositiesComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
