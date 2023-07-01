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

  register(data: any) {
    this.authRepository.register(data).subscribe({
      next: this.userRegistered.bind(this),
      error: this.showMessageError,
    });
  }

  login(auth: any) {
    this.authRepository.login(auth).subscribe({
      next: this.userAuthenticated.bind(this),
      error: this.showMessageError,
    });
  }

  private userRegistered(response: any) {
    console.log('User added', response);
    this.router.navigateByUrl('/login');
  }

  private userAuthenticated(response: TokenEntity) {
    console.log('✅ Teto', response);

    //this.storageRepository.setStorage('accessToken', response.token);
    this.storageRepository.setStorage('token', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJza3NtYXJ0aW5lekBnbWFpbC5jb20iLCJpYXQiOjE2ODgyMzcyNjUsImV4cCI6MTY4ODI4MDQ2NX0.pjw-YEmWOBYyBW1EVRSpLGT9TPSkzPcIvQltoR_53nBLwUW8kluVZDsjfZXiluNRBXRBgP_8lbCKheosLNTugA');


    this.userLogged = true;
    this.router.navigateByUrl('/register');
  }

  private showMessageError(error: any) {
    console.log('Error: ', error);
  }

  get isUserLogged(): boolean {
    const accessToken = this.storageRepository.getStorage('token');

    return !!accessToken || this.userLogged;
  }

  logout() {
    this.userLogged = false;
    this.storageRepository.clear();
    //this.router.navigate(['/auth/login']);
    this.router.parseUrl('/auth/login');
  }

}
