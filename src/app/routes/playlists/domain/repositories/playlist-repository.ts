import { Observable } from "rxjs";
import { PlaylistEntity } from "../entities/playlist-entity";

export interface PlaylistRepository {
  list(): Observable<PlaylistEntity[]>;
  listOne(name: string): Observable<PlaylistEntity>;
  insert(playlist: Partial<PlaylistEntity>): Observable<PlaylistEntity>;
  delete(name: string): Observable<any>;
}
