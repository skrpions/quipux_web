import { Inject, Injectable } from "@angular/core";
import { PlaylistInfrastructure } from "../infrastructure/playlist-infrastructure";
import { PlaylistRepository } from "../domain/repositories/playlist-repository";

@Injectable()
export class PlaylistApplication {
  constructor(@Inject(PlaylistInfrastructure) private readonly playlistRepository: PlaylistRepository) {}

  list() {
    return this.playlistRepository.list();
  }
}
