import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../core/models/Product';
import { Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { apiUrl } from '../../core/config/api-configuration';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  products$: Observable<Product[]> = of([]);

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.products$ = this.http.get<Product[]>(`${apiUrl}/products`);
  }
}
