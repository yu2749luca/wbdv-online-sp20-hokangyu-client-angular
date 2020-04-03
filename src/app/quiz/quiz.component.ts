import { Component, OnInit } from '@angular/core';
import {QuizServiceClient} from '../services/QuizServiceClient';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private service: QuizServiceClient, private route: ActivatedRoute) { }
  quizId = '';
  questions = [];
  grading = false;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizId = params.qid;
      this.service.findAllQuestionsForQuiz(this.quizId).then( questions => this.questions = questions);
    });
  }
  grade = () => {
    this.grading = !this.grading;
  }
}

