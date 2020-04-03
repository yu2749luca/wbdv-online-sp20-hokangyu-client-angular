import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {
  @Input()
  question;
  @Input()
  grading;
  answer: '';
  answer1: '';
  answer2: '';
  optionTrue: 'true';
  optionFalse: 'false';
  constructor() { }

  ngOnInit(): void {
  }

}
