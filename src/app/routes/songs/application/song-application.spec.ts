import { TestBed } from '@angular/core/testing';

import { SongApplication } from './song-application';
import { SongEntity } from '../domain/entities/song-entity';
import { SongRepository } from '../domain/repositories/song-repository';

describe("SongApplication", () => {
  let songApplication: SongApplication;
  let songRepositorySpy: jasmine.SpyObj<SongRepository>;

  beforeEach(() => {
    // Crear un objeto espía (spy) para SongRepository
    songRepositorySpy = jasmine.createSpyObj<SongRepository>("SongRepository", ["insert", "delete"]);

    // Inicializar SongApplication con el objeto espía de SongRepository
    songApplication = new SongApplication(songRepositorySpy);
  });

  it("Should call the insert method of the SongRepository when inserting a song", () => {
    const song = { /* datos de la canción */ };

    // Llamar al método insert de SongApplication
    songApplication.insert(song);

    // Verificar que el método insert de SongRepository fue llamado con los argumentos correctos
    expect(songRepositorySpy.insert).toHaveBeenCalledWith(song);
  });

  it("Should call delete method of SongRepository when deleting a song", () => {
    const songId = 42;

    // Llamar al método delete de SongApplication
    songApplication.delete(songId);

    // Verificar que el método delete de SongRepository fue llamado con el argumento correcto
    expect(songRepositorySpy.delete).toHaveBeenCalledWith(songId);
  });
});
