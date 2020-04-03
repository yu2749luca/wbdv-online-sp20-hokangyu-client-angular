import {Injectable} from '@angular/core';

@Injectable()
export class QuizServiceClient {
  findAllQuestionsForQuiz = (qid) =>
    fetch(`http://localhost:3000/api/quizzes/${qid}/questions`)
      .then(response => response.json())
}
