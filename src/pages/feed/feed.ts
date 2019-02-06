import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public nome_variavel: string = "Fabinho, deu certo!";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public minha_funcao(){
    alert("deu certo...");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    //this.minha_funcao();
  }

}
