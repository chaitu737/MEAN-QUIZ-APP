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
public quiz: any = [];
QID = [];
answer: any;
 userData: any;
 currentQuestion = 0;
 showButton = false;
 Value;
 // tslint:disable-next-line:variable-name
 is_ready_quiz = true;



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
this.quizService.getQuizQuestions(this.Value).subscribe(data => {
 this.showButton = true;
 console.log(data);
 this.quiz = data;
 console.log(this.quiz.questions[this.currentQuestion].text);
 this.is_ready_quiz = true;
});

}



getQuiztitle(value) {
this.Value = value;

}
ngOnInit() {
this.getTitles();
}





OnSubmit() {
console.log(this.answer);
}
}
