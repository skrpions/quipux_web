interface SongEssentials {
  titulo: string;
  artista: string;
  album: string;
  anno: string;
  genero: string;
}

interface SongOptionals {
  id: string;
  idListaDeReproduccion: number;
}

export type SongEntity = Required<SongEssentials> & Partial<SongOptionals>;
