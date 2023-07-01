import { Inject, Injectable } from "@angular/core";
import { AuthInfrastructure } from "../infrastructure/auth-infrastructure";
import { AuthRepository } from "../domain/repositories/auth-repository";
import { StorageInfrastructure } from "../infrastructure/storage-infrastructure";
import { StorageRepository } from "../domain/repositories/storage-repository";
import { Router } from "@angular/router";
import { TokenEntity } from "../domain/entities/token-entity";

@Injectable()
export class AuthApplication {
  private userLogged = false;

  constructor(
    @Inject(AuthInfrastructure) private readonly authRepository: AuthRepository,
    @Inject(StorageInfrastructure) private readonly storageRepository: StorageRepository,
    private router: Router
  ) {}

  login(auth: any) {
    this.authRepository.login(auth).subscribe({
      next: this.userAuthenticated.bind(this),
      error: this.showMessageError,
    });
  }

  private userAuthenticated(response: TokenEntity) {
    console.log('✅ Teto', response);

    this.storageRepository.setStorage('accessToken', response.token);


    this.userLogged = true;
    this.router.navigateByUrl('/register');
  }

  private showMessageError(error: any) {
    console.log('Error: ', error);
  }

  get isUserLogged(): boolean {
    const accessToken = this.storageRepository.getStorage('accessToken');

    return !!accessToken || this.userLogged;
  }

  logout() {
    this.userLogged = false;
    this.storageRepository.clear();
    //this.router.navigate(['/auth/login']);
    this.router.parseUrl('/auth/login');
  }

}
