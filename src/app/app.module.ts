import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';
import {AuthModule} from './auth/auth.module';
import {BrowserModule} from '@angular/platform-browser';
import {EffectsModule} from '@ngrx/effects';
import {environment} from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {metaReducers, reducers} from './core/store/reducers';
import {NgModule} from '@angular/core';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {TranslateModule, TranslateLoader, TranslateService, LangChangeEvent} from '@ngx-translate/core';
import {HttpService} from './services/http.service';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {FilterPipe} from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({name: 'NgRx Demo', logOnly: environment.production}),
    EffectsModule.forRoot([]),
    TranslateModule.forRoot({
      loader: {provide: TranslateLoader, useClass: HttpService}
    }),
    AngularFontAwesomeModule
  ],
  providers: [],
  exports: [
    FilterPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    public translate: TranslateService) {
    translate.addLangs(['en', 'ru']);
    translate.setDefaultLang('en');
    const browserLang = localStorage.getItem('language') || translate.getBrowserLang();
    translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');

    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      localStorage.setItem('language', translate.currentLang);
    });
  }
}
