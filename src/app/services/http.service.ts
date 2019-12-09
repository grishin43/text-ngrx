import {Injectable, Injector} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TranslateLoader} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService implements TranslateLoader {

  constructor(
    private http: HttpClient,
    private injector: Injector) {
  }

  getTranslation(lang: string): Observable<any> {
    const http = this.injector.get(HttpClient);
    return http.get(`./assets/json/translates/${lang}.json`);
  }
}
