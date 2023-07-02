import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, mergeMap, retry, throwError } from 'rxjs';
import { StorageApplication } from 'src/app/routes/auth/application/storage-application';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private readonly storageApplication: StorageApplication
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //Obtengo el accesstoken
    const accessToken = this.storageApplication.getField('token');

    // Clonar la petición y agregarle la autorización
    const clonedRequest = request.clone({
      headers: request.headers.append('Authorization', 'Bearer' + accessToken),
    });

    // Le indico al interceptor que continue su camino hacia el backend
    return next.handle(clonedRequest);
  }


}
