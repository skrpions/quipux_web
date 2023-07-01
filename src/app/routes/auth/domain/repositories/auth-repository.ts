import { Observable } from "rxjs";
import { TokenEntity } from "../entities/token-entity";
import { AuthEntity } from "../entities/auth-entity";

export interface AuthRepository {
  login(auth: AuthEntity): Observable<TokenEntity>;
}
