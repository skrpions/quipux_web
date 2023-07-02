import { Inject, Injectable } from "@angular/core";
import { PlaylistInfrastructure } from "../infrastructure/playlist-infrastructure";
import { PlaylistRepository } from "../domain/repositories/playlist-repository";
import { PlaylistEntity } from "../domain/entities/playlist-entity";

@Injectable()
export class PlaylistApplication {
  constructor(@Inject(PlaylistInfrastructure) private readonly playlistRepository: PlaylistRepository) {}

  list() {
    return this.playlistRepository.list();
  }

  listOne(name: string) {
    return this.playlistRepository.listOne(name);
  }

  insert(playlist: Partial<PlaylistEntity>) {
    return this.playlistRepository.insert(playlist);
  }

  delete(name: string) {
    return this.playlistRepository.delete(name);
  }

}
