import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { RecuperarMensajeComponent } from "./recuperar-mensaje.component";

@NgModule({

    imports: [
        CommonModule,
        IonicModule,
    ],
    declarations: [RecuperarMensajeComponent],
    exports: [RecuperarMensajeComponent]


})

export class RecuperarMensajeModule{
    
}