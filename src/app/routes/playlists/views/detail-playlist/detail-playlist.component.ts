import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlaylistApplication } from '../../application/playlist-application';

@Component({
  selector: 'app-detail-playlist',
  templateUrl: './detail-playlist.component.html',
  styleUrls: ['./detail-playlist.component.css']
})
export class DetailPlaylistComponent {

  filtro = '';
  reactiveForm!: FormGroup;
  dataSource: any[] = [];
  playlist =
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
  songs: any[] = [];

  constructor(private fb: FormBuilder,  private readonly playlistApplication: PlaylistApplication){
    this.getAllSongs();
  }

  ngOnInit(): void {

    this.initForm();

    this.songs = this.playlist.songs;
  }

  private initForm(): void {
    this.reactiveForm = this.fb.nonNullable.group({
      titulo: ['Botella', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]],
      artista: ['Cristian Nodal', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]],
      album: ['Xsa', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]],
      anno: ['2022', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]],
      genero: ['Reguetton', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]],
    });
  }

  private getAllSongs() {
    this.playlistApplication.list().subscribe({
      next: data => {

        this.dataSource = data;
        console.log('this.dataSource', this.dataSource);

      },
    });
  }

  addSong() {
    this.songs.unshift(this.reactiveForm.value);
  }

  deleteSong(index: number) {
    // Eliminar la lista del arreglo utilizando el índice proporcionado
    this.songs.splice(index, 1);
  }

}
