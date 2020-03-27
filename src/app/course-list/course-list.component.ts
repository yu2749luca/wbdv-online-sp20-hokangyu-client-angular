import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/CourseServiceClient';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})


export class CourseListComponent implements OnInit {
  constructor(private service: CourseServiceClient) {}
  courseTitle = '';
  courses = [
    {_id: '123', title: 'course 01'}, {_id: '124', title: 'course 02'}, {_id: '125', title: 'course 03'}
  ];
  course = {title: ''}
  addCourse = () => {
    this.courses.push({_id: '222', title: this.courseTitle});
    this.course.title = this.courseTitle;
    this.service.createCourse(this.course);
  }
  deleteCourse = (deleteCourse) => {
    this.courses = this.courses.filter(course => course !== deleteCourse);
    this.service.deleteCourse(deleteCourse._id);
  }
  ngOnInit(): void {
    this.service.findAllCourses()
      .then(courses => this.courses = courses);
  }
}
