import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { PokeapiService } from './pokeapi.service';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptorService implements HttpInterceptor {

  constructor(private pokeService: PokeapiService) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ) {
    return next.handle(request).pipe(
      tap(event => {
        event.type == 0 && this.pokeService.showLoading(); 
        event.type == 4 && this.pokeService.hideLoading();
      })
    )
  };
}
