import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';

export const routes: Routes = [
    {path: "" , component: HomePageComponent},
    {path: "cart" , component: CartPageComponent},
    {path: "checkout" , component: CheckoutPageComponent},
    {path: ":id" , component: ProductPageComponent},
    {path: "**" , component: NotfoundPageComponent}
];
