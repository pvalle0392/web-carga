import { Injectable } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
@Injectable({
  providedIn: 'root',
})
export class MessagesPrimeService {

constructor(
  private messageServices: MessageService
) { }

  message_Primeng(type,title,text){
    this.messageServices.add({severity:type, summary: title, detail:text})
  }
}
