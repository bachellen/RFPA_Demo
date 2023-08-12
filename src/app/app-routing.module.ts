import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentFormComponent } from './document-form/document-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'document-form', pathMatch: 'full' },
  { path: 'document-form', component: DocumentFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
