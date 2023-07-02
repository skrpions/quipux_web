import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LoginComponent } from './login.component';
import { AuthApplication } from '../../application/auth-application';
import { AuthInfrastructure } from '../../infrastructure/auth-infrastructure';
import { StorageInfrastructure } from '../../infrastructure/storage-infrastructure';
import { StorageApplication } from '../../application/storage-application';

describe('LoginComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [AuthApplication, AuthInfrastructure, StorageApplication, StorageInfrastructure], // Agregar el proveedor para StorageInfrastructure
      imports: [HttpClientTestingModule]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
