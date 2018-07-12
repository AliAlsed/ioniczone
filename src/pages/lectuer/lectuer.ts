import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContentFulService } from '../../providers/contentful-service/contentful-service';
import { Entry } from 'contentful';



/**
 * Generated class for the LectuerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lectuer',
  templateUrl: 'lectuer.html',

})
export class LectuerPage implements OnInit {

  course: Entry<any>;
  mycourse:any;
  title='';
  constructor(private contentfulService: ContentFulService,

    public navCtrl: NavController, public navParams: NavParams) {

  }
  ngOnInit(){
    const courseId = this.navParams.data;
    this.contentfulService.getCourse(courseId)
      .then((course) => {
        this.course = course;
        this.mycourse=this.course.fields;
        console.log(this.mycourse);
      });
  }

  ionViewDidLoad() {


  }



}
