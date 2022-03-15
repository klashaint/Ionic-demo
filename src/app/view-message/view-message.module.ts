/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { AngularKlashaModule } from 'angular-klasha';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewMessagePage } from './view-message.page';

import { IonicModule } from '@ionic/angular';

import { ViewMessagePageRoutingModule } from './view-message-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngularKlashaModule.forRoot('W2mbGtdx5vKCepFaUm2CqdzebaVW9z22shubB4xFbKTR3g4sL72+7qNQYHTUEfs0my1e/hAO1Nkdx9YbXTjUOg==','businessId',false),
    ViewMessagePageRoutingModule
  ],
  declarations: [ViewMessagePage]
})
export class ViewMessagePageModule {}
