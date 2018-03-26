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

private stateSource = new BehaviorSubject<boolean>(true);
stateClear = this.stateSource.asObservable();
  constructor() {
    // this.logs = [
    //   {id:'1', text: 'Gen components', date: new Date("12/26/2017")},
    //   {id:'2', text: 'added components', date: new Date("12/27/2017")},
    //   {id:'3', text: 'btstrap added', date: new Date("12/29/2017")}
    // ]
    this.logs = [];
   }

   getLogs():Observable<Log[]>{
     if(localStorage.getItem('logs') === null) {
       this.logs = [];
     }else{
       this.logs = JSON.parse(localStorage.getItem('logs'));
     }
     return of(this.logs.sort((a,b)=>{
       return b.date-a.date
     }));
   }

   setFormLog(log: Log){
     this.logSource.next(log);
   }

   addLog(log:Log){
     this.logs.unshift(log);

     //Add to local storage

     localStorage.setItem('logs', JSON.stringify(this.logs));
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

   clearState(){
     this.stateSource.next(true);
   }

}
