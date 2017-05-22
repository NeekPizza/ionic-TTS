import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  text: string;
  rate?: number;
  locale?: string;

  constructor(
    public navCtrl: NavController,
    private tts: TextToSpeech) {
  };

  speak(){
    if(this.text && this.rate && this.locale){
      let options = {
      text: this.text,
      rate: this.rate/100,
      locale: this.locale
    }
    this.tts.speak(options);
    } else {
      alert('You left a field blank!');
    }
  };
  
};
