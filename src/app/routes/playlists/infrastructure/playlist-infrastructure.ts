import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { StorageApplication } from "../../auth/application/storage-application";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class PlaylistInfrastructure {

  private token =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJza3NtYXJ0aW5lekBnbWFpbC5jb20iLCJpYXQiOjE2ODgyNTkzMjAsImV4cCI6MTY4ODMwMjUyMH0.QmRWh949ywzXG85jFIqZuHkvovgO8j5ejE3U88Qx4aENPy6-9mPYq_c6VOjZhkBvXbS7siyk-Vdyyya-kT-EcA';


 constructor( private readonly http: HttpClient,
  private readonly storageApplication: StorageApplication){}

  list(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiPath}/lists`, {
      headers: { authorization: 'Bearer ' + this.token },
    });
  }

}
