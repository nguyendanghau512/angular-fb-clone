import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewfeedComponent } from './pages/newfeed/newfeed.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'newfeed'
  },
  {
    path: 'newfeed',
    component: NewfeedComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../modules/home/home.module').then(m => m.HomeModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
