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
QuizTitles;
Quizquestions;
selectQuiz = false;
public quiz: any = [];

 currentQuestion = 0;

 Value;




constructor(
private router: Router,
private quizService: QuizService,
private formBuilder: FormBuilder

) {

}
getTitles() {
this.quizService.getQuiztitles().subscribe(data => {
this.QuizTitles = data;

});

}

onSubmit() {
this.quizService.getQuizQuestions(this.Value).subscribe(data => {
this.quiz = data;
console.log(this.quiz);
console.log(this.quiz.questions[this.currentQuestion].text);
});

}

getQuiztitles(value) {
this.Value = value;


}
ngOnInit() {
this.getTitles();
}




}
