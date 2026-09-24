import { Injectable } from '@angular/core';
import { Product } from '../src/app/classes/IProducts';

@Injectable({
  providedIn: 'root'
})
export class Catalog {

  datas = [
    {
      Cateid: 'cate1',
      CateName: 'nuoc ngot',

      Products: <Product[]>[
        {
          id: 1,
          name: 'Coca',
          price: 100,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOXQtM9_3pIb9c4KCWM0-dsDdtRviHFiCKiFTwKexxhg&s=10'
        },
        {
          id: 2,
          name: 'Pepsi',
          price: 300,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeozWjjUuYTLq4BH7nW8sAEkDGeEm5ksVKtMYRnY2STQ&s'
        },
        {
          id: 3,
          name: 'Sting',
          price: 200,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCyWXCBVdysWffNp68S72X-wXGwJdQOKE78b26mNh05Q&s=10'
        }
      ]
    },

    {
      Cateid: 'cate2',
      CateName: 'Bia',

      Products: <Product[]>[
        {
          id: 4,
          name: 'Heleiken',
          price: 500,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZsy8aKT7mTWOvi1MpbQr-dyJ6zYD5cxogEXWbVV2wHg&s'
        },
        {
          id: 5,
          name: '333',
          price: 400,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg4WOQhbHmYx-qo8NJr1leUqh-qiny5YmFCJod6YM1QA&s=10'
        },
        {
          id: 6,
          name: 'Sai Gon',
          price: 600,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnK6Mc7QP8vI0SF7Vvws9kuUMkS8Ywe6FnqGVU9yd8Nw&s=10'
        }
      ]
    }
  ];

  constructor() { }

  getCategories() {
    return this.datas;
  }
}