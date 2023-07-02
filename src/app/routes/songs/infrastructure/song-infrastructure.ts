import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SongEntity } from "../domain/entities/song-entity";
import { environment } from "src/environments/environment";

@Injectable()
export class SongInfrastructure {

  constructor(private readonly http: HttpClient) {}

  insert(song: Partial<SongEntity>): Observable<SongEntity> {
    return this.http.post<SongEntity>(`${environment.apiPath}/`, song);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${environment.apiPath}/${id}`);
  }

}
