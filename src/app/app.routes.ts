import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from '../pages/imprint/imprint.component';

export const routes: Routes = [
 {path:'', component:MainContentComponent},
 {path:'imprint', component:ImprintComponent}
];
