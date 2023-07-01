interface RegisterEssentials {
  email: string;
  password: string;
  photo: string;
  first_name: string;
  last_name: string;
}

export type RegisterProperties = Required<RegisterEssentials>;

export class RegisterEntity {

  private email!: string;
  private password!: string;
  private photo!: string;
  private first_name!: string;
  private last_name!: string;


  constructor(properties: RegisterProperties) {
    Object.assign(this, properties);
  }

  properties(): RegisterProperties {
    return {
      email: this.email,
      password: this.password,
      photo: this.photo,
      first_name: this.first_name,
      last_name: this.last_name,
    };
  }
}
