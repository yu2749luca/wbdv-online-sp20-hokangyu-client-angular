import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LessonServiceClient} from '../services/LessonServiceClient';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  constructor(private service: LessonServiceClient, private route: ActivatedRoute) { }
  lessons = [
  ]
  moduleId = ''
  courseId = ''
  lessonId = ''
  addLesson = () => {
    alert('refresh to see');
    this.service.addLesson(this.moduleId);
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.moduleId = params.moduleId;
      this.courseId = params.courseId;
      this.lessonId = params.lessonId;
    })
    this.service.findLessonsForModule(this.moduleId)
      .then(lessons => this.lessons = lessons);
  }

}
