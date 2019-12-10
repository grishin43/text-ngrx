import {Injectable, Injector} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TranslateLoader} from '@ngx-translate/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService implements TranslateLoader {

  constructor(
    private http: HttpClient,
    private injector: Injector) {
  }

  getFilters(lang: string): Observable<any> {
    return this.http.get(`./assets/json/translates/${lang}.json`).pipe(map((data: any) => {
      return data.admin.products.filters;
    }));
  }

  getTranslation(lang: string): Observable<any> {
    const http = this.injector.get(HttpClient);
    return http.get(`./assets/json/translates/${lang}.json`);
  }

  getProducts(lang: string): Observable<any> {
    return this.http.get(`./assets/json/translates/${lang}.json`).pipe(map((data: any) => {
      return data.admin.products.list.map((product: any) => {
        return {
          id: product.id,
          image: product.image,
          name: product.name,
          author: product.author,
          publisher: product.publisher,
          publisherId: product.publisher_id,
          category: product.category,
          categoryId: product.category_id,
          pageCount: product.page_count,
          price: product.price,
          stock: product.stock
        };
      });
    }));
  }
}
