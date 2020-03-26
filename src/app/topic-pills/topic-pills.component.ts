import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-topic-pills',
  templateUrl: './topic-pills.component.html',
  styleUrls: ['./topic-pills.component.css']
})
export class TopicPillsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  topics = [
    {_id: '123', title: 'topic 1' }, {_id: '124', title: 'topic 2' }, {_id: '123', title: 'topic 3' }
  ]
  courseId = ''
  moduleId = ''
  lessonId = ''
  topicId = ''
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.courseId;
      this.moduleId = params.courseId;
      this.lessonId = params.lessonId;
      this.topicId = params.topicId;
      fetch(`https://wbdv-generic-server.herokuapp.com/api/yu2749luca/lesson/${this.lessonId}/topics`)
        .then(response => response.json())
        .then(topics => this.topics = topics);
    });
  }

}
