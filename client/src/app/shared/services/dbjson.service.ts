import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DbjsonService {

  constructor(private http: HttpClient) { }

  getDb1(){
    return this.http.get('http://localhost:3000/listOfData')
  }
  deleteRow(data){
    return this.http.delete('http://localhost:3000/listOfData/' +data.id);
  }
  addCity(add){
    return this.http.post('http://localhost:3000/listOfData', add)
  }
  updateRow(Update) {
    return this.http.put('http://localhost:3000/listOfData/'+ Update.id, Update);
  }
  getTraining(){
    return this.http.get('http://localhost:3000/listOfTrainings')
  }
  deleteTraining(data){
    return this.http.delete('http://localhost:3000/listOfTrainings/' +data.id);
  }
  getTeam(){
    return this.http.get('http://localhost:3000/ourTeam')
  }
   updateTeam(member) {
    return this.http.put('http://localhost:3000/ourTeam/'+ member.id, member);
  }
}
