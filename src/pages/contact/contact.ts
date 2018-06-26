import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CardPage} from '../card/card';

import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  myForm: FormGroup;
  constructor(public navCtrl: NavController,public fb:FormBuilder) {

    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      company: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required]], 
      password: ['', [Validators.pattern(/^[a-z0-9_-]{6,18}$/)]],
      
     
     
     });
    


  }
  
  saveData(){
    alert(JSON.stringify(this.myForm.value));
   
}

otrapag(){
this.navCtrl.push(CardPage);
}

agregarDatos(){}

    
}