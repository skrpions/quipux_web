export interface PlaylistEntity {
  id: number;
  nombreLista: string;
  descripcion: string;
  songs: {
    id: number;
    titulo: string;
    artista: string;
    album: string;
    anno: string;
    genero: string;
  }[];
  location: any;
}
