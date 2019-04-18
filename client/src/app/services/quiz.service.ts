import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  domain = 'http://localhost:3000';

  constructor(
private http: HttpClient
  ) { }

getQuiztitles() {
return this.http.get(this.domain).map(res => res);
}
getQuizQuestions(id) {
return this.http.get(this.domain + '/quiz/' + id ).map(res => res);
}
getQuizdata() {
return this.http.get(this.domain + '/quiz' ).map(res => res);
}
}
