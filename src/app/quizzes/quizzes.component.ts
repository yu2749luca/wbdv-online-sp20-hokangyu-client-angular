import { Component, OnInit } from '@angular/core';
import {QuizzesServiceClient} from '../services/QuizzesServiceClient';
import {QuizServiceClient} from '../services/QuizServiceClient';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {
  constructor(private service: QuizzesServiceClient, private route: ActivatedRoute) { }
  quizzes = [];
  courseId = '';
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.courseId;
      this.service.findAllQuizzes()
        .then(quizzes => this.quizzes = quizzes);
    });
  }
  deleteQuiz = (deletedQuiz) =>
      this.service.deleteQuiz(deletedQuiz._id)
        .then(status => this.quizzes = this.quizzes.filter(quiz => quiz._id !== deletedQuiz._id))
  createQuiz = () => {
    this.service.createQuiz()
      .then(quiz => this.quizzes.push(quiz))
    ;
  }
}
