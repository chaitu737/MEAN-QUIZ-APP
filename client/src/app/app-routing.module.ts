import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent },
  {path: 'quiz', component: QuizComponent},
  {path: 'result', component: ResultComponent},
  {path: 'navbar', component: NavbarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
