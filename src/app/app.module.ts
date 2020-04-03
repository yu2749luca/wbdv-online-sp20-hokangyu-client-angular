import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import {CourseServiceClient} from './services/CourseServiceClient';
import {FormsModule} from '@angular/forms';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ModuleListComponent } from './module-list/module-list.component';
import {ModuleServiceClient} from './services/ModuleServiceClient';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import {LessonServiceClient} from './services/LessonServiceClient';
import { TopicPillsComponent } from './topic-pills/topic-pills.component';
import {TopicServiceClient} from './services/TopicServiceClient';
import { WhiteboardComponent } from './whiteboard/whiteboard.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import {QuizzesServiceClient} from './services/QuizzesServiceClient';
import { QuizComponent } from './quiz/quiz.component';
import {QuizServiceClient} from './services/QuizServiceClient';
import { MultipleChoiceQuestionComponent } from './multiple-choice-question/multiple-choice-question.component';
import { TrueFalseQuestionComponent } from './true-false-question/true-false-question.component';



@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
    TopicPillsComponent,
    WhiteboardComponent,
    QuizzesComponent,
    QuizComponent,
    MultipleChoiceQuestionComponent,
    TrueFalseQuestionComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CourseServiceClient,
    ModuleServiceClient,
    LessonServiceClient,
    TopicServiceClient,
    QuizzesServiceClient,
    QuizServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
