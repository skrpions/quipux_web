import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { StorageApplication } from "../../auth/application/storage-application";
import { Observable } from "rxjs";
import { SongEntity } from "../domain/entities/song-entity";
import { environment } from "src/environments/environment";

@Injectable()
export class SongInfrastructure {
  private token = this.storageApplication.getField('token');
  /* private accessToken =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2ODMyNTk3NzcsImV4cCI6MTY4MzI2MDM3NywibmFtZSI6IlNlcmdpbyBIaWRhbGdvIiwiZW1haWwiOiJzZXJnaW9AY29ycmVvLmNvbSIsInJvbGVzIjpbIkFETUlOIiwiT1BFUkFUT1IiXX0.Hh5R3y3tKeoL6tUUJQt7n837pY-TwOVFn5yYVKCEaOc'; */

  constructor(
    private readonly http: HttpClient,
    private readonly storageApplication: StorageApplication
  ) {}

  insert(song: Partial<SongEntity>): Observable<SongEntity> {
    return this.http.post<SongEntity>(`${environment.apiPath}/`, song, {
      headers: { Authorization: 'Bearer ' + this.token },
    });
  }

  delete(id: number): Observable<any> {
    return this.http.delete<SongEntity>(`${environment.apiPath}/${id}`, {
      headers: { Authorization: 'Bearer ' + this.token },
    });
  }

}
