import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { JogoDetailsPage } from './jogodetails.page';

const routes: Routes = [
  {
    path: '',
    component: JogoDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [JogoDetailsPage]
})
export class JogoDetailsPageModule {}
