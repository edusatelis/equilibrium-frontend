import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  request: any;
  public form: FormGroup;

  constructor(public router: Router, public fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dataNasc: ['', Validators.required],
      password: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(15)]]
    });
   }

  ngOnInit(): void {
  }

  SignUp(){

  }
}
