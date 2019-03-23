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


}


startQuiz(value) {
this.quizService.getQuizQuestions(value).subscribe(data => {
this.quiz = data;
     });


}
ngOnInit() {
this.getTitles();

}



Answer(i, p) {
this.userData = {
QID: i.text,
AID: p
};
console.log(this.userData);
}

OnSubmit() {
console.log(this.answer);
}
}