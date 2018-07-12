import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LectuerPage } from './lectuer';
import { MdToHtmlPipe } from '../../pipes/md-to-html/md-to-html';

@NgModule({
  declarations: [
    LectuerPage,
    MdToHtmlPipe
  ],
  imports: [
    IonicPageModule.forChild(LectuerPage),
  ],
  exports:[
    LectuerPage
  ]
})
export class LectuerPageModule {}
