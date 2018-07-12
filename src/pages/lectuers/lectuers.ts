import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { ContentFulService } from '../../providers/contentful-service/contentful-service';
import { Entry } from 'contentful';


@IonicPage()
@Component({
  selector: 'page-lectuers',
  templateUrl: 'lectuers.html',
})
export class LectuersPage {

  courses: Entry<any> [] = [];
  constructor(public app:App,
    private contentful: ContentFulService , public navCtrl:NavController) { }

  ngOnInit() {
    this.contentful.getCourses()
    .then(courses => this.courses = courses ).then(() => {
      console.log(this.courses);
    });
  }
  goToCourseDetailsPage(courseId) {
    this.app.getRootNav().push('LectuerPage', courseId);
    //this.router.navigate(['/course/' + courseId]);
  }
  goToLec(){
    //this.navCtrl.push(LectuerPage)
  }

}
