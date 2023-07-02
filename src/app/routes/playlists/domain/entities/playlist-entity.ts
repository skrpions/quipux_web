import { SongEntity } from "src/app/routes/songs/domain/entities/song-entity";

interface PlaylistEssentials {
  nombreLista: string;
  descripcion: string;
  songs: SongEntity[];
  location: any;
}

interface PlaylistOptionals {
  id: number;
}

export type PlaylistEntity = Required<PlaylistEssentials> & Partial<PlaylistOptionals>;
