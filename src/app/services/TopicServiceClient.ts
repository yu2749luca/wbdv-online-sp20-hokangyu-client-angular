import {Injectable} from '@angular/core';

const topicLessonUrl = (lessonId) => `https://wbdv-generic-server.herokuapp.com/api/yu2749luca/lesson/${lessonId}/topics`
@Injectable()
export class TopicServiceClient {
  findAllTopicsByLesson = (lessonId) =>
    fetch(topicLessonUrl(lessonId))
    .then(response => response.json())
  addTopic = (lessonId) => fetch(topicLessonUrl(lessonId),{
    method: 'POST',
    body: JSON.stringify({title: 'New Topic'}),
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())
}
