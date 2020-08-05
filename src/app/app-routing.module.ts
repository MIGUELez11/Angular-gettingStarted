import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteTestComponent } from './route-test/route-test.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: "",
    component: ParentComponentComponent
  },

  {
    path: "test",
    component: RouteTestComponent
  },
  {
    path: "tst",
    redirectTo: "/test",
    pathMatch: "prefix"
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ParentComponentComponent, RouteTestComponent, PageNotFoundComponent];