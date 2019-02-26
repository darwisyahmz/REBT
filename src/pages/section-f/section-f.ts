import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
// import { Storage } from "@ionic/storage";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

/**
 * Generated class for the SectionFPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-section-f',
  templateUrl: 'section-f.html',
})
export class SectionFPage {

  answer: string;
  answers = {
    tarikh: Date().toString(),
    jawapanA: "",
    jawapanB: "",
    jawapanC: "",
    jawapanD: "",
    jawapanE: "",
    jawapanF: "",
    jawapanG: "",
  }

  someForm : FormGroup;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public formBuilder: FormBuilder,
     public alertCtrl: AlertController
     ) {
       this.someForm = formBuilder.group({
         'answer': ['', Validators.required]
       })
      this.answers = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log(this.answers);
    console.log('ionViewDidLoad SectionFPage');
  }

  info(){
    let alert = this.alertCtrl.create({
      title: 'Bahagian F',
      subTitle: 'info',
      buttons: ['Kembali']
    });
    alert.present();
  }

  seterusnya(){
    this.answers.jawapanF = this.answer;
    this.navCtrl.push("SectionGPage",{
      data: this.answers
    });
  }
}
