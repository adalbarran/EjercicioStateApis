import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  mensaje:BehaviorSubject<string> = new BehaviorSubject('')

  get getmensaje(){
    return  this.mensaje.asObservable();
  }

  set setmensaje( mensaje: string){
    this. mensaje.next( mensaje)
  }

  


  constructor() { }



}
