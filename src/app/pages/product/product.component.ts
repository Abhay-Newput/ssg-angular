import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../core/models/Product';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { apiUrl } from '../../core/config/api-configuration';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  product$: Observable<Product>;
  @Input() productId!: number;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.product$ = this.http.get<Product>(`${apiUrl}/products/${this.productId}`);
  }
}
