import {Injectable} from '@angular/core';

const url = 'https://wbdv-generic-server.herokuapp.com/api/yu2749luca/courses';

@Injectable()
export class CourseServiceClient {
  findAllCourses = () => fetch(url)
      .then(response => response.json())
  findCourseById = (courseId) =>
    fetch(`${url}/${courseId}`)
      .then(response => response.json())
  createCourse = async (course) => {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(course),
      headers: {
        'content-type': 'application/json'
      }
    })
    return await response.json();
  }
  deleteCourse = async (courseId) => {
    const response = await fetch(`${url}/${courseId}`, {
      method: 'DELETE'
    })
    return await response.json();
  }
}

