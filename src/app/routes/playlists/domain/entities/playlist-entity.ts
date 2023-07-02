import { SongEntity } from "src/app/routes/songs/domain/entities/song-entity";

export interface PlaylistEntity {
  id: number;
  nombreLista: string;
  descripcion: string;
  songs: SongEntity[];
  location: any;
}
