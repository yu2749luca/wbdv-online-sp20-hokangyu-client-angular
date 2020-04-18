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
  quizzes = [{attempts: [], title: '', _id: ''}];
  courseId = '';
  ngOnInit(): void {
    this.service.findAllQuizzes()
      .then(quizzes => {
        this.quizzes = quizzes;
        return quizzes.map(quiz => {
          return fetch(`https://wbdv-spring2020-node-js-server.herokuapp.com/api/quizzes/${quiz._id}/attempts`)
            .then(response => response.json());
        });
      })
      .then(attemptPromises => {
        return Promise.all(attemptPromises);
      })
      .then(attempts => {
        for (let i = 0; i < this.quizzes.length; i++) {
          // @ts-ignore
          this.quizzes[i].attempts = attempts[i];
        }
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
