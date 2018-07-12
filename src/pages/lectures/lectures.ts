import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Entry } from 'contentful';
import { ContentfulService } from '../../providers/contentful/contentful';

/**
 * Generated class for the LecturesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lectures',
  templateUrl: 'lectures.html',
})
export class LecturesPage implements OnInit {
  courses: Entry<any> [] = [];
  constructor(private contentful: ContentfulService , public navCtrl:NavController) {
    contentful.getCourses().then(courses => this.courses = courses ).then(() => {
      console.log(this.courses);
    });
   }

  ngOnInit() {

  }
  goToCourseDetailsPage(courseId) {
    this.navCtrl.push('LecturePage', courseId);
    //this.router.navigate(['/course/' + courseId]);
  }

}
