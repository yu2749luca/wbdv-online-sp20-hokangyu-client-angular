import {Injectable} from '@angular/core';

const url = 'https://wbdv-generic-server.herokuapp.com/api/yu2749luca/courses';

@Injectable()
export class CourseServiceClient {
  findAllCourses = () => fetch(url)
      .then(response => response.json())
  findCourseById = (courseId) =>
    fetch(`${url}/${courseId}`)
      .then(response => response.json())
}
