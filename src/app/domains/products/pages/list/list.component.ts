import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';
import { ProductComponent } from '@products/components/product/product.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.model';

//import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent, RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export default class ListComponent {

  products = signal<Product[]>([]);
  //cart = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);
  @Input() category_id?: string;


  // constructor() {
  //   const initProducts: Product[]  = [
  //     {
  //       id: uuidv4(),
  //       title: 'Pro 1',
  //       price: 100,
  //       image: `https://picsum.photos/640/640?r= + ${Math.random()}`,
  //       creationAt: new Date().toISOString()
  //     },
  //     {
  //       id: uuidv4(),
  //       title: 'Pro 2',
  //       price: 100,
  //       image: `https://picsum.photos/640/640?r= + ${Math.random()}`,
  //       creationAt: new Date().toISOString()
  //     },
  //     {
  //       id: uuidv4(),
  //       title: 'Pro 3',
  //       price: 100,
  //       image: `https://picsum.photos/640/640?r= + ${Math.random()}`,
  //       creationAt: new Date().toISOString()
  //     },
  //     {
  //       id: uuidv4(),
  //       title: 'Pro 4',
  //       price: 100,
  //       image: `https://picsum.photos/640/640?r= + ${Math.random()}`,
  //       creationAt: new Date().toISOString()
  //     },
  //     {
  //       id: uuidv4(),
  //       title: 'Pro 5',
  //       price: 100,
  //       image: `https://picsum.photos/640/640?r= + ${Math.random()}`,
  //       creationAt: new Date().toISOString()
  //     },
  //     {
  //       id: uuidv4(),
  //       title: 'Pro 6',
  //       price: 100,
  //       image: `https://picsum.photos/640/640?r= + ${Math.random()}`,
  //       creationAt: new Date().toISOString()
  //     }
  //   ];
  //   this.products.set(initProducts);
  // }

  // fromChild(event: string) {
  //   console.log('estamos en al padre');
  //   console.log(event);
  // }
  // addToCart(product: Product) {
  //   this.cart.update(prevState => [...prevState, product]);
  // }

  // ngOnInit() {


  //   this.productService.getProducts()
  //   .subscribe({
  //     next: (products) => {
  //       this.products.set(products);
  //     },
  //     error: () => {

  //     }
  //   });
  // }

  // addToCart(product: Product) {
  //   this.cartService.addToCart(product)
  // }
  ngOnInit() {
    this.getCategories();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getProducts();
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product)
  }

  private getProducts() {
    this.productService.getProducts(this.category_id)
    .subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: () => {

      }
    })
  }

  private getCategories() {
    this.categoryService.getAll()
    .subscribe({
      next: (data) => {
        this.categories.set(data);
      },
      error: () => {

      }
    })
  }
}
