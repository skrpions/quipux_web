import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  private data: any; // Almacenar los datos de traducción

  constructor(private http: HttpClient) {}

  /*
    getData() devuelve una promesa que se resolverá
    una vez que los datos de traducción se hayan cargado correctamente.
  */
  public getData() {
    console.log('Language: ', navigator.language);

    return new Promise((resolve) => {
      const acceptableLanguages = ['es', 'es-419', 'es-ES'];
      const lang = acceptableLanguages.includes(navigator.language)
        ? navigator.language
        : 'en';
      const langTwoChars = lang.substring(0, 2); // 'es'

      this.http
        .get(`assets/translations/${langTwoChars}.json`)
        .subscribe((data: any) => {
          this.data = data;
          resolve(true);
        });
    });
  }

  /*
    Este método devuelve una traducción para una palabra específica.
  */
  public getTranslate(word: string) {
    //console.log('data[word]:', this.data[word]);
    return this.data[word]; // Retorno la Palabra Traducida
  }
}
