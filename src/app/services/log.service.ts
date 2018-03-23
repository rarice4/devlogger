import { Injectable } from '@angular/core';
import { Log } from '../models/Log'
@Injectable()
export class LogService {
logs:Log[];
  constructor() {
    this.logs = [
      {id:'1', text: 'Gen components', date: new Date("12/26/2017")},
      {id:'2', text: 'added components', date: new Date("12/27/2017")},
      {id:'3', text: 'btstrap added', date: new Date("12/29/2017")}
    ]
   }

   getLogs(){
     return this.logs;
   }

}
