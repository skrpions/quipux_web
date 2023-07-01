import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  mainMenu: { defaultOptions: any[], accessLink: any[] } = { defaultOptions: [], accessLink: [] }

  customOptions: any[] = []

  constructor() { }

  ngOnInit(): void {

      this.mainMenu.defaultOptions = [
          {
              name: 'Home',
              icon: 'uil uil-estate',
              router: ['/', 'favorites']
          },
         /*  {
              name: 'Buscar',
              icon: 'uil uil-search',
              router: ['/', 'history']
          } */
      ]

      this.mainMenu.accessLink = [
          {
              name: 'Crear lista',
              icon: 'uil-plus-square',
              router: ['/', 'playlist']
          }
      ]

      this.customOptions = [
          {
              name: 'Mi lista º1',
              router: ['/']
          },
          {
              name: 'Mi lista º2',
              router: ['/']
          },
          {
              name: 'Mi lista º3',
              router: ['/']
          },
          {
              name: 'Mi lista º4',
              router: ['/']
          }
      ]

  }

}
