import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestviewComponent } from './testview.component';

const routes: Routes = [
  {
    path: '',
    component: TestviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestviewRoutingModule { }
