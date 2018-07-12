import { ContentfulService } from './../../providers/contentful/contentful';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Entry } from 'contentful';

/**
 * Generated class for the LecturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lecture',
  templateUrl: 'lecture.html',

})
export class LecturePage {

  course: Entry<any>;
  constructor(private contentfulService: ContentfulService,

    public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {

      const courseId = this.navParams.data;
      this.contentfulService.getCourse(courseId)
        .then((course) => {
          this.course = course;
          console.log(this.course);
        });

  }

}
