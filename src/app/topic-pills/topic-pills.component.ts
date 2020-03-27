import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TopicServiceClient} from '../services/TopicServiceClient';

@Component({
  selector: 'app-topic-pills',
  templateUrl: './topic-pills.component.html',
  styleUrls: ['./topic-pills.component.css']
})
export class TopicPillsComponent implements OnInit {
  constructor(private service: TopicServiceClient, private route: ActivatedRoute) { }
  topics = []
  courseId = ''
  moduleId = ''
  lessonId = ''
  topicId = ''
  addTopic = () => {
    alert('refresh');
    this.service.addTopic(this.lessonId);
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.courseId;
      this.moduleId = params.moduleId;
      this.lessonId = params.lessonId;
      this.topicId = params.topicId;
      this.service.findAllTopicsByLesson(this.lessonId)
        .then(topics => this.topics = topics);
    });
  }

}
