import { Component, OnInit } from '@angular/core';
import {QuizServiceClient} from '../services/QuizServiceClient';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private router: Router, private service: QuizServiceClient, private route: ActivatedRoute) { }
  quizId = '';
  questions = [];
  grading = false;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizId = params.qid;
      this.service.findAllQuestionsForQuiz(this.quizId).then( questions => this.questions = questions);
    });
  }

  submitQuiz = () => {
    this.grading = !this.grading;
    fetch(`https://wbdv-spring2020-node-js-server.herokuapp.com/api/quizzes/${this.quizId}/attempts`, {
      method: 'POST',
      body: JSON.stringify(this.questions),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())
      .then(result => console.log(result));
  }
  done = () => {
    if (this.grading) {
      this.router.navigate(['quizzes']);
    } else {
      alert('quiz not submitted');
    }
  }
}

