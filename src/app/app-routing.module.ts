import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewsInternaComponent } from "./news-interna/news-interna.component";
import { AppComponent } from "./app.component";
import { CuriositiesComponent } from "./curiosities/curiosities.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "noticia/:slug", component: NewsInternaComponent },
  { path: "blog", component: CuriositiesComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}