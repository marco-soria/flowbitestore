import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './../../components/product/product.component';
import { HeaderComponent } from './../../../shared/components/header/header.component';
import { Product } from './../../../shared/models/product.model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  products = signal<Product[]>([]);
  cart = signal<Product[]>([]);


  constructor() {
    const initProducts: Product[]  = [
      {
        id: uuidv4(),
        title: 'Pro 1',
        price: 100,
        image: `https://picsum.photos/640/640?r= + ${Math.random()}`,
        creationAt: new Date().toISOString()
      },
      {
        id: uuidv4(),
        title: 'Pro 2',
        price: 100,
        image: `https://picsum.photos/640/640?r= + ${Math.random()}`,
        creationAt: new Date().toISOString()
      },
      {
        id: uuidv4(),
        title: 'Pro 3',
        price: 100,
        image: `https://picsum.photos/640/640?r= + ${Math.random()}`,
        creationAt: new Date().toISOString()
      },
      {
        id: uuidv4(),
        title: 'Pro 4',
        price: 100,
        image: `https://picsum.photos/640/640?r= + ${Math.random()}`,
        creationAt: new Date().toISOString()
      },
      {
        id: uuidv4(),
        title: 'Pro 5',
        price: 100,
        image: `https://picsum.photos/640/640?r= + ${Math.random()}`,
        creationAt: new Date().toISOString()
      },
      {
        id: uuidv4(),
        title: 'Pro 6',
        price: 100,
        image: `https://picsum.photos/640/640?r= + ${Math.random()}`,
        creationAt: new Date().toISOString()
      }
    ];
    this.products.set(initProducts);
  }

  // fromChild(event: string) {
  //   console.log('estamos en al padre');
  //   console.log(event);
  // }
  addToCart(product: Product) {
    this.cart.update(prevState => [...prevState, product]);
  }
}
