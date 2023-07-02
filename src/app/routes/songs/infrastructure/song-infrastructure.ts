import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { StorageApplication } from "../../auth/application/storage-application";
import { Observable } from "rxjs";
import { SongEntity } from "../domain/entities/song-entity";
import { environment } from "src/environments/environment";

@Injectable()
export class SongInfrastructure {

  constructor(
    private readonly http: HttpClient,
    private readonly storageApplication: StorageApplication
  ) {}

  insert(song: Partial<SongEntity>): Observable<SongEntity> {
    return this.http.post<SongEntity>(`${environment.apiPath}/`, song);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<SongEntity>(`${environment.apiPath}/${id}`);
  }

}
