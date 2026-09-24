import { Component } from '@angular/core';
import { Catalog } from '../../../service/catalog';
@Component({
  selector: 'app-product-catalog-component',
  standalone: false,
  styleUrl: './product-catalog-component.css',
  templateUrl: './product-catalog-component.html',
})
export class ProductCatalogComponent {

  datas: any[] = [];

  constructor(private catalogService: Catalog) {
    this.datas = this.catalogService.getCategories();
  }

}