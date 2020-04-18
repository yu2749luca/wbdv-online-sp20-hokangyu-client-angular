import {Injectable} from '@angular/core';
const heroku = 'https://wbdv-spring2020-node-js-server.herokuapp.com';
@Injectable()
export class QuizServiceClient {
  findAllQuestionsForQuiz = (qid) =>
    fetch(`${heroku}/api/quizzes/${qid}/questions`)
      .then(response => response.json())
}
