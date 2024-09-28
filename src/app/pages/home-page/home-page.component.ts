import { Component , OnInit } from '@angular/core';
import axios from 'axios';
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { CommonModule } from '@angular/common';
import { LoadingComponent } from "../../components/loading/loading.component";

interface IProduct {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number,
    count: number
  }
}
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ProductCardComponent, CommonModule, LoadingComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{
  constructor(){}
  data : IProduct[] = []
  isLoading = true
  ngOnInit(): void {
   this.getData()
  }

  async getData() {
    const response = await axios.get("https://fakestoreapi.com/products")
    this.data = response.data
    this.isLoading = false
  }
}
