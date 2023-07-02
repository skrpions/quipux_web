import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from './angular-material.module';


const MODULES: any[] = [
  CommonModule,
  RouterModule,
  AngularMaterialModule

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
