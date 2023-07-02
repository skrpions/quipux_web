import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { StorageApplication } from "../../auth/application/storage-application";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { PlaylistEntity } from "../domain/entities/playlist-entity";

@Injectable()
export class PlaylistInfrastructure {

 constructor( private readonly http: HttpClient){}

  list(): Observable<PlaylistEntity[]> {
    return this.http.get<PlaylistEntity[]>(`${environment.apiPath}/lists`);
  }

  listOne(namePlaylist: string): Observable<PlaylistEntity>{
    return this.http.get<PlaylistEntity>(`${environment.apiPath}/lists/${namePlaylist}`);
  }

  insert(playlist: Partial<PlaylistEntity>): Observable<PlaylistEntity> {
    return this.http.post<PlaylistEntity>(`${environment.apiPath}/`, playlist);
  }

  delete(playlistName: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiPath}/${playlistName}`);
  }



  /* list(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiPath}/lists`, {
      headers: { authorization: 'Bearer ' + this.token },
    });
  } */

}
