import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';
import { StateService } from '../state/state.service';
import { ApiService } from '../state/api.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  public mensaje : string = ''


  FormMensaje:FormGroup;

  constructor(private fb:FormBuilder,private router:Router, private servicio :StateService, private rmapi: ApiService) {

    this.servicio.getmensaje.subscribe((mensaje)=> {this.mensaje= mensaje})

    this.FormMensaje = this.fb.group(
      {
        Mensaje: [''],

        }
        );

   }

  ngOnInit(): void {

    this.rmapi.getFilms().subscribe(
      (data) => {
        console.log(data);
        localStorage.setItem('Films', JSON.stringify(data.result))
      }
    )

  }

  // getPowerStats(){
  //   const data = localStorage.getItem('Powerstats');
  //   const result = JSON.parse(data);
  //   return result;
  // }









  RecuperarMensaje(){

    const mensaje = {
      mensaje  : this.FormMensaje.get('Mensaje')?.value
    }
   
    this.servicio.setmensaje = mensaje.mensaje
    console.log(mensaje)
    // this.router.navigate(['/index'])
  }

 

}
