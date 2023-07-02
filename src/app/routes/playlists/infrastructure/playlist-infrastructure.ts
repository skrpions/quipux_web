import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { StorageApplication } from "../../auth/application/storage-application";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class PlaylistInfrastructure {

 constructor( private readonly http: HttpClient){}

  list(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiPath}/lists`);
  }
  /* list(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiPath}/lists`, {
      headers: { authorization: 'Bearer ' + this.token },
    });
  } */

}
