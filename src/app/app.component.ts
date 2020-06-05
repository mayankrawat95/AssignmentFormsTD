import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectQuestion = "pet";
  answer = "";
  genders = ['male', 'female'];

  user = {
    username: "",
    mail: "",
    secretQuestion: "",
    answers: "",
    gender: ""
  }

  submitted = false;

  @ViewChild('f', {static: false}) signUpForm: NgForm


  //this.signUpForm.setValue (We can define the values of the whole object, below is a better approach for only changing properties that we want. Here we are forced to change the whole object!)

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signUpForm.form.patchValue({
      userData : {
        username : suggestedName
      }
    });
  }

 // onSubmit(form: NgForm){
 //   console.log(form)
 // }

  onSubmit(){
    this.submitted = true;
    this.user.username = this.signUpForm.value.userData.username;
    this.user.mail = this.signUpForm.value.userData.email;
    this.user.secretQuestion = this.signUpForm.value.secretQuestion;
    this.user.answers = this.signUpForm.value.questionAnswer;
    this.user.gender = this.signUpForm.value.gender;

    this.signUpForm.reset();
  }

}
