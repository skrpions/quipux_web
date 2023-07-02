import { Observable } from "rxjs";
import { SongEntity } from "../entities/song-entity";

export interface SongRepository {
  insert(song: Partial<SongEntity>): Observable<SongEntity>;
  delete(id: number): Observable<any>;
}
