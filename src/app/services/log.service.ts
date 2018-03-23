import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'

import { Log } from '../models/Log'
@Injectable()
export class LogService {
logs:Log[];

private logSource = new BehaviorSubject<Log>({id:null, text: null, date: null});
selectedLog = this.logSource.asObservable();

  constructor() {
    this.logs = [
      {id:'1', text: 'Gen components', date: new Date("12/26/2017")},
      {id:'2', text: 'added components', date: new Date("12/27/2017")},
      {id:'3', text: 'btstrap added', date: new Date("12/29/2017")}
    ]
   }

   getLogs():Observable<Log[]>{
     return of(this.logs);
   }

   setFormLog(log: Log){
     this.logSource.next(log);
   }

   addLog(log:Log){
     this.logs.unshift(log);
   }

   updateLog(log){
     this.logs.forEach((item,index)=>{
       if(log.id === item.id){
         this.logs.splice(index,1);
       }
     })
     this.logs.unshift(log);
   }

   deleteLog(log){
     this.logs.forEach((item,index)=>{
       if(log.id === item.id){
         this.logs.splice(index,1);
       }
     })
   }

}
