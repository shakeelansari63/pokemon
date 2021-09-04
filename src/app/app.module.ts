import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './modules/app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DxUiModule } from './modules/dx-ui.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PokemonGridComponent } from './components/pokemon-grid/pokemon-grid.component';
import { FooterComponent } from './components/footer/footer.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';

import { PokeapiService } from './services/pokeapi.service';
import { ApiInterceptorService } from './services/api-interceptor.service'
import { TitleCasePipe } from './pipes/title-case.pipe';
import { NameFormatPipe } from './pipes/name-format.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonGridComponent,
    TitleCasePipe,
    FooterComponent,
    PokemonDetailComponent,
    NameFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DxUiModule,
    FontAwesomeModule
  ],
  providers: [
    PokeapiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
