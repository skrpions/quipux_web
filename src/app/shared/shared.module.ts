import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';


const MODULES: any[] = [
  CommonModule,

];
const COMPONENTS: any[] = [
  SidebarComponent
];

const DIRECTIVES: any[] = [];
const PIPES: any[] = [];

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES, ...PIPES],
  imports: [...MODULES],
  exports: [...MODULES, ...COMPONENTS, ...DIRECTIVES, ...PIPES],
})
export class SharedModule { }
