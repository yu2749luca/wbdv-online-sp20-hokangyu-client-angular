import {Injectable} from '@angular/core';

const moduleLessonUrl = (moduleId) => `https://wbdv-generic-server.herokuapp.com/api/yu2749luca/modules/${moduleId}/lessons`
@Injectable()
export class LessonServiceClient {
  findLessonsForModule = (moduleId) =>
    fetch(moduleLessonUrl(moduleId))
      .then(response => response.json())
  addLesson = (moduleId) =>
    fetch(moduleLessonUrl(moduleId), {
      method: 'POST',
      body: JSON.stringify({title: 'New Lesson'}),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())
}
