import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { AuthRepository } from "../domain/repositories/auth-repository";
import { Observable } from "rxjs";
import { AuthEntity } from "../domain/entities/auth-entity";
import { environment } from 'src/environments/environment';
import { RegisterEntity } from '../domain/entities/register-entity';

@Injectable()
export class AuthInfrastructure implements AuthRepository {

  constructor(private http: HttpClient) { }

  register(data: RegisterEntity): Observable<any> {
    return this.http.post<any>(`${environment.apiPath}/auth/register`, data);
  }

  login(auth: AuthEntity): Observable<any> {
    return this.http.post<any>(`${environment.apiPath}/auth/login`, auth);
  }

}
