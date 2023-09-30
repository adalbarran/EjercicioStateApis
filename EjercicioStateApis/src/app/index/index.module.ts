import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexPageRoutingModule } from './index-routing.module';

import { IndexPage } from './index.page';

import { HttpClientModule} from '@angular/common/http';

import { RecuperarMensajeModule } from '../recuperar-mensaje/recuperar-mensaje.module';
import { ApiService } from '../state/api.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexPageRoutingModule,
    ReactiveFormsModule,
    RecuperarMensajeModule,
    HttpClientModule

  ],
  declarations: [IndexPage],
  providers: [ApiService]
})
export class IndexPageModule {}
