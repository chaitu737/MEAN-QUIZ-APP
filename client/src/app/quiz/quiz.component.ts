import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

export class QuizComponent implements OnInit {
form: FormGroup;
QuizTitles = [];
Quizquestions;
selectQuiz;
quiz;
QID = [];
  answer: any;
 userData: any;
 currentQuestion = 0;
 showButton: boolean;

constructor(
private router: Router,
private quizService: QuizService,
private formBuilder: FormBuilder

) {

}
getTitles() {
this.quizService.getQuiztitles().subscribe(data => {
const aData = Object.values(data);
aData.forEach((title: string, id: number) => {
 this.QuizTitles.push({
  title,
id
               });
      });

});
}
onSubmit() {
this.Quizquestions = this.quiz.questions;
this.showButton = true;


}


startQuiz(value) {
this.quizService.getQuizQuestions(value).subscribe(data => {
this.quiz = data;

     });


}
ngOnInit() {
this.getTitles();

}





OnSubmit() {
console.log(this.answer);
}
}
