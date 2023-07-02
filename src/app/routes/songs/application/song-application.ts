import { Inject, Injectable } from "@angular/core";
import { SongInfrastructure } from "../infrastructure/song-infrastructure";
import { SongRepository } from "../domain/repositories/song-repository";
import { SongEntity } from "../domain/entities/song-entity";

@Injectable()
export class SongApplication {

  constructor(@Inject(SongInfrastructure) private readonly songRepository: SongRepository) {}

  insert(entity: Partial<SongEntity>) {
    return this.songRepository.insert(entity);
  }

  delete(id: number) {
    return this.songRepository.delete(id);
  }

}
