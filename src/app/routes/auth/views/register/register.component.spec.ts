import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthApplication } from '../../application/auth-application';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let mockAuthApplication: any;

  beforeEach(async () => {

    mockAuthApplication = jasmine.createSpyObj('AuthApplication', ['register']);

    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [ReactiveFormsModule],
      providers: [
        FormBuilder,
        { provide: AuthApplication, useValue: mockAuthApplication }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the register method of AuthApplication when the form is submitted and valid', () => {
    const mockFormData = {
      email: 'test@example.com',
      password: 'testpassword',
      photo: 'testphoto',
      first_name: 'Test',
      last_name: 'User'
    };

    component.reactiveForm.patchValue(mockFormData);
    component.send();

    expect(component.reactiveForm.valid).toBe(true);
    expect(mockAuthApplication.register).toHaveBeenCalledWith(mockFormData);
  });

  it('should not call the register method of AuthApplication when the form is submitted and invalid', () => {
    component.reactiveForm.patchValue({ email: '', password: '', photo: '', first_name: '', last_name: '' });
    component.send();

    expect(component.reactiveForm.valid).toBe(false);
    expect(mockAuthApplication.register).not.toHaveBeenCalled();
  });
});
