import {Injectable} from '@angular/core';

const local = 'http://localhost:3000';
const heroku = 'https://wbdv-spring2020-node-js-server.herokuapp.com';
@Injectable()
export class QuizzesServiceClient {
  createQuiz = () => fetch(`${heroku}/api/quizzes`, {
    method: 'POST',
    body: JSON.stringify({title: 'new quiz'}),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
  findAllQuizzes = () => fetch(`${heroku}/api/quizzes`)
    .then(response => response.json())

  deleteQuiz = (quizId) => fetch(`${heroku}/api/quizzes/${quizId}`, {
    method: 'DELETE'
  })
}
