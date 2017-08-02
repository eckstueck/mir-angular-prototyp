import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetaComponent }  from './meta/meta.component';
import { StartComponent } from './start/start.component';
import { SearchComponent } from './search/search.component';

const appRoutes: Routes = [
  { path: 'mir/:docId', component: MetaComponent },
  { path: 'mir', component: StartComponent },
  { path: '', component: StartComponent },
  { path: 'search', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }