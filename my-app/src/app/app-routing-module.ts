import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCatalogComponent } from './product-catalog-component/product-catalog-component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'product-catalog-component',
    pathMatch: 'full'
  },
  {
    path: 'product-catalog-component',
    component: ProductCatalogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }