import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Service1Service} from "../../../services/service1.service";
import {Service2Service} from "../../../services/service2.service";
import {Service3Service} from "../../../services/service3.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public formbuilder: FormBuilder,
    public service2: Service2Service,
    public service3: Service3Service,
    public router: Router
  ) {
  }

  form = this.formbuilder.group(
    {
      username: [
        '',
        Validators.compose([Validators.required])
      ],
      password: [
        '',
        Validators.compose([Validators.required])
      ]
    }
  )

  get_form_control(): any {
    return this.form.controls
  }

  get_error_msg_for_username():any {
    const username = this.get_form_control().username
    if (username.hasError('required')) {
      return 'username is req';
    }
  }

  get_error_msg_for_password(): any {
    const password = this.get_form_control().password
    if (password.hasError('required')) {
      return 'password is req';
    }
  }

  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.form)

    const username = this.form.get('username')?.value;
    const password = this.form.get('password')?.value;

    const request = {username, password}

    this.service2.login(request).subscribe(value => {
      console.log(value)
      this.service3.openSnackBar(value.msg)
      if (value.status === 1) {
        setTimeout(() => {
          this.router.navigate(['/', 'login'])
        }, 3000)
      }
    })

  }

}
