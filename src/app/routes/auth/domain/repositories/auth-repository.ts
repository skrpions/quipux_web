import { Observable } from "rxjs";
import { TokenEntity } from "../entities/token-entity";
import { AuthEntity } from "../entities/auth-entity";
import { RegisterEntity } from "../entities/register-entity";

export interface AuthRepository {
  register(data: RegisterEntity): Observable<any>;
  login(auth: AuthEntity): Observable<TokenEntity>;
}
