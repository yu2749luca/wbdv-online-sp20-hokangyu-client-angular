import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModuleServiceClient} from '../services/ModuleServiceClient';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {
  constructor(private service: ModuleServiceClient, private route: ActivatedRoute) { }
  modules = [];
  courseId = '';
  moduleId = '';
  module = {title: 'new module'};
  addModule = () => {
    alert('refresh to see changes')
    this.service.createModule(this.courseId, this.module);
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.courseId;
      this.moduleId = params.moduleId;
      this.service.findModulesForCourse(this.courseId)
        .then(modules => this.modules = modules);
    });
  }
}
