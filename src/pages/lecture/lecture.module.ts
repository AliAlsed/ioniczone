import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LecturePage } from './lecture';
import { MdToHtmlPipe } from '../../pipes/md-to-html/md-to-html';

@NgModule({
  declarations: [
    LecturePage,
    MdToHtmlPipe
  ],
  imports: [
    IonicPageModule.forChild(LecturePage),
  ],
})
export class LecturePageModule {}
