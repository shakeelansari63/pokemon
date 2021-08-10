import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './modules/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DxUiModule } from './modules/dx-ui.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PokemonGridComponent } from './components/pokemon-grid/pokemon-grid.component';

import { PokeapiService } from './services/pokeapi.service';
import { TitleCasePipe } from './pipes/title-case.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonGridComponent,
    TitleCasePipe,
    FooterComponent,
    PokemonDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DxUiModule
  ],
  providers: [PokeapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
