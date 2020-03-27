import {Injectable} from '@angular/core';

const moduleCourseUrl = (courseId) => `https://wbdv-generic-server.herokuapp.com/api/yu2749luca/courses/${courseId}/modules`


@Injectable()
export class ModuleServiceClient {
  findModulesForCourse = (courseId) =>
    fetch(moduleCourseUrl(courseId))
      .then(response => response.json())
  createModule = (courseId, module) => {
    return fetch(moduleCourseUrl(courseId), {
      method: 'POST',
      body: JSON.stringify(module),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())
  }
}
