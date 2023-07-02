import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlaylistApplication } from '../../application/playlist-application';
import { SongApplication } from 'src/app/routes/songs/application/song-application';
import { ActivatedRoute } from '@angular/router';
import { PlaylistEntity } from '../../domain/entities/playlist-entity';
import { SongEntity } from 'src/app/routes/songs/domain/entities/song-entity';

@Component({
  selector: 'app-detail-playlist',
  templateUrl: './detail-playlist.component.html',
  styleUrls: ['./detail-playlist.component.css']
})
export class DetailPlaylistComponent {

  filtro = '';
  reactiveForm!: FormGroup;
  playlistName: string = '' ;
  playlist: PlaylistEntity =
    {
      "id": 30,
      "nombreLista": "Electrónica",
      "descripcion": "Lista de Música Electrónica",
      "songs": [
        {
          "id": 41,
          "titulo": "Getting Over",
          "artista": "David Guetta",
          "album": "One Love",
          "anno": "2001",
          "genero": "electronica"
        },
        // ...otros elementos de la lista
      ],
      "location": null
    };
  songs: SongEntity[] = [];

  constructor(private fb: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly playlistApplication: PlaylistApplication,
    private readonly songApplication: SongApplication){

  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      console.log('params: ', params);
      // Accede a los parámetros de la ruta
      this.playlistName = params['id']; // 'id' es el nombre del parámetro en la ruta

    });

    this.initForm();
    // Quemado
    this.songs = this.playlist.songs; // TODO: Descomentar la linea de producción cuando no haya error de CORS

    // Producción
    //this.getSongsByPlaylist();
  }

  private initForm(): void {
    this.reactiveForm = this.fb.nonNullable.group({
      titulo: ['Botella', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      artista: ['Cristian Nodal', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      album: ['Xsa', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      anno: ['2022', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
      genero: ['Reguetton', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]],
    });
  }

  private getSongsByPlaylist() {
    this.playlistApplication.listOne(this.playlistName).subscribe({
      next: data => {
        this.songs = data.songs;
      },
    });
  }

  addSong() {

    if (this.reactiveForm.valid) {
      // Quemado
      this.songs.unshift(this.reactiveForm.value);

      // Producción
      //const data = this.reactiveForm.value;
      //this.songApplication.insert(data);
    } else {
      console.log('Form is invalid');
    }
  }

  deleteSong(id: number) {

    console.log('id to delete', id);

    // Eliminar la lista del arreglo utilizando el índice proporcionado
    //this.songs.splice(id, 1);

    // Producción
    this.songApplication.delete(id);
  }

}
