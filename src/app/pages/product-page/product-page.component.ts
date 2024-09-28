import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
})
export class ProductPageComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  productId: string | null = '';

  product: IProduct = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: {
      rate: 0,
      count: 0,
    },
  };
  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.getData();
  }

  async getData() {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${this.productId}`
    );
    this.product = response.data;
  }
  addToCart(product: {
    id: number;
    image: string;
    title: string;
    count: number;
  }) {
    if (localStorage.getItem('cart')) {
      const cart = JSON.parse(localStorage.getItem('cart') || '');
      // check if the product is not exists
      cart.forEach((e: any) => {
        if (e.id == product.id) {
          cart[cart.findIndex((i: any) => i.id == product.id)].count += 1;
          localStorage.setItem('cart', JSON.stringify(cart));
        } else {
          cart.push(product);
          localStorage.setItem('cart', JSON.stringify(cart));
        }
      });
    } else {
      const cart = [];
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }
}
