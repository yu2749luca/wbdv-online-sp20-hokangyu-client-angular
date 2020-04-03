import {Injectable} from '@angular/core';

@Injectable()
export class QuizzesServiceClient {
  createQuiz = () => fetch(`http://localhost:3000/api/quizzes`, {
    method: 'POST',
    body: JSON.stringify({title: 'new quiz'}),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
  findAllQuizzes = () => fetch(`http://localhost:3000/api/quizzes`)
    .then(response => response.json())

  deleteQuiz = (quizId) => fetch(`http://localhost:3000/api/quizzes/${quizId}`, {
    method: 'DELETE'
  })
}
