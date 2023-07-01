import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from "@angular/core";
import { AuthRepository } from "../domain/repositories/auth-repository";
import { Observable } from "rxjs";
import { AuthEntity } from "../domain/entities/auth-entity";
import { TokenEntity } from "../domain/entities/token-entity";
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInfrastructure implements AuthRepository {



  constructor(private http: HttpClient) { }

  login(auth: AuthEntity): Observable<any> {
    return this.http.post<any>(`${environment.apiPath}/auth/login`, auth);
  }
}
