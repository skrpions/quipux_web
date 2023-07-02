import { Component } from '@angular/core';
import { PlaylistApplication } from '../../application/playlist-application';
import { PlaylistEntity } from '../../domain/entities/playlist-entity';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-playlists',
  templateUrl: './list-playlists.component.html',
  styleUrls: ['./list-playlists.component.css']
})
export class ListPlaylistsComponent {

  filtro = '';
  reactiveForm!: FormGroup;
  dataSource:PlaylistEntity[] = [];
  listas: PlaylistEntity[] = [
    {
      "id": 8,
      "nombreLista": "Test 5",
      "descripcion": "Test 5",
      "songs": [
        {
          "id": 15,
          "titulo": "despacito",
          "artista": "no se",
          "album": "oe",
          "anno": "2020",
          "genero": "reggeton"
        }
      ],
      "location": null
    },
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
    }
  ];

  constructor(private fb: FormBuilder,  private readonly playlistApplication: PlaylistApplication){
    //this.getAll();
  }

  ngOnInit(): void {

    this.initForm();
  }

  private initForm(): void {
    this.reactiveForm = this.fb.nonNullable.group({
      nombreLista: ['Cumbia', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]],
      descripcion: ['Musica Cumbia', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]],
    });
  }

  private getAll() {
    this.playlistApplication.list().subscribe({
      next: data => {

        this.dataSource = data;
        console.log('this.dataSource', this.dataSource);

      },
    });
  }

  addPlaylist() {

    const nuevaPlaylist = {
      nombreLista: this.reactiveForm.value.nombreLista,
      descripcion: this.reactiveForm.value.descripcion,
      songs: [],
      location: null
    };

    this.listas.unshift(nuevaPlaylist);
  }

  deletePlaylist(namePlaylist: any) {
    console.log('namePlaylist: ', namePlaylist);

    // Eliminar la lista del arreglo utilizando el índice proporcionado
    this.listas.splice(namePlaylist, 1);

    // Producción
    //this.playlistApplication.delete(namePlaylist);
  }
}
