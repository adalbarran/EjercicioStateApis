import { Component, OnInit } from '@angular/core';
import { StateService } from '../state/state.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  public mensaje : string = ''


  constructor(private servicio :StateService) {

    this.servicio.getmensaje.subscribe((mensaje)=> {this.mensaje= mensaje})
    
   }

  ngOnInit() {
  }

  RecuperarMensaje(){

  }

}
